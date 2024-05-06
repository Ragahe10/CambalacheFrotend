import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPaqueteById from '../helpers/getPaqueteById';
import DetallePaquete from '../components/DetallePaquete';
import 'bootstrap/dist/css/bootstrap.min.css';

// Funcionamiento Pagina Detalle Paquete
const PagDetallePaquete = () => {
    const { id } = useParams();
    const [paquete, setPaquete] = useState('');

    useEffect(() => {
        packages();
    }, [id]);

    const packages = async () => {
        const { paquete } = await getPaqueteById(id);
        setPaquete(paquete);
    };

    return (
        <DetallePaquete paquete={paquete} />
    );
};

export default PagDetallePaquete;