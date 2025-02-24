import Footer from './components/Footer'
import Home from './components/Home'
//import RegisterPage from './components/Register'
import NavBar from './components/Navbar'
//import LoginPage from './components/Login'
import Cart from './components/Cart'
import Pizza from './components/Pizza'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    document.title = 'Hito - Pizzeria Mamma Mia'
  }, [])
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/*  <RegisterPage />
    <LoginPage /> */}
      {/*  <Cart /> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App