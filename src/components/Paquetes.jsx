import React, { useState } from 'react';
import { Table, Accordion, Carousel, Spinner } from 'react-bootstrap';

const Paquetes = ({ paquetes, setEditPaquete, token }) => {
    const [loading, setLoading] = useState(false);

    const confirmarBorrado = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas borrar este paquete?")) {
            const url = "https://cambalachebackend.onrender.com/api/paquete/";
            setLoading(true);
            await fetch(url + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token
                }
            }).then((res) => res.json())
            .then((datos) => {
                alert(datos.msg);
                setLoading(false);
                window.location.reload();
            });
        }
    };

    return (
        <>
            <Accordion className='acordion'>
                {paquetes.map((paquete) => (
                    <Accordion.Item key={paquete._id} eventKey={paquete._id}>
                        <Accordion.Header>
                            <i className="bi bi-box-seam fs-1 text-success me-5"></i>
                            {paquete.nombre}
                        </Accordion.Header>
                        <Accordion.Body className=''>
                            <article className='m-auto' style={{ maxWidth: "800px" }}>
                                <h3 className='text-center my-2'>{paquete.nombre}</h3>
                                <p><strong>Descripcion: </strong><br></br>{paquete.descripcion}</p>
                                <p><strong>Precio: </strong>${paquete.precio}</p>
                                <p><strong>Categoría: </strong>{paquete.categoria}</p>
                                <p><strong>Estado: </strong>{(paquete.estado) ? "Activado" : "Desactivado"}</p>
                                <hr />
                                <h4 className="mb-3">Productos del Paquete</h4>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Tipo</th>
                                            <th>Cantidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paquete.productos.map((p, index) => (
                                            <tr key={index}>
                                                <td>{p.producto.nombre}</td>
                                                <td>${p.producto.precio}</td>
                                                <td>{p.producto.tipo}</td>
                                                <td>{p.cantidad}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <hr />
                                <div className='d-flex justify-content-end'>
                                    {loading ? (
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Cargando...</span>
                                        </Spinner>
                                    ) : (
                                        <>
                                            <button className='btn btn-outline-primary me-2' onClick={() => setEditPaquete(paquete)}>
                                                <i className="bi bi-pencil-square me-1"></i>
                                                Editar
                                            </button>
                                            <button className='btn btn-outline-danger' onClick={() => { confirmarBorrado(paquete._id) }}>
                                                <i className="bi bi-trash3 me-1"></i>
                                                Borrar
                                            </button>
                                        </>
                                    )}
                                </div>
                            </article>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    )
}

export default Paquetes;
