import React from 'react';

const InstruccionesPago = ({ codigoVenta, cbuDueño, correoDueño }) => {
    return (
        <div style={{ backgroundColor: '#FCE4EC', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}> {/* Cambia el color de fondo a rosa claro, agrega padding, bordes redondeados y sombra */}
            <h2 style={{ color: '#FF69B4' }}>Instrucciones de Pago por Transferencia</h2> {/* Cambia el color del texto a rosa brillante */}
            <p>Código de la venta: {codigoVenta}</p>
            <p>CBU del dueño: {cbuDueño}</p>
            <p>Correo del dueño: {correoDueño}</p>
            <p style={{ color: '#FF69B4' }}> 
                Por favor, realice el pago por transferencia a la cuenta indicada
                y envíe el comprobante al correo electrónico con el asunto que es
                el código de la venta.
            </p>
            <p style={{ color: '#FF69B4', fontWeight: 'bold' }}> 
                ¡Importante! Envíe el comprobante al correo con el código de la venta.
            </p>
        </div>
    );
};

export default InstruccionesPago;
