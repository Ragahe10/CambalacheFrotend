import React, { useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import UserSignIn from '../helpers/RegistrarUsuario'

const RegistroModal = ({ onSubmit, showModal, setShowModal, LogIn }) => {
 
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    // Limpiar los campos al cerrar el modal
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activa el spinner de carga
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }

    const userData = {
      nombre: username,
      correo: email,
      password: password
    };

    const response = await UserSignIn (userData);
    // console.log(response);
    if(response.usuario){ 
        const loginUser ={
            correo: email,
            password: password
        }
        LogIn(loginUser);
    }else{
        const errors = response.errors;
        if (errors && errors.length > 0) {
            const errorCorreo = errors.find(error => error.path === 'correo');
            const errorNombre = errors.find(error => error.path === 'nombre');
            const errorPassword = errors.find(error => error.path === 'password');
            setPasswordError(errorPassword ? errorPassword.msg : '');
            setUsernameError(errorNombre ? errorNombre.msg : '');
            setEmailError(errorCorreo ? errorCorreo.msg : '');
        } else {
            setPasswordError('');
            setUsernameError('');
            setEmailError('');
            handleClose();
        }
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header className='bg-primary text-light' closeButton>
          <Modal.Title>Registro de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ej: pepito99" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
              {usernameError && <Form.Text className="text-danger">{usernameError}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Ej: pepito99@mail.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Ej: 123456" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                minLength={6} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Confirmar contraseña" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                minLength={6} 
                required 
              />
              {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
            </Form.Group>

            <hr />
            <Button variant="primary" type="submit" className='w-100'>
              {loading ? <Spinner animation="border" size="sm" /> : 'Registrarse'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegistroModal;