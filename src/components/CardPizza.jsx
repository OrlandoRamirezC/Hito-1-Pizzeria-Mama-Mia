import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = ({ img, nombre, ingredientes, precio, descripcion, id }) => {
  return (
    <>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center fs-3">{nombre}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="text-center fs-6"> {descripcion}</ListGroup.Item>
          <Card.Text className="text-center fs-5">
            Ingredientes:
          </Card.Text>
          <ListGroup.Item className="text-center fs-6"> {ingredientes.map((item) => (
            <li className='card-text list-unstyled' key={item}>{item}</li>
          ))}</ListGroup.Item>
        </ListGroup>
        <br />
        <Card.Text className="text-center fs-4">
          Precio: $ {precio}
        </Card.Text>
        <Card.Body className="d-flex justify-content-around">
          <Button variant="primary">Ver más</Button>
          <Button variant="primary">Añadir</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardPizza