import { Toaster, toast } from 'sonner'
import { useState } from "react";

const LoginPage = () => {
  const [users, SetUsers] = useState({
    email: '',
    contraseña: '',
  })
  const handleChange = (e) => {
    SetUsers({ ...users, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, contraseña } = users
    if (!email.trim() || !contraseña.trim()) {
      toast.error('Llene todos los campos')
      return
    }
    if (contraseña.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres')
      return
    }
    toast.success('Registro correcto')
    setUsers({ email: '', contraseña: '' })
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
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input type='contraseña' className='form-control' name='contraseña' value={users.contraseña} onChange={handleChange} placeholder='Escribe tu contraseña' />
          </div>
          <button type="submit" className='btn btn-primary'>Login</button>
        </form>
      </main>
    </>
  );
}

export default LoginPage