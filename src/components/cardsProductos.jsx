import React from "react";
import { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/cardsHome.css";

function CardsProductos() {
  const [productos, setProductos] = useState([]);
  const [selectedProductoId, setSelectedProductoId] = useState("");

  const handleSelectProducto = (id) => {
    setSelectedProductoId(id);
  };

  useEffect(() => {
    fetch("https://cambalachebackend.onrender.com/api/producto/activos")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.productos) {
          setProductos(data.productos);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Row xs={1} sm={2} md={4} lg={5} className="g-4">
        {productos.map((producto) => (
          <Col key={producto.nombre}>
            <Card className="cardsProductos" style={{ margin: "10px" }}>
              <Card.Img
                variant="top cover"
                src={producto.imagenes || "/imagenes/agendas.jpg"}
                alt={producto.nombre}
                style={{margin: "auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                }}
              />
              <Card.Body style={{ backgroundColor: "rgba(86, 189, 236, 0.699)", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Card.Title style={{textTransform: "uppercase"}}>{producto.nombre}</Card.Title>

                <Card.Text style={{ color: "rgba(3, 17, 32, 0.836)", fontWeight: "bold", fontSize: "1.1em" }}>$ {producto.precio}</Card.Text>
                <Link to={'/detalle-producto/${producto.id}'}>
                  <Button
                    onClick={() => handleSelectProducto(producto.id)}
                    style={{ backgroundColor: "white", color: "black", width: "100%", textAlign: "center" }}
                  >
                    Ver más
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardsProductos;