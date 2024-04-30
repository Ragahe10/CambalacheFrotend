import React from 'react'
import Table from 'react-bootstrap/Table';
const TablaUsuarios = (props) => {
    const url = 'https://cambalachebackend.onrender.com/api/usuario';

    //Para cargar el array con cada usuario separado, lo hace solo cada vez que renderiza el componente
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUsuarios(data);
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

                    
                    
                    //mapeo que genera cada fila con los datos de cada usuario 
                    {usuarios.map((usuario) =>(
                            <tr>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.descripcion}</td>
                                <td>{usuario.tipo}</td>
                                <td>{usuario.precio}</td>
                                <td>{usuario.imagenes}</td>
                                <td>{usuario.activo}</td>
                                <td></td>
                            </tr>
                        ))}

                </tbody>
            </Table>
            
        </>
    )
}

export default TablaUsuarios