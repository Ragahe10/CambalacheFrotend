import React from 'react'
import Table from 'react-bootstrap/Table';
const TablaCategorias = ({categorias}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
                {categorias.map((c, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{c.categoria}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TablaCategorias