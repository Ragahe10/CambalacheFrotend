import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup, Carousel } from 'react-bootstrap';
import '../css/DetallePaquete.css';


const DetallePaquete = ({ paquete }) => {

    // Funcionamiento botón cantidad
    const [cantidad, setCantidad] = useState(1);

    const handleMenosClick = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleMasClick = () => {
        if (cantidad < 30) {
            setCantidad(cantidad + 1);
        }
    };
// console.log(paquete);


    return (
        <Container className="detalle-del-paquete-container">
            <Row className="gy-5">

                <Col xs={12} md={12} lg={6} className="columna-imagen">
                    <h1 className='titulo-responsive d-xl-none'>{paquete.nombre}</h1>
                    <Carousel fade>
                        <Carousel.Item>
                            <img src={paquete.image1} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={paquete.image2} alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={paquete.image3} alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col xs={12} md={12} lg={6} className="columna-datos">
                    <h1 className='d-none d-xl-block'>{paquete.nombre}</h1>
                    <h2>{paquete.precio},00 ARS</h2>
                    <p className='descripcion'>{paquete.descripcion}</p>
                    <p className='cantidad'>Cantidad:</p>
                    <ButtonGroup className='botones-cantidad' size="xm">
                        <Button className="boton-menos" variant="outline-primary" onClick={handleMenosClick}>
                            -
                        </Button>
                        <Button className="boton-numero" variant="primary" disabled>
                            {cantidad}
                        </Button>
                        <Button className="boton-mas" variant="outline-primary" onClick={handleMasClick}>
                            +
                        </Button>
                    </ButtonGroup>
                    <Button src="../pages/Carrito" variant="primary" className="boton-carrito" size="xm">
                        Agregar al carrito
                    </Button>
                </Col>

            </Row>
        </Container>
    );
};

export default DetallePaquete;