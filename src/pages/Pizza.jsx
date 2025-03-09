import { useEffect, useState } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState([])

  const getPizza = async (id) => {
    const res = await fetch('http://localhost:5000/api/pizzas/p001')
    const data = await res.json()
    return setPizza(data)
  }
  
  useEffect(() => {
    getPizza()
  }, [])

  return (
    <>
      <div className="container-fluid d-flex flex-wrap gap-3 m-2 justify-content-center">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top img-fluid w-100" src={pizza.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title text-center text-capitalize">{pizza.name}</h5>
            <p className="card-text text-center fs-6">{pizza.desc}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center fs-6">Ingredientes: {pizza.ingredients?.map((item) => (
              <li className='card-text list-unstyled' key={item}>{item}</li>
            ))} </li>
            <li className="list-group-item text-center fs-4">Precio: $ {pizza.price}</li>
          </ul>
          <div className="card-body d-flex justify-content-around">
            <button type="button" className="btn btn-primary">Añadir</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pizza