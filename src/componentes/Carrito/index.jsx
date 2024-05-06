import React, { useContext } from "react";
import Card from "../../images/img03.jpg" 
import { DataContex } from "../../contex/Dataprovider"


const tooglefalse = () =>{
    setmenu(false);

}


export const Carrito = () =>{
    const value = useContext(DataContex)
    const[menu, setMenu] = value.menu

    
    const show1 = menu ? "carritos show" : " carritos";
    const show2 = menu ? "carrito show" : "carrito";
    
    
    
    
    
    return (
        <div className="carritos show">
            <div className="carrito show">
                

                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito</h2>
                <div className="carrito__center">


                    <div className="carrito__item">
                        <img src="{Card}" alt=""/>
                        <div>
                            <h3>title</h3>
                            <p className="price">$35.000</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="camntidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove__item">
                            <box-icon name="trash"></box-icon>

                        </div>
                    </div>



                </div>
                <div className="carrito_footer"></div>
                <h3>Total: $23.000</h3>
                <button className="btn">Pagar</button>
            </div>   
        </div>
    )
}
