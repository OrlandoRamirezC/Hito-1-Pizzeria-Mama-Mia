
const CardPizza = ({ img, nombre, ingredientes, precio, descripcion, id }) => {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top img-fluid w-100" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-center text-capitalize">{nombre}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center fs-6">Ingredientes: {ingredientes.map((item) => (
            <li className='card-text list-unstyled' key={item}>{item}</li>
          ))} </li>
          <li className="list-group-item text-center fs-4">Precio: $ {precio}</li>
        </ul>
        <div className="card-body d-flex justify-content-around">
        <button type="button" className="btn btn-primary">Ver más</button>
          <button type="button" className="btn btn-primary">Añadir</button>
        </div>
      </div>
    </>
  )
}

export default CardPizza