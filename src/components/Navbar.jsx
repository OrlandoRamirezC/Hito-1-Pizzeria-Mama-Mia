
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const NavBar = () => {
  const total = 25000;
  const formatoTotal = total.toLocaleString("es")
  const token = false;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container bg-dark'>
        <Navbar.Brand href="#home" v className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' >
              <Button variant="outline-light">Home</Button>
            </Link>
            <Link to='/login' >
              <Button variant="outline-light">{token ? "Profile" : "Login"}</Button>
            </Link>
            <Link to='/register'>
              <Button variant="outline-light">{token ? "Logout" : "Register"}</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to='/cart'>
          <Button variant="outline-warning" className="justify-content-end">Total: $ {formatoTotal}</Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;