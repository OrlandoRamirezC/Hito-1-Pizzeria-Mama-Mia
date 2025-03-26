import { Toaster, toast } from 'sonner'
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const RegisterPage = () => {
  const { register } = useContext(UserContext)
  const navigate = useNavigate()

  const [users, SetUsers] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState(null)
  // Actualiza los datos del formulario
  const handleChange = (e) => {
    SetUsers({ ...users, [e.target.name]: e.target.value })
  }
  //Para hacer que la información se retenga hasta que esté completa y se cliquee en botón
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      const { email, password, confpassword } = users
      //Si están vacios ... alert
      if (!email.trim() || !password.trim() || !confpassword.trim()) {
        toast.error('Llene todos los campos')
        return
      }
      if (password.length < 6) {
        toast.error('La contraseña debe tener al menos 6 caracteres')
        return
      }
      if (password !== confpassword) {
        toast.error('Las contraseñas no coinciden')
        return
      }
      toast.success('Registro correcto')

      await register(users.email, users.password)
      navigate('/')
    } catch (error) {
      setError(error.response?.data?.error || 'Error al registrar usuario')
    }
  }
  return (
    <>
      <main className='container m-5 p-5 h-100 '>
        <h1>Registrarse</h1>
        <Toaster position="top-center" />
        <form onSubmit={handleSubmit}>
          <div className="mb-3 col-md-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type='email' className='form-control' name='email' value={users.email} onChange={handleChange} placeholder='Escribe tu email' />
          </div>
          <div className="mb-3 col-md-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type='password' className='form-control' name='password' value={users.password} onChange={handleChange} placeholder='Escribe tu contraseña' />
          </div>
          <div className="mb-3 col-md-3">
            <label htmlFor="confpassword" className="form-label">Confirmar contraseña</label>
            <input type='password' className='form-control' name='confpassword' value={users.confpassword} onChange={handleChange} placeholder='Confirma tu contraseña' />
          </div>
          <button type="submit" className='btn btn-primary'>Crear cuenta</button>
        </form>
      </main>
    </>
  );
}

export default RegisterPage;