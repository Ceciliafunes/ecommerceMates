import { createContext, useState } from "react";

//creamos contexto

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) =>{
        const condicion = estaEnElCarrito(producto.id);
        if (condicion) {
            const productosModificados = carrito.map((productoCarrito)=>{
                if (productoCarrito.id === producto.id) {
                    return{ 
                        ...productoCarrito, 
                        cantidad: productoCarrito.cantidad + producto.cantidad};
                } else {
                    return productoCarrito;
                }
            });

            setCarrito(productosModificados);
        } else {
            //agregar como producto nuevo
            setCarrito([...carrito, {...producto, cantidad: producto.cantidad}]);
        }
    };

    const estaEnElCarrito = (idProducto) => {
        return carrito.some((producto) => producto.id === idProducto);
    };

    const cantidadTotal = () => {
        return carrito.reduce((total, producto)=> total + producto.cantidad, 0);
        
    };

    const precioTotal = () => {
        return carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0); 
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const borrarProductosPorId = (idProducto) =>{
        const productosFiltrados = carrito.filter (
            (productoCarrito) => productoCarrito.id !== idProducto
        );
        setCarrito(productosFiltrados)
    };

    return (
        <CartContext.Provider
            value= {{carrito, agregarProducto, cantidadTotal, precioTotal, vaciarCarrito, borrarProductosPorId}}
        >
            {children}
        </CartContext.Provider>
    );
};

export {CartProvider, CartContext};