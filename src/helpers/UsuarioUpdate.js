const url = "https://cambalachebackend.onrender.com/api/usuario/";

const UsuarioUpdate = async (datos, id, token) => {
    try{
        const response = await fetch(url+id , {
            method: "PUT",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "x-token": token
            }
        });

        const data = await response.json();
        // console.log(data);
        return data;

    } catch (error) {
        console.log(error);
        return {msg: "No se pudo conectar a la base de datos"}
    }
}
export default UsuarioUpdate;