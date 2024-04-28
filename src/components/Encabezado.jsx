import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../css/Encabezado.css'

const Encabezado = ({Buscar, auth, LogOut, LogIn, Registrar}) => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <section className='d-flex flex-wrap wrap justify-content-around align-items-center py-4'>
        <section className='buscador mb-3 d-flex justify-content-center text-center' width="340px">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <Button variant="outline-primary"><i className="bi bi-search" onClick={Buscar}></i></Button>
          </Form>
        </section>
        <section className='logo'>
            <img src="/imagenes/logo.png" alt="Imagen logo del negocio" width='340px'/>
        </section>
        <section className='sesion d-flex flex-row justify-content-center align-items-center' width="340px">
          <a className='nav-link' onClick={() => auth ? LogOut() : LogIn()}>{auth ? 'Cerrar Sesión' : 'Iniciar Sesión'}</a>
          {!auth && (
           <>
            <div className="vertical-hr mx-2"></div>
            <a className='nav-link' onClick={Registrar}>Registrarse</a>
           </>
          )}

        </section>
    </section>
  )
}

export default Encabezado