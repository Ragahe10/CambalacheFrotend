import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buscador.css';

function Buscador() {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [paquetes, setPaquetes] = useState([]);
  const [filteredPackage, setFilteredPackage] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchPackage();
  }, []);

  const fetchProducts = () => {
    fetch('https://cambalachebackend.onrender.com/api/producto')
      .then(response => response.json())
      .then(data => {
        setProducts(data.productos);
      })
      .catch(error => console.error('Error obteniendo los productos:', error));
  };


  const fetchPackage = () => {
    fetch('https://cambalachebackend.onrender.com/api/paquete')
      .then(response => response.json())
      .then(data => {
        setPaquetes(data.paquetes);
      })
      .catch(error => console.error('Error obteniendo los paquetes:', error));
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchInput !== "") {

      const filteredProducts = products.filter((product) =>
        product.nombre.toLowerCase().includes(searchInput.trim().toLowerCase())
      );

      const filteredPackage = paquetes.filter((paquete) =>
        paquete.nombre.toLowerCase().includes(searchInput.trim().toLowerCase())
      );

      setFilteredProducts(filteredProducts);
      setFilteredPackage(filteredPackage);
      setSearched(true);

    }
  }

  return (
    <Container className="fixed-top"  >
      <Container id='section'>
        <Form className="d-flex" style={{ marginLeft: '200px' }}>
          <Form.Control
            type="search"
            placeholder="Buscar Productos o Paquetes"
            className="input me-2"
            aria-label="Search"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <Button type='submit' className="custom-button" onClick={handleSearch}>🔍</Button>
        </Form>

      </Container>

      {searched && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px', marginTop: '100px' }}>

          <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
            {filteredProducts.map((product, index) => (
              <Card key={index} style={{ width: '15rem', margin: '10px', border: 'none' }}>
                <Card.Img style={{ width: '100%' }} variant="top" src='./imagenes/cambalache logo.png' />
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title style={{ fontSize: '15px' }}>{product.nombre}</Card.Title>
                  {/* <Card.Text>
                      {product.descripcion}
                    </Card.Text> */}
                  <Card.Text>${product.precio}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
            {filteredPackage.map((paquete, index) => (
              <Card key={index} style={{ width: '15rem', margin: '10px', border: 'none' }}>
                <Card.Img variant="top" src='./imagenes/cambalache logo.png' />
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title style={{ fontSize: '15px' }}>{paquete.nombre}</Card.Title>
                  {/* <Card.Text>
                      {paquete.descripcion}
                    </Card.Text> */}
                  <Card.Text>${paquete.precio}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}

    </Container>
  );
}

export default Buscador;
