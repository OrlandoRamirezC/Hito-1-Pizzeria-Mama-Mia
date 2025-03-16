import Container from 'react-bootstrap/Container';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Profile = () => {
  const { logout } = useContext(UserContext)
  return (
    <>
      <Container className='mx-auto p-2 text-center'>
        <h1>Profile</h1>
        <div>
          <label htmlFor="email" className="form-label">Email: <span>xyz@xyz.com</span></label>
        </div>
        <button type="submit" className='btn btn-primary' onClick={() => logout()}>Cerrar sesión</button>
      </Container>
    </>
  )
}

export default Profile