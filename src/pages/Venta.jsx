import React, { useState } from 'react';
import ConfirmacionVenta from '../components/ventas';
import { useNavigate } from 'react-router-dom'; 


const Venta = () => {
    const [carrito, setCarrito] = useState([]);
    const [totalVenta, setTotalVenta] = useState(0);
    const navigate = useNavigate();

    const cancelarVenta = () => {
        setCarrito([]);
        setTotalVenta(0);
    };

    const confirmarVenta = () => {
        // Aquí enviarías los detalles de la venta al servidor y registrarías en la base de datos

        // Confirmo la venta y redirige a la página de instrucciones de pago
        navigate('/instruccionesPago');
    };

    return (
        <div>
            <ConfirmacionVenta
                carrito={carrito}
                totalVenta={totalVenta}
                cancelarVenta={cancelarVenta}
                confirmarVenta={confirmarVenta}
            />
        </div>
    );
};

export default Venta;
