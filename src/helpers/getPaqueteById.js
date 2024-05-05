const url = "https://cambalachebackend.onrender.com/api/paquete";

const getPaqueteById = async (id) => {

    try {
        const resp = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if (!resp.ok) {
            throw new Error('No se pudo encontrar el paquete');
        }
        const datos = await resp.json();
        // console.log(datos);
        return datos;
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo encontrar el paquete');
    }
};

export default getPaqueteById;