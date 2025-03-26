import { Toaster, toast } from 'sonner'
import '../components/cart.css'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
const {cart, aumentar, quitar, calcularTotal}= useContext(CartContext)
const {token, carritoCheck} = useContext(UserContext)
const [error, setError] = useState(null)

  const [carrito, setCarrito] = useState(
    {
      cart: []
    }
  );

  const handleChange = (e) => {
    setCarrito({ ...carrito, [e.target.name]: e.target.value })
  }
  const handleCheckout = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await carritoCheck(carrito.cart)
      toast.success('Se ha realizado la compra, disfruta tus pizzas!')
    } catch (error) {
      setError(error.response?.data?.error || 'Error al llevar carrito')
    }
  };

  return (
    <>
      <main className='container m-3'>
        <h3>Detalles del pedido:</h3>
        <Toaster position="top-center" />
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
              <button className="btn btn-primary regular-button btn-lg" onChange={handleChange} onClick={handleCheckout}> Pagar </button>
              :
              <button className="btn btn-primary regular-button btn-lg" onClick={() => navigate('/login')}> Inicia sesión para pagar </button>
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Cart