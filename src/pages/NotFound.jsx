import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <Container className='mx-auto p-2 text-center'>
        <img src='.\src\assets\error404.jpg' alt='not found' />
        <Link>
        <Link to='/' >
              <p className='text-center'>Volver a la página principal</p>
            </Link>
        </Link>
    </Container>
    </>
  )
}

export default NotFound