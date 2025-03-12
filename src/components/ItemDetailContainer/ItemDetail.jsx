import { useContext } from "react";
import "./ItemDetailContainer.css";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({producto}) => {
    const {agregarProducto} = useContext (CartContext);

    const agregarAlCarrito = (contador) => {
        const productoCarrito = {
            ...producto, 
            cantidad: contador,
        };

        agregarProducto(productoCarrito);
    };

    return (
        <div className="container container-detail">
            <div className="item-detail row">
                <img className="cardImg" src={producto.imagen} alt="" />
                <div className="detail col">
                    <h2 className="detail-title">{producto.nombre}</h2>
                    <p className="detail-descripcion">{producto.descripcion}</p>
                    <p className="detail-precio">Precio: ${producto.precio}</p>
                    <ItemCount agregarAlCarrito={agregarAlCarrito} stock = {producto.stock} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
