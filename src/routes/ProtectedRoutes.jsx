import { Navigate } from "react-router-dom"


const ProtectedRoutes = ({children}) => {
    if(JSON.parse(sessionStorage.getItem('rol'))==="ADMIN_ROLE"){
        return children;
    }else{
        return (<Navigate to='/'/>)
    }
}

export default ProtectedRoutes