import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LogueoModal = ({onSubmit , showModal, setShowModal}) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      correo: email,
      password: password
    };
    setEmail('');
    setPassword('');
    onSubmit(userData);
    handleClose();
  };

  return (
    <>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header className='bg-primary text-light' closeButton>
                <Modal.Title>Iniciar sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ej: pepito99@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className=''>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ej: 123456" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required/>
                </Form.Group>
                <hr />
                <Button variant="primary" type="submit" className='w-100'>
                    Iniciar sesión
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
    </>
  );
};

export default LogueoModal;
