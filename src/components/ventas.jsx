import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';

const ConfirmacionVenta = ({ carrito, totalVenta, cancelarVenta, confirmarVenta }) => {
    return (
        <Container className="py-5" style={{ backgroundColor: '#FCE4EC', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}> {/* Cambia el color de fondo a rosa claro y agrega bordes redondeados y sombra */}
            <h2 className="text-center mb-5" style={{ color: '#FF69B4' }}>Confirmación de Venta</h2> {/* Cambia el color del texto a rosa brillante */}
            <Row>
                <Col md={8} className="mx-auto">
                    <ListGroup variant="flush">
                        {carrito.map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FFF0F5' }}> {/* Cambia el color de fondo de los elementos de la lista a rosa claro */}
                                <span className="font-weight-bold" style={{ color: '#FF1493' }}>{item.nombre}</span> <span>- ${item.precio}</span> {/* Cambia el color del texto a rosa medio */}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <hr className="my-4" style={{ borderTop: '1px solid #FF69B4' }} /> {/* Cambia el color de la línea horizontal a rosa brillante */}
                    <Row>
                        <Col className="text-right">
                            <p className="font-weight-bold" style={{ color: '#FF69B4' }}>Total de la venta: ${totalVenta}</p> {/* Cambia el color del texto a rosa brillante */}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="text-center">
                            <Button variant="pink" onClick={confirmarVenta} className="mr-3" style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4' }}>Confirmar Venta</Button> {/* Cambia el color del botón a rosa brillante */}
                            <Button variant="rose" onClick={cancelarVenta} className="ml-3" style={{ backgroundColor: '#FFC0CB', borderColor: '#FFC0CB' }}>Cancelar Venta</Button> {/* Cambia el color del botón a rosa claro */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmacionVenta;
