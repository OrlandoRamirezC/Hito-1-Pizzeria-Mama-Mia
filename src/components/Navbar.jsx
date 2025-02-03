
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    const total= 25000;
    const formatoTotal = total.toLocaleString("es")
    const token= false;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container bg-dark'>
        <Navbar.Brand href="#home"v className= "text-white">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Button variant="outline-light">Home</Button>
            <Button variant="outline-light">{token ? "Profile": "Login"}</Button>
            <Button variant="outline-light">{token ? "Logout": "Register"}</Button>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-warning" className="justify-content-end">Total: $ {formatoTotal}</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;