import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CardsPaquetes() {
  const [paquetes, setPaquetes] = useState([]);

  useEffect(() => {
    fetch("https://cambalachebackend.onrender.com/api/paquete")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.paquetes) {
          setPaquetes(data.paquetes);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Row xs={1} sm={2} md={4} className="g-4">
        {paquetes.map((paquete, index) => (
          <Col key={index}>
            <Card style={{ margin: "10px" }}>
              <Card.Img
                variant="top"
                src={paquete.image || "/imagenes/paq_cumple.jpg"}
                alt={paquete.nombre}
              />
              <Card.Body>
                <Card.Title>{paquete.nombre}</Card.Title>
                <Card.Text>Precio: {paquete.precio}</Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardsPaquetes;

// ANTES 2

//const url = "https://cambalachebackend.onrender.com/api/paquete";

// function CardsPaquetes() {
//     const [paquetes, setPaquetes] = useState([]);

//     const fetchPaquetes = async () => {
//       try {
//         const response = await fetch('https://cambalachebackend.onrender.com/api/paquete');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const paquetes = await response.json();
//              return Array.isArray(paquetes) ? paquetes : [];

//     //     return response.json();
//       } catch (error) {
//         console.error('Error fetching data:', error);
//          return [];
//       }
//     };

//     useEffect(() => {
//       //fetchPaquetes().then(setPaquetes)
//       fetchPaquetes().then((paquetes) => {
//         console.log(paquetes);
//         setPaquetes(paquetes);
//       }).catch((error) => {
//         console.error('Error fetching data:', error);
//         setPaquetes([]);
//       });
//     }, []);

//     return (
//       <div>
//         {paquetes.length > 0 && paquetes.map((paquete) => (
//           <Card key={paquete._id} style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={paquete.imagen || '/imagenes/logo.jpg'} />
//             <Card.Body>
//               <Card.Title>{paquete.nombre}</Card.Title>
//               <Card.Subtitle>{paquete.descripcionCorta}</Card.Subtitle>
//               <Card.Text>{paquete.precio}</Card.Text>
//               <Card.Link href={`/paquete/${paquete._id}`}>ver más..</Card.Link>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     );
//   }

// ANTES 2   export default CardsPaquetes;

// // ANTES

// function CardsPaquetes() {
//     const [paquete, setPaquete] = useState([]);

//     console.log(paquete)

//     const fetchData = async () => {
//         try {
//           const response = await fetch('https://cambalachebackend.onrender.com/api/paquete');

//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           const paquete = await response.json();

//           if (!Array.isArray(paquete)) {

//             setPaquete(Array.isArray(paquete) ? paquete : []);
//             //setPaquete(paquete);
//           } else {
//             throw new Error('Response is not an array');
//           }

//           //setPaquete(paquete);

//         console.log('State after update:', paquete);
//         } catch (error) {
//           console.error('Error fetching data: ', error);
//           setPaquete([]);
//         }
//       };

//       useEffect(() => {
//         fetchData();
//       }, []);

//       console.log(paquete);

//       return (
//         <div>
//           {paquete.length > 0 && paquete.map(paq => (
//             <Card key={paq._id} style={{ width: '18rem' }}>
//               <Card.Img variant="top" src="/imagenes/logo.png"/>
//               <Card.Body>
//                 <Card.Title>{paq.nombre}</Card.Title>
//                 <Card.Text>{paq.precio}
//                 </Card.Text>
//                 <Button variant="primary">ver más..</Button>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       )
//     }

// export default CardsPaquetes;
// //ANTES
