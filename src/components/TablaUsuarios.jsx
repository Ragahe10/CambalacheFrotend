import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap';
import UsuarioEditar from './UsuarioEditar';

const TablaUsuarios = ({token}) => {
    const url = 'https://cambalachebackend.onrender.com/api/usuario';

    //Para cargar el array con cada usuario separado, lo hace solo cada vez que renderiza el componente
    const [usuarios, setUsuarios] = useState([]);
    const [editando, setEditando] = useState('');
    const [usuario, setUsuario] = useState({});
    
    // console.log(token);
    const traerUsuarios = useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUsuarios(data.usuarios);
                console.log(data);
            });
    },[]);  

    return (
        <>
            {(!editando) ? (
            <Accordion className='acordion'>
                {usuarios.map((usuario) =>(
                    <Accordion.Item key={usuario.uid} eventKey={usuario.uid}>
                        <Accordion.Header><i className="bi bi-person-vcard-fill fs-1 text-primary me-5"></i>{usuario.correo}</Accordion.Header>
                        <Accordion.Body className=''>
                                <article className='m-auto' style={{maxWidth:"300px"}}>
                                    <p><strong>Nombre: </strong>{usuario.nombre}</p>
                                    <p><strong>Correo: </strong>{usuario.correo}</p>
                                    <p><strong>Rol: </strong>{usuario.rol}</p>
                                    <p><strong>Estado: </strong>{(usuario.estado) ? "Activo" : "Desactivo" }</p>
                                    <div className='d-flex justify-content-end'>
                                        <button className='btn btn-outline-primary' 
                                        onClick={() => {
                                            setUsuario(usuario);
                                            setEditando(true);
                                            }}>Editar</button>
                                    </div>
                                </article>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion> 
            ) : (
                <UsuarioEditar usuario={usuario} usuarios={usuarios} setEditando={setEditando} />
            )
            }
        </>
    )
}

export default TablaUsuarios