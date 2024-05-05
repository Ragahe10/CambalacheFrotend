import React, { useEffect, useState } from 'react';
import getPaqueteById from '../helpers/getPaqueteById';
import DetallePaquete from '../components/DetallePaquete';
import 'bootstrap/dist/css/bootstrap.min.css';

// Funcionamiento Pagina Detalle Paquete
const PagDetallePaquete = () => {
    const [paquete, setPaquete] = useState('');

    useEffect(() => {
        packag();
    }, [])
    const packag = async () => {
        const { paquete } = await getPaqueteById('6624699b6990afebd3be0654');
        setPaquete(paquete);
    }
    return (
        <DetallePaquete paquete={paquete} />
    )
};

export default PagDetallePaquete;