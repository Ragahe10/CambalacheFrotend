import React from 'react';

const InstruccionesPago = ({ codigoVenta, cbuDueño, correoDueño }) => {
    return (
        <div style={{ backgroundColor: '#D6EAF8', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', border: '2px solid #5DADE2', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ color: '#5499C7', marginBottom: '20px', fontSize: '2rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Instrucciones de Pago por Transferencia</h2>
            <p style={{ color: '#5499C7', fontSize: '1.2rem' }}>Código de la venta: {codigoVenta}</p>
            <p style={{ color: '#5499C7', fontSize: '1.2rem' }}>CBU del dueño: {cbuDueño}</p>
            <p style={{ color: '#5499C7', fontSize: '1.2rem' }}>Correo del dueño: {correoDueño}</p>
            <p style={{ color: '#5499C7', fontSize: '1.2rem', marginTop: '20px' }}> 
                Por favor, realice el pago por transferencia a la cuenta indicada
                y envíe el comprobante al correo electrónico con el asunto que es
                el código de la venta.
            </p>
            <p style={{ color: '#5499C7', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '20px' }}> 
                ¡Importante! Envíe el comprobante al correo con el código de la venta.
            </p>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: '#85C1E9', opacity: '0.5', zIndex: '-1', transition: 'opacity 0.3s' }}></div>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: '#AED6F1', opacity: '0', zIndex: '-1', transition: 'opacity 0.3s' }}></div>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: '#D6EAF8', opacity: '0', zIndex: '-1', transition: 'opacity 0.3s' }}></div>
        </div>
    );
};

export default InstruccionesPago;
