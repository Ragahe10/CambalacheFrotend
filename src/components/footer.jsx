import React from "react"
import '../css/footer.css'
import Facebook from '../../imagenes/logo-facebook.png'
import Instagram from '../../imagenes/Logo-instagram.png'
import logoFooter from '../../imagenes/Logo-cambalache.jpg'


const Footer =()=>{

    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                   
                    <div className="sb__footer-links_div">
                        <h4> Cambalache</h4>
                        <p>Tarjeteria, diseño gráfico, detalles para eventos</p>
                        
                        <h4> Contacto</h4>
                        <p>3813649642</p>
                        
                        <h4>E-mail</h4>
                        <p>aybaryessica@gmail.com</p>
                        
                        

                    </div>
                    
                    <div className="sb__footer-links_div">
                      <img className="logoFooter" src={logoFooter} />

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Redes Sociales</h4>
                        <div className="Socialmedia">
                            <p><img src={Facebook}  /><a href="https://www.facebook.com/cambalachedg?_rdc=2&_rdr"></a></p>
                            <p><img src={Instagram}  /><a href="https://www.instagram.com/cambalachedg/"></a></p>
                            
                        </div>
                    </div>
                </div>
               
             </div>

        </div>
    )
}
export default Footer