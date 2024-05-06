import React, { useState, useEffect, createContext} from "react";
import data from " Data.js"
export const DataContex = createContext ();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false); 
    const [carrito, setCarrito] = useState([])

    useEffect(() =>{
        const producto = Data.items
        if (producto) {
            setProductos(producto)
        }else{
            setProductos([])
        }
        
    },[])

    const value ={
        productos : [productos]
    }

    return (
        <DataContex.provider value = {value}>
            {props.children}
        </DataContex.provider>
    )

}


const addCarrito = (id) =>{
    const check = carrito.every(item =>{
        return item.id !== id;

    })
    if(check){
        const data = productos.filter(productos =>{
            return productos. id === id
        })
        setCarrito([...carrito, ...data])
    }else{
       alert("El producto se ha añadido al carrito") 

    
    }

}

const value ={
    productos: [productos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito]



}