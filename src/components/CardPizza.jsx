import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = ({img, nombre, ingredientes, precio}) => {
  return (
    <>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-center fs-3">{nombre}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <Card.Text className="text-center fs-4">
          Ingredientes:
        </Card.Text>
        <ListGroup.Item className="text-center fs-5"> {ingredientes}</ListGroup.Item>
      </ListGroup>
      <br />
      <Card.Text className="text-center fs-3">
          Precio: $ {precio}
        </Card.Text>
      <Card.Body className="d-flex justify-content-around">
      <Button variant="primary">Ver más</Button>
      <Button variant="primary">Añadir</Button>
      </Card.Body>
    </Card>
{/*     <img src={img} alt={img} />
    <h2>{nombre}</h2>
    <p>Ingredientes:</p>
    <p>{ingredientes}</p>
    <h3>{precio}</h3>
    <Button variant="outline-dark">Dark</Button>
    <Button variant="dark">Dark</Button> */}
    </>
  )
}

export default CardPizza