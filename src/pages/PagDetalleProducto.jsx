import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProductoById from '../helpers/getProductoById';
import DetalleProducto from '../components/DetalleProducto';
import 'bootstrap/dist/css/bootstrap.min.css';

// Funcionamiento Pagina Detalle Producto
const PagDetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState('');

    useEffect(() => {
        product();
    }, [id])

    const product = async () => {
        const { producto } = await getProductoById(id);
        setProducto(producto);
    };

    return (
        <DetalleProducto producto={producto} />
    )
};

export default PagDetalleProducto;