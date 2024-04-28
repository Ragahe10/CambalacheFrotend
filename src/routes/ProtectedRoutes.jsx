import { Navigate } from "react-router-dom"


const ProtectedRoutes = ({children, auth}) => {
    if(auth){
        return children;
    }else{
        return (<Navigate to='/'/>)
    }
}

export default ProtectedRoutes