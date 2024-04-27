// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Header.css';

// function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     // Supongamos que aquí verificamos si el usuario es administrador
//     // y actualizamos el estado isAdmin en consecuencia
//     setIsAdmin(true); // Cambiar a false si el usuario no es administrador
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//   };

//   return (
//     <Navbar expand="lg" className="fixed-top flex-column align-items-center">
//       <Container className='container' style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', textAlign: 'center', backgroundColor: 'rgb(54, 128, 197)', maxWidth: '202vh', height: '80px', justifyContent: 'center' }}>
//         <p style={{ justifyContent: 'center', fontSize: '13px', fontWeight: '500' }}>BIENVENIDOS A NUESTRA TIENDA ONLINE - ENVIOS A TODO EL PAÍS</p>
//         <div style={{ fontSize: '13px', display: 'flex', gap: '30px', position: 'absolute', top: '60px', right: '100px' }}>
//           <p>🖁3815615634</p>
//           <p>✉️cambalache@gmail.com</p>
//           <p>📍Direccion 239, San Miguel de Tucumán</p>
//         </div>
//       </Container>

//       <Container id='section' className="w-100 mb-3 d-flex flex-row align-items-center justify-content-center">
//         <Form className="d-flex mb-2">
//           <Form.Control
//             type="search"
//             placeholder="Buscar Productos"
//             className="input me-2"
//             aria-label="Search"
//           />
//           <Button className="custom-button">🔍</Button>
//         </Form>
//         <Navbar.Brand href="#"><img src="imagenes/cambalache logo.png" alt="Imagen logo del negocio" className='imagen-logo' /></Navbar.Brand>
//         <div style={{ display: 'flex' }}>
//           {isLoggedIn ? (
//             <>
//               <Nav.Link style={{ color: '#000', borderRight: '1px solid black', paddingRight: '30px' }} onClick={handleLogout}>Cerrar Sesión</Nav.Link>
//               {isAdmin && <Nav.Link style={{ color: '#000' }} href="#administracion">Adminstración</Nav.Link>}
//             </>
//           ) : (
//             <div style={{ display: 'flex' }}>
//               <Nav.Link style={{ borderRight: '1px solid black', paddingRight: '30px', color: '#000' }} href="#registro">Crear cuenta</Nav.Link>
//               <Nav.Link style={{ color: '#000' }} onClick={handleLogin}>Iniciar Sesión</Nav.Link>
//             </div>
//           )}
//         </div>
//       </Container>

//       <Container className='container' style={{ backgroundColor: 'rgb(54, 128, 197)', maxWidth: '202vh' }}>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className='navbar justify-content-center'>
//             <Nav.Link href="#home">Inicio</Nav.Link>
//             <Nav.Link href="#productos">Productos</Nav.Link>
//             <Nav.Link href="#contacto">Contacto</Nav.Link>
//             {isLoggedIn && <Nav.Link href="#carrito">🛒</Nav.Link>}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
    { id: 4, name: 'Paquete 1' },
    { id: 5, name: 'Paquete 2' },

    // Agrega más productos según tu necesidad
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Supongamos que aquí verificamos si el usuario es administrador
    // y actualizamos el estado isAdmin en consecuencia
    setIsAdmin(true); // Cambiar a false si el usuario no es administrador
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Navbar expand="lg" className="fixed-top flex-column align-items-center">
      <Container className='container' style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', textAlign: 'center', backgroundColor: 'rgb(54, 128, 197)', maxWidth: '202vh', height: '80px', justifyContent: 'center' }}>
        <p style={{ justifyContent: 'center', fontSize: '13px', fontWeight: '500' }}>BIENVENIDOS A NUESTRA TIENDA ONLINE - ENVIOS A TODO EL PAÍS</p>
        <div style={{ fontSize: '13px', display: 'flex', gap: '30px', position: 'absolute', top: '60px', right: '100px' }}>
          <p>🖁3815615634</p>
          <p>✉️cambalache@gmail.com</p>
          <p>📍Direccion 239, San Miguel de Tucumán</p>
        </div>
      </Container>

      <Container id='section' className="mb-3 d-flex justify-content-center text-center">
        {isLoggedIn ? (
          <Form className="d-flex" style={{ marginLeft: '200px' }}>
            <Form.Control
              type="search"
              placeholder="Buscar Productos"
              className="input me-2"
              aria-label="Search"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <Button className="custom-button" onClick={handleSearch}>🔍</Button>
          </Form>
        ) : (
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar Productos"
              className="input me-2"
              aria-label="Search"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <Button className="custom-button" onClick={handleSearch}>🔍</Button>
          </Form>
        )}

        <Navbar.Brand href="#"><img src="imagenes/cambalache logo.png" alt="Imagen logo del negocio" className='imagen-logo' /></Navbar.Brand>
        <div style={{ display: 'flex' }}>
          {isLoggedIn ? (
            <div style={{ display: 'flex' }}>
              <Nav.Link style={{ color: '#000', borderRight: '1px solid black', paddingRight: '50px', width: '170px' }} onClick={handleLogout}>Cerrar Sesión</Nav.Link>
              <Nav.Link style={{ color: '#000', borderRight: '1px solid black', paddingRight: '50px', width: '130px' }} href="#favoritos" onClick={handleLogout}>Favoritos</Nav.Link>
              {isAdmin && <Nav.Link style={{ color: '#000' }} href="#administracion">Adminstración</Nav.Link>}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Nav.Link style={{ color: '#000', borderRight: '1px solid black', paddingRight: '50px' }} href="#registro">Crear cuenta</Nav.Link>
              <Nav.Link style={{ color: '#000' }} onClick={handleLogin}>Iniciar Sesión</Nav.Link>

            </div>
          )}
        </div>
      </Container>


      <Container className='container' style={{ backgroundColor: 'rgb(54, 128, 197)', maxWidth: '202vh', paddingLeft: '100px' }}>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='navbar justify-content-center'>
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            {isLoggedIn ? <Nav.Link href="#carrito">🛒</Nav.Link> : <Nav.Link disabled href="#carrito">🛒</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </Navbar>
  );
}

export default Header;
