
import { pizzaCart } from '../pizzas'
import '../components/cart.css'
import { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const calcularTotal = () => {
    let total = 0
    cart.map((pizza) => {
      total += pizza.price * pizza.count
    })
    return total
  }

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
    const nuevoCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return {
          ...pizza,
          count: pizza.count - 1,
        }
      }
      return pizza
    })
    setCart(nuevoCart)
  }
  return (
    <>
      <main className='container m-3'>
        <h3>Detalles del pedido:</h3>
        {pizzaCart.map((pizza) => (
          <main className='container p-1 h-25 w-50 ' >
            <div className="caja" key={pizza.id}>
              <div className="cajita1">
                <img src={pizza.img} alt='img' />
                <p>{pizza.name}</p>
              </div>
              <div className="cajita2 d-flex align-items-center gap-2">
                <p>${pizza.price}</p>
                <button className='btn btn-outline-warning' onClick={() => quitar(pizza.id)}>-</button>
                <span> {pizza.count} </span>
                <button className='btn btn-outline-primary' onClick={() => aumentar(pizza.id)}>+</button>
              </div>
            </div>
          </main>
        ))}
        <h2>Total: $ {calcularTotal()}</h2>
        <div className="container-fluid h-100">
          <div class="row w-100 align-items-center">
            <div class="col text-center">
              <button class="btn btn-primary regular-button btn-lg"> Pagar </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Cart