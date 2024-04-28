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

function App() {
  const [auth, setAuth] = useState(true);
  const logIn = () => {
    setAuth(true)
  }

  const logOut = () => {
    setAuth(false)
  }
  return (
    <Router>
        <Encabezado auth={auth} LogOut={logOut}/>
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
      </Router>
  )
}

export default App
