import Footer from './components/Footer'
import Home from './components/Home'
//import RegisterPage from './components/Register'
import NavBar from './components/Navbar'
//import LoginPage from './components/Login'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
    <NavBar />
    { /*<Home />
    <RegisterPage />
    <LoginPage />*/}
    <Cart />
    <Footer />
    </>
  )
}

export default App