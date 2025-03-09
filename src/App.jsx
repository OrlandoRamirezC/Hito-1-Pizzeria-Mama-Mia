import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, LoginPage, Cart, Pizza, RegisterPage, NotFound, Profile } from './pages/index'  //Barrels
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import { useEffect } from 'react'
import CartProvider from "./context/CartContext"

const App = () => {

  useEffect(() => {
    document.title = 'Hito - Pizzeria Mamma Mia'
  }, [])
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App