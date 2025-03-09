import { createContext, useState, useEffect } from "react";
import { pizzaCart } from '../pizzas';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
 
  const [cart, setCart] = useState(pizzaCart)
  const [pizzas, setPizzas] = useState([])

  const getPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    return setPizzas(data)
  }
  useEffect(() => {
    getPizzas()
  }, [])

  const aumentar = (id) => {
    const nuevoCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return {
          ...pizza,
          count: pizza.count + 1,
        }
      }
      return pizza
    })
    setCart(nuevoCart)
  }

  const quitar = (id) => {
    setCart((nuevoCart) => {
      if (nuevoCart.find((pizza) => pizza.id === id)?.count === 1) {
        return nuevoCart.filter((pizza) => pizza.id !== id)
      } else {
        return nuevoCart.map((pizza) => {
          if (pizza.id === id) {
            return { ...pizza, count: pizza.count - 1 }
          } else {
            return pizza
          }
        })
      }
    })
  }
  const agregarPizza = (id) => {
    setCart((nuevoCart) => {
      const pizzaEncontrada = nuevoCart.find((pizza) => pizza.id === id);
      if (pizzaEncontrada) {
        return nuevoCart.map((pizza) => {
          if (pizza.id === id) {
            return { ...pizza, count: pizza.count + 1 };
          } else {
            return pizza
          }
        })
      } else {
        return [...nuevoCart, { id, count: 1 }]
      }
    })
  }
  
  const calcularTotal = () => {
    let total = 0
    cart.map((pizza) => {
      total += pizza.price * pizza.count
    })
    return total.toLocaleString('es')
  }

  const stateGlobal = {
    cart,
    pizzas,
    setCart,
    aumentar,
    quitar,
    calcularTotal,
    agregarPizza,
  }
  return (
    <CartContext.Provider value={stateGlobal}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

