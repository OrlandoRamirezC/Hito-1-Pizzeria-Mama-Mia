
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';


const NavBar = () => {
  const { calcularTotal } = useContext(CartContext)
  const { token, logout } = useContext(UserContext)

  const validateRoot = ({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-outline-light'
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container bg-dark'>
        <Navbar.Brand href="#home" v className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className={validateRoot}> Home
            </NavLink>
            <NavLink to={token ? '/profile' : '/login'} className={validateRoot}> {token ? "Profile" : "Login"}
            </NavLink>
            {/*             <NavLink to={token ?  'profile' : '/register'} className={validateRoot}>{token ? 'Logout' : "Registrar"}
            </NavLink>  */}
            {token ?
              <button type="submit" className='btn btn-warning' onClick={() => logout()}>Logout</button>
              :
              <NavLink to={'/register'} className={validateRoot}>{"Registrar"}
              </NavLink>
            }
          </Nav>
        </Navbar.Collapse>
        <Link to='/cart'>
          <Button variant="outline-warning" className="justify-content-end">Total: $ {calcularTotal()}</Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;