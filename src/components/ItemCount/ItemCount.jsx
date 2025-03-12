import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ( {agregarAlCarrito, stock} ) => {
    const [contador, setContador] = useState(1);

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };
    const restarContador = () => {
        if (contador > 1) {
            setContador (contador - 1);
        }
    };

    const handleAgregarAlCarrito = () => {
        console.log("cantidad seleccionada para agregar al carrito", contador);
        agregarAlCarrito(contador);
    };

    return (
        <div className="item-count container">
            <div className="controles-contador col">
                <button onClick= {sumarContador} className="">+</button>
                <p className="">{contador}</p>
                <button onClick= {restarContador} className="">-</button>
                <button className="add" onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
            </div>
            
        </div>
    );
};

export default ItemCount;
