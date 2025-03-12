import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext);
    return (
        <Link to="/carrito">  
            <div>
                <FaShoppingCart size={50} color="yellow" />
                <span className="numeroCarrito">
                    {cantidadTotal()}
                </span>
            </div>     
        </Link>
        
        
    )
}




export default CartWidget

