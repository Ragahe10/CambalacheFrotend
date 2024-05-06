import React, { useState } from 'react'
import { Form, Button, Modal, Nav } from 'react-bootstrap'
import '../css/Encabezado.css'
import LogueoModal from './login'; 
import RegistroModal from './registro';

const Encabezado = ({Buscar, auth, LogOut, LogIn, errorMessage, setErrorMessage}) => {
  const [searchInput, setSearchInput] = useState('');
  const [showModalLog, setShowModalLog] = useState(false);
  const [showModalReg, setShowModalReg] = useState(false);
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleShowLog = () => setShowModalLog(true);
  const handleShowReg = () => setShowModalReg(true);

  return (
    <section className='d-flex flex-wrap wrap justify-content-around align-items-center py-4'>
        <section className='buscador mb-3 d-flex justify-content-center text-center' width="340px">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <Button variant="outline-primary"><i className="bi bi-search" onClick={Buscar}></i></Button>
          </Form>
        </section>
        <section className='logo'>
            <img src="./imagenes/logo.png" alt="Imagen logo del negocio" width='340px'/>
        </section>
        <section className='sesion d-flex flex-row justify-content-center align-items-center' width="340px">
          <Nav>
            <Nav.Link className='text-dark' onClick={() => auth ? LogOut() : handleShowLog()}>{auth ? 'Cerrar Sesión' : 'Iniciar Sesión'}</Nav.Link>
            <LogueoModal onSubmit={LogIn} showModal={showModalLog} setShowModal={setShowModalLog} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
          </Nav>
            {!auth && (
              <>
                <div className="vertical-hr mx-2"></div>
                <Nav>
                  <Nav.Link className='text-dark' onClick={handleShowReg}>Registrarse</Nav.Link>
                  <RegistroModal LogIn={LogIn} showModal={showModalReg} setShowModal={setShowModalReg} />
                </Nav>
              </>
            )}
           
        </section>
    </section>
  )
}

export default Encabezado