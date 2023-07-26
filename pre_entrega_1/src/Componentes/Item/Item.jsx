import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id}>
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={item.imagen} alt={item.nombre} />
                    <Card.Body>
                        <Card.Title bg="Light">{item.nombre}</Card.Title>
                        <Card.Text className="mb-2 text-muted">{item.descripcion}</Card.Text>
                        <Card.Text>$ {item.precio}</Card.Text>
                        <Button variant="success">Agregar+</Button>
                    </Card.Body>            
                </Card>   
        </Link>
  )
}

export default Item