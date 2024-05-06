import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Paquetes from '../components/Paquetes'
import Productos from '../components/Productos';
import TablaCategorias from '../components/Categorias';
import TablaUsuarios from '../components/TablaUsuarios';
import '../css/administracion.css'
import ProductoUpdate from '../components/ProductoUpdate';
import ProductoAdd from '../components/ProductoAdd';
import { Button } from 'react-bootstrap';
import PaqueteUpdate from '../components/PaqueteUpdate';
import PaqueteAdd from '../components/PaqueteAdd';
import TablaTipos from '../components/Tipos';

const Administracion = ({token}) => {
    const [key, setKey] = useState('productos');
    const [productos, setProductos] = useState([]);
    const [paquetes, setPaquetes] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [editProducto, setEditProducto] = useState({});
    const [editPaquete, setEditPaquete] = useState({});
    const [addProducto, setAddProducto] = useState(false);
    const [addPaquete, setAddPaquete] = useState(false);

    const urlProd = 'https://cambalachebackend.onrender.com/api/producto';
    const urlTipos = 'https://cambalachebackend.onrender.com/api/tipo';
    const urlPaq = 'https://cambalachebackend.onrender.com/api/paquete';
    const urlCat = 'https://cambalachebackend.onrender.com/api/categoria';
    //Para cargar el array con cada paquete separado, lo hace solo cada vez que renderiza el componente
    useEffect(() => {
        fetch(urlPaq,{
            headers: {
                'x-token': token
            }})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPaquetes(data.paquetes);
                console.log(data);
            });
    },[]);
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
    useEffect(() => {
        fetch(urlCat)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCategorias(data.categorias);
                console.log(data);
            });
    },[]);

    return (
        <section className='p-3'>
            { (editProducto.nombre) ? (
                <ProductoUpdate producto={editProducto} productos={productos} setEditProducto={setEditProducto} tipos={tipos} token={token} />
            ):(editPaquete.nombre)?(
                <PaqueteUpdate paquete={editPaquete} productos={productos} paquetes={paquetes} setEditPaquete={setEditPaquete} categorias={categorias} token={token} />
            ):(
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
                <Tab eventKey="productos" title="Productos">
                    <Productos productos={productos} setEditProducto={setEditProducto} token={token} />
                </Tab>
                <Tab eventKey="paquetes" title="Paquetes">
                    <Paquetes paquetes={paquetes} setEditPaquete={setEditPaquete} token={token} />
                </Tab>
                <Tab eventKey="tipos" title="Tipos">
                    <TablaCategorias categorias={categorias} />
                </Tab>
                <Tab eventKey="categorias" title="Categorias">
                    <TablaTipos tipos={tipos} />
                </Tab>
                <Tab eventKey="usuarios" title="Usuarios">
                    <TablaUsuarios token={token} />
                </Tab>
            </Tabs>)}
            {(!addProducto && key==='productos') ? (
                <div className='my-3 d-flex justify-content-center'>
                    <button className='btn btn-outline-success mx-auto' onClick={()=>setAddProducto(true)}>
                        <i className="bi bi-plus-lg me-1"></i>
                        Agregar Producto
                    </button>
                </div>
            ):(addProducto && key ==='productos')&&(
                <ProductoAdd productos={productos} token={token} tipos={tipos} setAddProducto={setAddProducto}/>
            )}
            {(!addPaquete && key==='paquetes') ? (
                <div className='my-3 d-flex justify-content-center'>
                    <button className='btn btn-outline-success mx-auto' onClick={()=>setAddPaquete(true)}>
                        <i className="bi bi-plus-lg me-1"></i>
                        Agregar Paquete
                    </button>
                </div>
            ):(addPaquete && key ==='paquetes')&&(
                <PaqueteAdd paquetes={paquetes} productos={productos} token={token} categorias={categorias} setAddPaquete={setAddPaquete}/>
            )}
        </section>
    );


}

export default Administracion