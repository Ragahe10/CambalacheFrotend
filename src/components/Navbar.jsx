import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UsuarioLogueado from './UsuarioLogueado'


const NavbarMenu = ({ LogOut, auth }) => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" className='position-sticky sticky-top'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <ul className='navbar-nav me-auto mb- 2 mb-lg-0'>
              <li>
                <NavLink className='nav-link' to='/'>
                <i className="bi bi-house-fill"></i> Inicio
                </NavLink>
              </li>
              <li>
                <NavLink className='nav-link' to='/about'>
                    <i className="bi bi-person-lines-fill"></i> Contacto
                </NavLink>
              </li>
              <li>
                <NavLink className='nav-link' to='/Carrito'>
                    <i className="bi bi-cart2"></i> Carrito
                </NavLink>
              </li>
              {auth && (
                <li>
                  <NavLink className='nav-link' to='/Administracion'><i className="bi bi-gear-fill"></i> Administracion</NavLink>
                </li>
              )}
            </ul>
          </Nav>
          <Nav>
            {/* <button className='btn btn-outline-light' onClick={() => auth ? logOut() : logIn()}>{auth ? 'Log Out' : 'Log In'}</button> */}
              {auth && (
                <UsuarioLogueado LogOut={LogOut} usuario={JSON.parse(sessionStorage.getItem('usuario'))}/>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu