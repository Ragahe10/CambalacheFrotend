import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from '../components/slider';
import CardsPaquetes from '../components/cardsPaquetes';
import CardsProductos from '../components/cardsProductos';
import CardPubli from '../components/cardPubli';
//import DetalleProducto from '../components/message';


const Home = () => {
  const [producto, setProducto] = useState(null);
  return (
    <div>
      <Slider/>
      <CardsPaquetes/>
      <CardsProductos/>
      <CardPubli/>
    </div>
  )
}

export default Home;