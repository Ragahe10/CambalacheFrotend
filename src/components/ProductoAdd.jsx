import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup, FormControl, Spinner } from 'react-bootstrap';

const ProductoAdd = ({ productos, setAddProducto, tipos, token }) => {
    const url = "https://cambalachebackend.onrender.com/api/producto/";
    const [loading, setLoading] = useState(false);

    const [nombre, setNombre] = useState('');
    const [ErrorNombre, setErrorNombre] = useState('');

    const [descripcion, setDescripcion] = useState('');
    const [ErrorDescripcion, setErrorDescripcion] = useState('');

    const [activo, setEstado] = useState(true); // Por defecto activo

    const [precio, setPrecio] = useState('');
    const [ErrorPrecio, setErrorPrecio] = useState('');

    const [tipo, setTipo] = useState('');
    const [ErroTipo, setErrorTipo] = useState('');

    const [imagenes, setImagenes] = useState([]);
    const [nuevaImagen, setNuevaImagen] = useState('');

    const cambioNombre = (event) => {
        const value = event.target.value;
        setNombre(value);
        const existe = productos.some(p => p.nombre.toLowerCase() === value.toLowerCase());
        const longitud = value.trim().length;
        if (longitud < 1) {
            setErrorNombre('El nombre no puede ser vacío');
        } else if (existe) {
            setErrorNombre('Ya existe un producto con ese nombre');
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
            setErrorPrecio('Debe ingresar un valor mayor o igual a 0');
        } else {
            setErrorPrecio('');
        }
    };

    const cambioTipo = (event) => {
        const value = event.target.value;
        setTipo(value);
        if (tipos.some(t => t.tipo === value)) {
            setErrorTipo('');
        } else {
            setErrorTipo('No es un tipo válido');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (ErroTipo === '' && ErrorDescripcion === '' && ErrorNombre === '' && ErrorPrecio === '') {
            setLoading(true);
            const productoNuevo = { nombre, descripcion, imagenes, activo, precio, tipo };
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token
                },
                body: JSON.stringify(productoNuevo)
            })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                alert(data.msg);
                if (data.producto) {
                    setAddProducto(false);
                    window.location.reload(); // Recargar la página para reflejar el nuevo producto
                }
            });
        }
    };

    const handleAgregarImagen = () => {
        if (nuevaImagen.trim() !== '') {
            setImagenes([...imagenes, nuevaImagen]);
            setNuevaImagen('');
        }
    };

    const handleEliminarImagen = (index) => {
        setImagenes(imagenes.filter((_, i) => i !== index));
    };

    return (
        <Form style={{ maxWidth: "800px" }} className='m-auto' onSubmit={handleSubmit}>
            <h3 className='text-center my-3'>Agregar Producto</h3>
            <Form.Group as={Row} className="mb-3" controlId="formNombre">
                <Form.Label column sm={2}>Nombre</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={nombre} onChange={cambioNombre} />
                    {ErrorNombre && <Form.Text className='text-danger'>{ErrorNombre}</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDescripcion">
                <Form.Label column sm={2}>Descripción</Form.Label>
                <Col sm={10}>
                    <Form.Control as="textarea" rows={3} value={descripcion} onChange={cambioDescripcion} />
                    {ErrorDescripcion && <Form.Text className='text-danger'>{ErrorDescripcion}</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formImagenes">
                <Form.Label column sm={2}>Imágenes</Form.Label>
                <Col sm={10}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Nueva imagen URL"
                            value={nuevaImagen}
                            onChange={(e) => setNuevaImagen(e.target.value)}
                        />
                        <Button variant="outline-secondary" onClick={handleAgregarImagen}>Agregar</Button>
                    </InputGroup>
                    <div className='d-flex flex-wrap'>
                        {imagenes.map((imagen, index) => (
                            <div key={index} className="m-2 d-flex justify-content-center align-items-center  position-relative" style={{ height: "100px", width: "100px" }}>
                                <img src={imagen} alt={`imagen-${index}`} className="mr-2" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                <Button className='position-absolute top-0 end-0 z-1' variant="danger" size="sm" onClick={() => handleEliminarImagen(index)}>X</Button>
                            </div>
                        ))}
                    </div>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEstado">
                <Form.Label column sm={2}>Estado</Form.Label>
                <Col sm={10}>
                    <Form.Check
                        type="switch"
                        id="estadoSwitch"
                        label={activo ? 'Activo' : 'Inactivo'}
                        checked={activo}
                        onChange={(e) => setEstado(e.target.checked)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPrecio">
                <Form.Label column sm={2}>Precio</Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={precio} onChange={cambioPrecio} step="0.01" min="0" />
                    {ErrorPrecio && <Form.Text className='text-danger'>{ErrorPrecio}</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTipo">
                <Form.Label column sm={2}>Tipo</Form.Label>
                <Col sm={10}>
                    <Form.Select value={tipo} onChange={cambioTipo}>
                        <option value="">Selecciona un tipo</option>
                        {tipos.map((tipo, index) => (
                            <option key={index} value={tipo.tipo}>{tipo.tipo}</option>
                        ))}
                    </Form.Select>
                    {ErroTipo && <Form.Text className='text-danger'>{ErroTipo}</Form.Text>}
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
                        <Button variant="primary" className='me-2' type="submit">Guardar</Button>
                        <Button variant="danger" type="submit" onClick={() => setAddProducto(false)}>Cancelar</Button>
                    </>
                )}
            </div>
        </Form>
    );
};

export default ProductoAdd;
