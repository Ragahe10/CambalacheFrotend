import React, { useState } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
const LogueoModal = ({onSubmit , showModal, setShowModal, errorMessage, setErrorMessage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  

  const handleClose = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activa el spinner de carga

    const userData = {
      correo: email,
      password: password
    };

    try {
      const msg = await onSubmit(userData); // Realiza la operación de inicio de sesión
      if(msg){
        setErrorMessage(msg);
      }else{
        // Restablece los campos y cierra el modal si el inicio de sesión es exitoso
        setErrorMessage('');
        setEmail('');
        setPassword('');
        handleClose();
      }
    } catch (error) {
      // Captura errores y muestra el mensaje de error
      setErrorMessage('Error en el inicio de sesión. Verifica tus credenciales.');
    } finally {
      setLoading(false); // Desactiva el spinner de carga después de que la operación haya terminado
    }
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
              <Form.Control type="password" placeholder="Ej: 123456" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
            </Form.Group>
            <hr />
            <Button variant="primary" type="submit" className='w-100' disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Iniciar sesión'}
            </Button>
          </Form>
        </Modal.Body>
        {errorMessage && <Alert variant="danger" className="mt-3 position-fixed fixed-bottom">{errorMessage}</Alert>}
      </Modal>
    </>
  );
};

export default LogueoModal;
