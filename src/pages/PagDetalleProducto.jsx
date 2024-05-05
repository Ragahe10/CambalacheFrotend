import React, { useEffect, useState } from 'react';
import getProductoById from '../helpers/getProductoById';
import DetalleProducto from '../components/DetalleProducto';
import 'bootstrap/dist/css/bootstrap.min.css';

// Funcionamiento Pagina Detalle Producto
const PagDetalleProducto = () => {
    const [producto, setProducto] = useState('');

    useEffect(() => {
        product();
    }, [])
    const product = async () => {
        const { producto } = await getProductoById('66245d088da4f3ab6c3f3a99');
        setProducto(producto);
    }
    return (
        <DetalleProducto producto={producto} />
    )
};

export default PagDetalleProducto;