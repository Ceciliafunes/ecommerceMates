import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";


import "./ItemFinal.css"

const ItemFinal = () => {
    return (
        <div className="futer container">
            <div className="parrafoFooter">
                <p>Envíos gratis a todo el país en compras mayores a $80.000</p>
            </div>            
            <div className="redes row">
                <a href="https://www.facebook.com/tramichimates" target="_blank" className="col-lg-1 col-sm-4">
                <FaFacebook size={40} color="whitesmoke"/></a>
                <a href="https://www.instagram.com/tramichi.mates" target="_blank" className="col-lg-1 col-sm-4">
                <FaInstagram size={40} color="whitesmoke"/></a>
                <a href="https://wa.me/5492615779768" target="_blank" className="col-lg-1 col-sm-4">
                <FaWhatsapp size={40} color="whitesmoke" /></a>
                <p className="col-lg-3 col-sm-12">15% de descuento en todo el sitio abonando con transferencia bancaria</p>
                <p className="col-lg-3 col-sm-12">Recibimos todas las tarjetas de crédito y débito <FaCreditCard size={25}/></p>
                <p className="col-lg-3 col-sm-12">Envios a través de Andreani, Correo Argentino, Vía cargo <FaTruck size={25}/></p>
                
            </div>
            
            <div class="licencia">
                <p>Creado por FunesDevsWeb. Copyright © 2024. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default ItemFinal;