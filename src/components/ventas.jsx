import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';

const ConfirmacionVenta = ({ carrito, totalVenta, cancelarVenta, confirmarVenta }) => {
    // Función para calcular el total de la venta
    const calcularTotalVenta = () => {
        let total = 0;
        // Suma el precio de cada producto en el carrito
        carrito.forEach((item) => {
            total += item.precio;
        });
        return total;
    };

    return (
        <Container className="py-5" style={{ backgroundColor: '#E6F7FF', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-center mb-5" style={{ color: '#0080FF' }}>Confirmación de Venta</h2>
            <Row>
                <Col md={8} className="mx-auto">
                    <ListGroup variant="flush">
                        {carrito.map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#D6EAF8' }}>
                                <span className="font-weight-bold" style={{ color: '#3498DB' }}>{item.nombre}</span> <span>- ${item.precio}</span>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <hr className="my-4" style={{ borderTop: '1px solid #0080FF' }} />
                    <Row>
                        <Col>
                            <p className="font-weight-bold" style={{ color: '#0080FF' }}>Detalles del pedido:</p>
                            {carrito.map((item, index) => (
                                <div key={index} className="d-flex justify-content-between align-items-center" style={{ marginBottom: '10px' }}>
                                    <span>{item.nombre}</span> <span>${item.precio}</span>
                                </div>
                            ))}
                            <hr className="my-4" style={{ borderTop: '1px solid #0080FF' }} />
                            {/* Mostrar el total de la venta calculado */}
                            <p className="font-weight-bold" style={{ color: '#0080FF' }}>Total de la venta: ${calcularTotalVenta()}</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="text-center">
                            <Button variant="info" onClick={confirmarVenta} className="mr-3" style={{ backgroundColor: '#0080FF', borderColor: '#0080FF' }}>Confirmar Venta</Button>
                            <Button variant="primary" onClick={cancelarVenta} className="ml-3" style={{ backgroundColor: '#85C1E9', borderColor: '#85C1E9' }}>Cancelar Venta</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmacionVenta;
