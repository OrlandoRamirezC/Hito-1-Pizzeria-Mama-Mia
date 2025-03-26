import Container from 'react-bootstrap/Container';
import { UserContext } from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';

const Profile = () => {
  const { logout } = useContext(UserContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, []);
  return (
    <>
      <Container className='mx-auto p-2 text-center'>
        {user
          ? (
            <Container className='mx-auto p-2 text-center'>
              <h1>Profile</h1>
              <div>
                <label htmlFor="email" className={"form-label"}>Email: <span>{user.email}</span></label>
              </div>
              <button type="submit" className='btn btn-primary' onClick={() => logout()}>Cerrar sesión</button>
            </Container>
          )
          : (
            <Container className='mx-auto p-2 text-center'>
              <h2> Por favor, inicia sesión para ver tu perfil.</h2>
            </Container>
          )}
      </Container>
    </>
  )
}

export default Profile