import React from 'react'
import Table from 'react-bootstrap/Table';
const TablaTipos = ({tipos}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {tipos.map((t, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{t.tipo}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TablaTipos