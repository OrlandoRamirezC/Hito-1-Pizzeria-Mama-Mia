import { BrowserRouter } from "react-router-dom"
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import { useEffect } from 'react'
import CartProvider from "./context/CartContext"
import AppRoutes from "./routes/AppRoutes"


const App = () => {
  useEffect(() => {
    document.title = 'Hito - Pizzeria Mamma Mia'
  }, [])
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <AppRoutes />
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App