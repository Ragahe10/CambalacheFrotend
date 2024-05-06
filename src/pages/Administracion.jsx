import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TablaPaquetes from '../components/TablaPaquetes'
import Productos from '../components/Productos';
import TablaTiposCategorias from '../components/TablaTiposCategorias';
import TablaUsuarios from '../components/TablaUsuarios';
import '../css/administracion.css'
import ProductoUpdate from './ProductoUpdate';

const Administracion = ({token}) => {
    const [key, setKey] = useState('productos');
    const [productos, setProductos] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [editProducto, setEditProducto] = useState({});

    const urlProd = 'https://cambalachebackend.onrender.com/api/producto';
    const urlTipos = 'https://cambalachebackend.onrender.com/api/tipo';
    //Para cargar el array con cada producto separado, lo hace solo cada vez que renderiza el componente
    useEffect(() => {
        fetch(urlProd,{
            headers: {
                'x-token': token
            }})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProductos(data.productos);
                console.log(data);
            });
    },[]);
    useEffect(() => {
        fetch(urlTipos)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTipos(data.tipos);
                console.log(data);
            });
    },[]);

    return (
        <section className='p-3'>
            { (editProducto.nombre) ? (
                <ProductoUpdate producto={editProducto} productos={productos} setEditProducto={setEditProducto} tipos={tipos} token={token} />
            ):(
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
                <Tab eventKey="productos" title="Productos">
                    <Productos productos={productos} setEditProducto={setEditProducto} />
                </Tab>
                {/* <Tab eventKey="paquetes" title="Paquetes">
                    <TablaPaquetes />
                </Tab>
                <Tab eventKey="tipos" title="Tipos">
                    <TablaTiposCategorias />
                </Tab>
                <Tab eventKey="categorias" title="Categorias">
                    <TablaTiposCategorias />
                </Tab>
                <Tab eventKey="usuarios" title="Usuarios">
                    <TablaUsuarios token={token} />
                </Tab> */}
            </Tabs>)}
        </section>
    );


}

export default Administracion