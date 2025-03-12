import { useState, useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "../../context/CartContext";
import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";
import validateForm from "../../utils/validacionFormulario.js";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

import 'react-toastify/dist/ReactToastify.css';
import "./Checkout.css";


const Checkout = () => {
    const {carrito, precioTotal, vaciarCarrito} = useContext (CartContext);
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
    });
    const [idOrden, setIdOrden] = useState(null);
    
    const guardarDatosInput = (event) =>{
        setDatosForm({...datosForm, [event.target.name]: event.target.value });
    };
    const enviarOrden = async (event) =>{
        event.preventDefault();
        if(!datosForm.nombre || !datosForm.telefono || !datosForm.email){
            toast.warn("Por favor complete todos los campos")
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
            if (!emailPattern.test(datosForm.email)) {  
            toast.warn("Por favor ingresa un email válido.");  
            return;  
        }  
        //formatear la orden
        const datos = {
            comprador: {...datosForm},
            productos: [...carrito],
            total: precioTotal(),
        };
        //subir orden
        try {
            const response = await validateForm(datosForm);
            if (response.status === "success") {
                await subirOrden(datos);
            } else {
                toast.warn(response.message);
            }
        } catch (error) {
            toast.error("Hubo un error al validar el formulario.")
        }
    };

    const subirOrden = async (datos) =>{
        const ordenesRef = collection(db, "ordenes");
        try {  
            const respuesta = await addDoc(ordenesRef, datos);  
            setIdOrden(respuesta.id);  
            vaciarCarrito();  
            mostrarAlerta();
        } catch (error) {  
            toast.error("Error al enviar la orden.");  
        }  
    };

    const mostrarAlerta = () => {
        Swal.fire({
            title: "Orden generada con exito",
            text: "Tu pedido ha sido registrado",
            icon: "success",
            draggable: true,
        });
    }

    return (
        <div className="checkout container">
            {idOrden ? (
                <div className="orden-generada" > 
                    <h2>Orden de pedido generada exitosamente</h2>
                    <h5>Dentro de las siguientes 24hs un asesor se pondrá en contacto al telefono brindado para realizar el pago 
                        y acordar los detalles del envio</h5>
                    <h3>Guarde el ID de su pedido: {idOrden}</h3>
                    <h6>Gracias por elegir Tramichi Mates</h6>
                </div>
            ) : (  
                <>  
                    {carrito.length === 0 ? (  
                        <h2>No hay productos en el carrito. Por favor, agrega algunos para realizar la compra.</h2>  
                    ) : (  
                        <Formulario  
                            datosForm={datosForm}  
                            guardarDatosInput={guardarDatosInput}  
                            enviarOrden={enviarOrden}  
                        />  
                    )}  
                </>  
            )}
            <ToastContainer/>  
        </div>  
    );  
};

export default Checkout
