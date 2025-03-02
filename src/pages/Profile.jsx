import Container from 'react-bootstrap/Container';

const Profile = () => {
    return (
        <>
        <Container className='mx-auto p-2 text-center'>
            <h1>Profile</h1>
            <div>
            <label htmlFor="email" className="form-label">Email: <span>xyz@xyz.com</span></label>
          </div>
          <button type="submit" className='btn btn-primary'>Cerrar sesión</button>
        </Container>
        </>
      )
    }

export default Profile