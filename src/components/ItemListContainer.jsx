
import "./itemListContainer.css";

import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useLoading from "./Loading/useLoading";
import Loading from "./Loading/Loading";
import  { useParams } from "react-router-dom";
import db from "./db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemFinal from "./ItemFinal/ItemFinal.jsx";

const ItemListContainer = ({titulo}) => {

  const [productos, setProductos] = useState( [] );

  //pantalla de carga
  const { isLoading, showLoading, hideLoading } = useLoading ()  

  const {idCategoria} = useParams();
  
//mostrar pantalla de carga
    
//para que la ejecucion de la promesa se realice solo una vez
  const obtenerProductos = () => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((respuesta) => {
      const data = respuesta.docs.map((productDb)=> {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
    })
  };
  const obtenerProductosFiltrados = () =>{
      const productosRef = collection(db, "productos");
      const q = query(productosRef, where ("categoria", "==", idCategoria));
      getDocs(q).then((respuesta) =>{
        const data = respuesta.docs.map((productDb) =>{
          return {id: productDb.id, ...productDb.data() };
        });
        setProductos(data);
      });
  };
  useEffect(() => {  
    const cargarProductos = async () => {  
        showLoading(); // Muestra el loading  
        try {  
            if (idCategoria) {  
                await obtenerProductosFiltrados();  
            } else {  
                await obtenerProductos();  
            }  
        } catch (error) {  
            console.error("Error al obtener productos: ", error);  
        } finally {  
            hideLoading(); // Oculta el loading cuando termina  
        }  
    };  
    cargarProductos();  
  }, [idCategoria]); 
    


  return (
    <div className="item-list-container container">
      <h1 className="bienvenida"> {titulo} </h1>
      { //si is loading es true se muestra la pantalla de carga, si es falso muestra 
      //los productos
        isLoading ? <Loading />  : <ItemList productos = {productos} />
      }
      
      <ItemFinal/>
    </div>
  );
};

export default ItemListContainer;
