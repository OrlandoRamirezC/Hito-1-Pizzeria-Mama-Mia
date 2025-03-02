import { Toaster, toast } from 'sonner'
import { useState } from "react";

const RegisterPage = () => {
  const [users, SetUsers] = useState({
    email: '',
    contraseña: '',
    confcontraseña: ''
  })
  const handleChange = (e) => {
    SetUsers({ ...users, [e.target.name]: e.target.value })
  }
  //Para hacer que la información se retenga hasta que esté completa y se cliquee en botón
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, contraseña, confcontraseña } = users
    //Si están vacios ... alert
    if (!email.trim() || !contraseña.trim() || !confcontraseña.trim()) {
      toast.error('Llene todos los campos')
      return
    }
    if (contraseña.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres')
      return
    }
    if (contraseña !== confcontraseña) {
      toast.error('Las contraseñas no coinciden')
      return
    }
    toast.success('Registro correcto')
    setUsers({ email: '', contraseña: '', confcontraseña: '' })
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
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input type='password' className='form-control' name='contraseña' value={users.contraseña} onChange={handleChange} placeholder='Escribe tu contraseña' />
          </div>
          <div className="mb-3 col-md-3">
            <label htmlFor="confcontraseña" className="form-label">Confirmar contraseña</label>
            <input type='password' className='form-control' name='confcontraseña' value={users.confcontraseña} onChange={handleChange} placeholder='Confirma tu contraseña' />
          </div>
          <button type="submit" className='btn btn-primary'>Crear cuenta</button>
        </form>
      </main>
    </>
  );
}

export default RegisterPage;