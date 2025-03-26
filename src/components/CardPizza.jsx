import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Toaster, toast } from 'sonner'

const CardPizza = ({ img, nombre, ingredientes, precio, descripcion, id }) => {
  const { agregarPizza } = useContext(CartContext)
  const { token } = useContext(UserContext)
  const navigate = useNavigate();
  const irAPizza = () => {
    navigate(`/pizza/${id}`);
  };
  const advertencia = () =>{
    toast.error('Inicia sesión para añadir al carrito')
  }

  return (
    <>
      <div className="card" key={id} style={{ width: '18rem' }}>
        <img className="card-img-top img-fluid w-100" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-center text-capitalize">{nombre}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center fs-6">Ingredientes: {ingredientes?.map((item) => (
            <li className='card-text list-unstyled' key={item}>{item}</li>
          ))} </li>
          <li className="list-group-item text-center fs-4">Precio: $ {precio}</li>
        </ul>
        <div className="card-body d-flex justify-content-around">
          <button type="button" className="btn btn-primary" onClick={irAPizza}>Ver más</button>
          <Toaster position="top-center" />
          {token ?
            <button className="btn btn-primary" onClick={() => agregarPizza(id)}>Añadir</button>
            :
            <button className="btn btn-primary" onClick={() => advertencia()}>Añadir</button>}
        </div>
      </div>
    </>
  )
}

export default CardPizza