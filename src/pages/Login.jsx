import { Toaster, toast } from 'sonner'
import { useContext, useState } from "react";
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(UserContext)
  const [users, SetUsers] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    SetUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = users
    if (!email.trim() || !password.trim()) {
      toast.error('Llene todos los campos')
      return
    }
    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres')
      return
    }
     /*     if (password !== users.password ) {
          toast.error('La contraseña es incorrecta')
          return
        } */ 
    toast.success('Ingreso correcto')


    await login(users.email, users.password)
    navigate('/')
  }
  return (
    <>
      <main className='container m-5 p-5 h-100 '>
        <h1>Login</h1>
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
          <button type="submit" className='btn btn-primary'>Login</button>
        </form>
      </main>
    </>
  );
}

export default LoginPage