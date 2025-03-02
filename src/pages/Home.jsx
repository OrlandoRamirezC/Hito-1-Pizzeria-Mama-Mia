import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { useEffect, useState } from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  const getPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    return setPizzas(data)
  }

  useEffect(() => {
    getPizzas()
  }, [])
  return (
    <>
      <Header />
      <div className="container-fluid d-flex flex-wrap gap-3 m-2 justify-content-center">
        {pizzas.map((pizza) => (
          <CardPizza
            id={pizza.id}
            nombre={pizza.name}
            precio={pizza.price}
            descripcion={pizza.desc}
            img={pizza.img}
            ingredientes={pizza.ingredients}
          />
        ))}
      </div>
    </>
  )
}

export default Home