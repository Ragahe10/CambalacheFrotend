import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Carrito } from "./componentes/Carrito"
import { DataProvider } from "./contex/Dataprovider"
import 'boxicons';



function App() {
  
  return (
    <DataProvider>
    <div className='App'>
    <Carrito />
    </div>
    </DataProvider>
   
  );
}

export default App
