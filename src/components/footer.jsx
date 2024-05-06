import React from "react"
import '../css/footer.css'


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
                      <img className="logoFooter" src={"../imagenes/Logo-cambalache.jpg"} />

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Redes Sociales</h4>
                        <div className="Socialmedia">
                            <p><img src={'../imagenes/logo-facebook.png'}  /><a href="https://www.facebook.com/cambalachedg?_rdc=2&_rdr"></a></p>
                            <p><img src={'../imagenes/Logo-instagram.png'}  /><a href="https://www.instagram.com/cambalachedg/"></a></p>
                            
                        </div>
                    </div>
                </div>
               
             </div>

        </div>
    )
}
export default Footer