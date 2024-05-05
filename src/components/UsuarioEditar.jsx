import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import UsuarioUpdate from '../helpers/UsuarioUpdate';

const UsuarioEditar = ({ usuarios, usuario , setEditando }) => {
    const [nombre, setNombre] = useState(usuario.nombre);
    const [correo, setCorreo] = useState(usuario.correo);
    const [rol, setRol] = useState(usuario.rol);
    const [estadoNombre, setEstadoNombre] = useState('');
    const [estadoCorreo, setEstadoCorreo] = useState('');
    const [estadoRol, setEstadoRol] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const cambioNombre = (e) => {
        const valor = e.target.value;
        const cantidad = valor.trim().length;
        if (cantidad === 0) {
            setEstadoNombre('El nombre no puede estar vacío');
        } else {
            setEstadoNombre('');
        }
        setNombre(valor);
        console.log(estadoNombre)
    };

    const cambioCorreo = (e, userId) => {
        const valor = e.target.value;
        const cantidad = valor.trim().length;
        if (cantidad === 0) {
            setEstadoCorreo('El correo no puede estar vacío');
        } else if (usuarios.some((user) => user.correo === valor && user.uid !== userId)) {
            setEstadoCorreo('El correo ya está registrado');
        } else {
            setEstadoCorreo('');
        }
        setCorreo(valor);
    };

    const cambioRol = (e) => {
        const valor = e.target.value;
        if (valor !== 'ADMIN_ROLE' && valor !== 'USER_ROLE') {
            setEstadoRol('El rol no es válido');
        } else {
            setEstadoRol('');
        }
        setRol(valor);
    };

    const handleSubmit = async (e, userId) => {
        e.preventDefault();
        if (estadoNombre === '' && estadoCorreo === '' && estadoRol === '') {
            const datosUsuario = {
                nombre,
                correo,
                rol
            };
            // Llamar a la función para actualizar el usuario
            // const respuesta = await UsuarioUpdate(datosUsuario, userId, token);
            // console.log(respuesta);
            // setEditando('');
            handleCloseModal();
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShowModal}>
                Editar Usuario
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => handleSubmit(e, usuario.uid)}>
                        <div>
                            <label htmlFor="nombre" className="form-label">
                                Nombre
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                onChange={cambioNombre}
                                value={nombre}
                            />
                            {estadoNombre !== '' && <div className="invalid-feedback">{estadoNombre}</div>}
                        </div>
                        <div>
                            <label htmlFor="correo" className="form-label">
                                Correo
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="correo"
                                onChange={(e) => cambioCorreo(e, usuario.uid)}
                                value={correo}
                            />
                            {estadoCorreo !== '' && <div className="invalid-feedback">{estadoCorreo}</div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="rol" className="form-label">
                                Rol
                            </label>
                            <select className="form-select" id="rol" onChange={cambioRol} value={rol}>
                                <option value="ADMIN_ROLE">ADMIN_ROLE</option>
                                <option value="USER_ROLE">USER_ROLE</option>
                            </select>
                            {estadoRol !== '' && <div className="invalid-feedback">{estadoRol}</div>}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={(e) => handleSubmit(e, usuario.uid)}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UsuarioEditar;