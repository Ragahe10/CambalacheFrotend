import React from 'react'
import { useState, useEffect } from 'react'
import {  Card, Row, Col, Button } from 'react-bootstrap';


function CardsProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://cambalachebackend.onrender.com/api/producto')
            .then(response => response.json())
            .then(data => {
                if (data && data.productos) {
                    setProductos(data.productos);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Row xs={1} sm={2} md={4} className="g-4">
            {productos.map((producto, index) => (
                <Col key={index}>
                    <Card style={{ margin: '10px' }}>
                    <Card.Img variant="top"
                    src={producto.image || '/imagenes/agendas.jpg'}
                    alt={producto.nombre} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            
                            <Card.Text>Precio: {producto.precio}</Card.Text>
                            <Button variant="primary">Ver más</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </div>
    );
}

export default CardsProductos;

