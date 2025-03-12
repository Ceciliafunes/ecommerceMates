import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { IoTrash } from 'react-icons/io5';

import "./Carrito.css";

const Carrito = () => {
    const { carrito, borrarProductosPorId, vaciarCarrito, precioTotal } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="cart-vacio container">
                <h2>No hay productos en el carrito</h2>
                <Link to="/" className='volverListado'> Volver a la lista de Productos </Link>
            </div>
        );
    } 
    return (
        <div className="cart container">
            <h2 className='tituloCarrito'>Productos en el carrito </h2>
            {carrito.map ((productoCarrito) => (
                <div className="card-cart" key={productoCarrito.id}>
                    <img src={productoCarrito.imagen} width={110} alt="" />
                    <h3>{productoCarrito.nombre}</h3>
                    <p>Precio unitario: ${productoCarrito.precio}</p>
                    <p>Cantidad: {productoCarrito.cantidad}</p>
                    <p>Total parcial: ${productoCarrito.precio * productoCarrito.cantidad}</p>

                    <IoTrash className='buttonDelete' size={40} color='red' onClick={()=> borrarProductosPorId(productoCarrito.id)} />
                </div>
            ))}
            <div className='totales container'>
                <h4>Precio Total: ${precioTotal()}</h4>
                <button className='delete-cart' onClick={vaciarCarrito}>
                    <IoTrash size={45} color='red' />
                    <p>Vaciar Carrito</p>
                </button>
                <Link className='continue-cart' to="/checkout">Continuar con la compra</Link>
            </div>
            
        </div>
    );
};
export default Carrito
