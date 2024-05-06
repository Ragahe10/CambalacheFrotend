import React from 'react';
import { Table, Accordion, Carousel } from 'react-bootstrap';
import '../css/producto.css';
const Productos = ({productos, setEditProducto}) => {
    return (
        <>
            <Accordion className='acordion'>
                {productos.map((producto) =>(
                    <Accordion.Item key={producto._id} eventKey={producto._id}>
                        <Accordion.Header><i className="bi bi-inbox-fill fs-1 text-primary me-5"></i>{producto.nombre}</Accordion.Header>
                        <Accordion.Body className=''>
                                <article className='m-auto' style={{maxWidth:"800px"}}>
                                    <h3 className='text-center my-2'>{producto.nombre}</h3>
                                    <div className="carousel-container">
                                        <Carousel fade className="m-auto" style={{ maxWidth: "500px", height: "auto", maxHeight: "400px" }}>
                                            {producto.imagenes.map((imagen, index) => (
                                                <Carousel.Item className='carousel-item' key={index}>
                                                    <div className="d-flex justify-content-center align-items-center carousel-image-container">
                                                        <img className="d-block w-100 carousel-image" src={imagen} alt={`imagen-${index}`} />
                                                    </div>
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    </div>
                                    <hr />
                                    <p><strong>Descripcion: </strong><br></br>{producto.descripcion}</p>
                                    <p><strong>Precio: </strong>${producto.precio}</p>
                                    <p><strong>Estado: </strong>{(producto.activo) ? "Activado" : "Desactivado" }</p>
                                    <hr />
                                    <div className='d-flex justify-content-end'>
                                        <button className='btn btn-outline-primary me-2' onClick={()=>setEditProducto(producto)}>
                                            <i className="bi bi-pencil-square me-1"></i>
                                            Editar
                                        </button>
                                        <button className='btn btn-outline-danger'>
                                            <i className="bi bi-trash3 me-1"></i>
                                            Borrar
                                        </button>
                                    </div>
                                </article>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    )
}

export default Productos