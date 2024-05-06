import React, { useState } from 'react';
import { Form, Button, Row, Col, Spinner, Table } from 'react-bootstrap';

const PaqueteAdd = ({ paquetes, productos, setAddPaquete, categorias, token }) => {
    const url = "https://cambalachebackend.onrender.com/api/paquete/";
    const [loading, setLoading] = useState(false);

    const [nombre, setNombre] = useState('');
    const [ErrorNombre, setErrorNombre] = useState('');

    const [descripcion, setDescripcion] = useState('');
    const [ErrorDescripcion, setErrorDescripcion] = useState('');

    const [estado, setEstado] = useState(true);

    const [precio, setPrecio] = useState('');
    const [ErrorPrecio, setErrorPrecio] = useState('');

    const [categoria, setCategoria] = useState('');
    const [ErrorCategoria, setErrorCategoria] = useState('');

    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    const cambioNombre = (event) => {
        const value = event.target.value;
        setNombre(value);
        const existe = paquetes.some(p => p.nombre.toLowerCase() === value.toLowerCase());
        const longitud = value.trim().length;
        if (longitud < 1) {
            setErrorNombre('El nombre no puede ser vacío');
        } else if (existe) {
            setErrorNombre('Ya existe un paquete con ese nombre');
        } else {
            setErrorNombre('');
        }
    };

    const cambioDescripcion = (event) => {
        const value = event.target.value;
        setDescripcion(value);
        const longitud = value.trim().length;
        if (longitud < 50) {
            setErrorDescripcion('La descripción debe tener al menos 50 caracteres');
        } else {
            setErrorDescripcion('');
        }
    };

    const cambioPrecio = (event) => {
        const value = event.target.value;
        setPrecio(value);
        if (isNaN(value)) {
            setErrorPrecio('Debe ingresar un valor numérico');
        } else if (value < 0) {
            setErrorPrecio('Debe ingresar un valor mayor a 0');
        } else {
            setErrorPrecio('');
        }
    };

    const cambioCategoria = (event) => {
        const value = event.target.value;
        setCategoria(value);
        if (categorias.some(c => c.categoria === value)) {
            setErrorCategoria('');
        } else {
            setErrorCategoria('No es una categoría válida');
        }
    };

    const handleAgregarProducto = (productoId) => {
        const productoSeleccionado = productos.find(producto => producto._id === productoId);
        if (productoSeleccionado) {
            setProductosSeleccionados([...productosSeleccionados, { producto: productoSeleccionado, cantidad: 1 }]);
        }
    };

    const handleEliminarProducto = (productoId) => {
        setProductosSeleccionados(productosSeleccionados.filter(producto => producto.producto._id !== productoId));
    };

    const handleCantidadChange = (productoId, cantidad) => {
        setProductosSeleccionados(productosSeleccionados.map(producto => {
            if (producto.producto._id === productoId) {
                return { ...producto, cantidad };
            }
            return producto;
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (ErrorNombre === '' && ErrorDescripcion === '' && ErrorPrecio === '' && ErrorCategoria === '') {
            setLoading(true);
            const nuevoPaquete = { nombre, descripcion, estado, precio, categoria, productos: productosSeleccionados.map(producto => ({ producto: producto.producto._id, cantidad: producto.cantidad })) };
            console.log(nuevoPaquete);
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token
                },
                body: JSON.stringify(nuevoPaquete)
            })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                alert(data.msg);
                if (data.paquete) {
                    setAddPaquete({});
                    window.location.reload();
                }
            });
        }
    };

    return (
        <Form style={{ maxWidth: "800px" }} className='m-auto' onSubmit={handleSubmit}>
            <h3 className='text-center my-3'>Crear Paquete</h3>
            <Form.Group as={Row} className="mb-3" controlId="formNombre">
                <Form.Label column sm={2}>
                    Nombre
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={nombre} onChange={cambioNombre} />
                    {ErrorNombre && <Form.Text className='text-danger'>{ErrorNombre}</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDescripcion">
                <Form.Label column sm={2}>
                    Descripción
                </Form.Label>
                <Col sm={10}>
                    <Form.Control as="textarea" rows={3} value={descripcion} onChange={cambioDescripcion} />
                    {ErrorDescripcion && <Form.Text className='text-danger'>{ErrorDescripcion}</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPrecio">
                <Form.Label column sm={2}>
                    Precio
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={precio} onChange={cambioPrecio} step="0.01" min="0" />
                    {ErrorPrecio && <Form.Text className='text-danger'>{ErrorPrecio}</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTipo">
                <Form.Label column sm={2}>
                    Categoría
                </Form.Label>
                <Col sm={10}>
                    <Form.Select value={categoria} onChange={cambioCategoria}>
                        <option value="">Selecciona una categoría</option>
                        {categorias.map((c, index) => (
                            <option key={index} value={c.categoria}>{c.categoria}</option>
                        ))}
                    </Form.Select>
                    {ErrorCategoria && <Form.Text className='text-danger'>{ErrorCategoria}</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEstado">
                <Form.Label column sm={2}>
                    Estado
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                        type="switch"
                        id="estadoSwitch"
                        label={estado ? 'Activo' : 'Inactivo'}
                        checked={estado}
                        onChange={(e) => {setEstado(e.target.checked);}}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formProductos">
                <Form.Label column sm={2}>
                    Productos
                </Form.Label>
                <Col sm={10}>
                    <Form.Control as="select" multiple>
                        {productos.map((producto) => (
                            <option key={producto._id} onClick={() => handleAgregarProducto(producto._id)}>{producto.nombre}</option>
                        ))}
                    </Form.Control>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Tipo</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosSeleccionados.map((producto) => (
                                <tr key={producto.producto._id}>
                                    <td>{producto.producto.nombre}</td>
                                    <td>${producto.producto.precio}</td>
                                    <td>{producto.producto.tipo}</td>
                                    <td>
                                        <Form.Control type="number" min={"1"} value={producto.cantidad} onChange={(e) => handleCantidadChange(producto.producto._id, e.target.value)} />
                                    </td>
                                    <td>
                                        <Button variant="danger" size="sm" onClick={() => handleEliminarProducto(producto.producto._id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Form.Group>

            <hr />
            <div className='d-flex justify-content-end'>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                ) : (
                    <>
                        <Button variant="primary" className='me-2' type="submit">
                            Guardar cambios
                        </Button>
                        <Button variant="danger" type="submit" onClick={() => setAddPaquete({})}>
                            Cancelar
                        </Button>
                    </>
                )}
            </div>
        </Form>
    );
};

export default PaqueteAdd;
