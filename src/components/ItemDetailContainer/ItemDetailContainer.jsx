import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import useLoading from "../Loading/useLoading.jsx";
import { getDoc, doc } from "firebase/firestore";
import db from "../db/db.js";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const {idProducto} = useParams()
    const { isLoading, showLoading, hideLoading } = useLoading ()  

    const obtenerProducto = () => {
        const docRef = doc (db, "productos", idProducto)
        getDoc(docRef)
            .then((respuesta) => {
                const data = { id: respuesta.id, ...respuesta.data() }
                setProducto(data)
            })
    }
    useEffect(()=>{
        obtenerProducto()
    }, []);

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>

    );
};

export default ItemDetailContainer
