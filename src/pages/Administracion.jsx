import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TablaPaquetes from '../components/TablaPaquetes'
import TablaProductos from '../components/TablaProductos';
import TablaTiposCategorias from '../components/TablaTiposCategorias';
import TablaUsuarios from '../components/TablaUsuarios';


const Administracion = () => {
    const [key, setKey] = useState('productos');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="productos" title="Productos">
                <TablaProductos />
            </Tab>
            <Tab eventKey="paquetes" title="Paquetes">
                <TablaPaquetes />
            </Tab>
            <Tab eventKey="tipos" title="Tipos">
                <TablaTiposCategorias />
            </Tab>
            <Tab eventKey="categorias" title="Categorias">
                <TablaTiposCategorias />
            </Tab>
            <Tab eventKey="usuarios" title="Usuarios">
                <TablaUsuarios/>
            </Tab>
        </Tabs>
    );


}

export default Administracion