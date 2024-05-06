const url = "https://cambalachebackend.onrender.com/api/auth/login";

const authLogin = async (datos) => {
    try{
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
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
export default authLogin;