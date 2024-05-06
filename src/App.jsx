import { useState } from 'react'
import './css/App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProtectedRoutes from './routes/ProtectedRoutes'
import Administracion from './pages/Administracion'
import Carrito from './pages/Carrito'
import Detalle from './pages/Detalle'
import Favorito from './pages/Favorito'
import Home from './pages/Home'
import Venta from './pages/Venta'
import Error404 from './pages/404'
import NavbarMenu from './components/Navbar'
import Encabezado from './components/Encabezado'
import authLogin from './helpers/Login'
import Footer from './components/footer'

function App() {
  //token
  const [token, setToken] = useState('');

  //logueo de usuario
  const [auth, setAuth] = useState(sessionStorage.getItem('usuario')? true : false);
  const LogIn = async (userData) => {
    try{
      const response = await authLogin (userData);
      if(!response.usuario){
        alert(response.msj);
      }else{
        setToken(response.token);
        sessionStorage.setItem('token',JSON.stringify(response.token));
        sessionStorage.setItem('usuario',JSON.stringify(response.usuario.nombre));
        sessionStorage.setItem('rol',JSON.stringify(response.usuario.rol));
        sessionStorage.setItem('id',JSON.stringify(response.usuario.uid));
        setAuth(true)
      }
    } catch (error){
      console.log(error);
    }
  }
  const logOut = () => {
    setAuth(false)
    sessionStorage.clear();
  }

  

  return (
    <Router>
        <Encabezado auth={auth} LogOut={logOut} LogIn={LogIn}/>
        <NavbarMenu LogOut={logOut} auth={auth}/>
        <Routes>
          <Route path='/Administracion' element={<ProtectedRoutes auth={auth}><Administracion/></ProtectedRoutes>}/>
          <Route path='/Carrito' element={<Carrito/>}/>
          <Route path='/Detalle' element={<Detalle/>}/>
          <Route path='/Favorito' element={<Favorito/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Venta' element={<Venta/>}/>
          <Route path='/Buscar' element={<Venta/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App
