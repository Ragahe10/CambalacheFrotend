import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
const TablaProductos = () => {

    const url = 'https://cambalachebackend.onrender.com/api/producto';

    //Para cargar el array con cada producto separado, lo hace solo cada vez que renderiza el componente
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProductos(data);
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
                        <th>Descripcion</th>
                        <th>Tipo</th>
                        <th>Precio</th>
                        <th>Imagenes</th>
                        <th>Activo</th>
                        <th>Operaciones</th>
                    </tr>
                </thead>
                <tbody>

                    
                    
                    //mapeo que genera cada fila con los datos de cada producto 
                    {productos.map((producto) =>(
                            <tr>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.tipo}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.imagenes}</td>
                                <td>{producto.activo}</td>
                                <td></td>
                            </tr>
                        ))}

                </tbody>
            </Table>
            
        </>
    )
}

export default TablaProductos