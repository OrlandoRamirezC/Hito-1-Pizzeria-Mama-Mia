
import '../components/cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const Cart = () => {
const {cart, aumentar, quitar, calcularTotal}= useContext(CartContext)
const {token} = useContext(UserContext)

  return (
    <>
      <main className='container m-3'>
        <h3>Detalles del pedido:</h3>
        {cart.map((pizza) => (
          <main className='container p-1 h-25 w-50 ' key={pizza.id}>
            <div className="caja" >
              <div className="cajita1">
                <img src={pizza.img} alt='img'/>
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
          <div className="row w-100 align-items-center">
            <div className="col text-center"> {token ? 
              <button className="btn btn-primary regular-button btn-lg"> Pagar </button> : ''}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Cart