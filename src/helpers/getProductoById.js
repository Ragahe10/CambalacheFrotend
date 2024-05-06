const url = "https://cambalachebackend.onrender.com/api/producto";

const getProductoById = async (id) => {

    try {
        const resp = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if (!resp.ok) {
            throw new Error('No se pudo encontrar el producto');
        }
        const datos = await resp.json();
        // console.log(datos);
        return datos;
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo encontrar el producto');
    }
};

export default getProductoById;