import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const TablaPaquetes = (props) => {
    const url = 'https://cambalachebackend.onrender.com/api/paquete';

    //Para cargar el array con cada paquete separado, lo hace solo cada vez que renderiza el componente
    const [paquetes, setPaquetes] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPaquetes(data.paquetes);
                console.log(data);
            });
    },[]);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Productos</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Imagenes</th>
                        <th>Activo</th>
                        <th>Operaciones</th>
                    </tr>
                </thead>
                <tbody>

                    
                    
                    {/* //mapeo que genera cada fila con los datos de cada paquete  */}
                    {paquetes.map((paquete) =>(
                            <tr key={paquete._id}>
                                <td>{paquete._id}</td>
                                <td>{paquete.nombre}</td>
                                <td>{paquete.descripcion}</td>
                                <td>{paquete.tipo}</td>
                                <td>{paquete.precio}</td>
                                <td>{paquete.imagenes}</td>
                                <td>{paquete.activo}</td>
                                <td></td>
                            </tr>
                        ))}

                </tbody>
            </Table>
            
        </>
    )
}

export default TablaPaquetes