// LISTA DE PRODUCTOS
import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const productos = [
    {
        id: 1,
        nombre: "Mate Imperial",
        descripcion: "Mate imperial premium de calabaza seleccionada con virola de alpaca, elaborado por artesanos expertos. NO incluye bombilla",
        stock: 8,
        categoria: "mates",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/s52j6jkvvumi8c8my4ns",
        precio: 27000
    },

    {
        id: 2,
        nombre: "Mate Camionero",
        descripcion: "Camionero de calabaza, forrado en cuero con virola de acero inoxidable",
        stock: 3,
        categoria: "mates",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/miph9fjotvotah3ns9df",
        precio: 17000
    },

    {
        id: 3,
        nombre: "Torpedo Premium",
        descripcion: "Mate torpedo premium, de calabaza seleccionada con virola de alpaca cincelada",
        stock: 5,
        categoria: "mates",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/t1bdu2orkpf64ephckd6",
        precio: 24900
    },

    {
        id: 4,
        nombre: "Camionero de Algarrobo",
        descripcion: "Camionero de algarrobo con virola de acero inoxidable lisa",
        stock: 8,
        categoria: "mates",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/fq9uyguxgywp0mgihdom",
        precio: 10500
    },

    {
        id: 5,
        nombre: "Termo Media Manija 1L",
        descripcion: "Termo de acero inoxidable doble capa media manija 1L, pico cebador matero, mantiene el agua entre 12 y 24hs.",
        stock: 18,
        categoria: "termos y accesorios",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/xcba5m73jitnudhbuakr",
        precio: 19900
    },

    {
        id: 6,
        nombre: "Bombilla Pico Loro de Acero",
        descripcion: "Bombilla pico loro de acero inoxidable",
        stock: 20,
        categoria: "termos y accesorios",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/qa8aqifrlarslvbzu8a8",
        precio: 5000
    },

    {
        id: 7,
        nombre: "Canasta 100% Cuero",
        descripcion: "Canasta matera 100% cuero legítimo",
        stock: 2,
        categoria: "termos y accesorios",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/z1qbyefcgcnx13nhlz6s",
        precio: 27000
    },

    {
        id: 8,
        nombre: "Canasta Simil",
        descripcion: "Canasta matera simil cuero negra",
        stock: 1,
        categoria: "termos y accesorios",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/taskpvksf6s0ztpgck8e",
        precio: 11000
    },

    {
        id: 9,
        nombre: "Estuches de Cuero",
        descripcion: "Estuches yerbero y azucarero de ecocuero, anti hongos, anti humedad, capacidad: 350gr. de yerba y 150gr de azúcar, son impermeables. Super practicos y modernos",
        stock: 2,
        categoria: "termos y accesorios",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/vc8nclg9khdg6epohlne",
        precio: 8300
    },

    {
        id: 10,
        nombre: "Combo Imperial y Termo",
        descripcion: "mate imperial, bombilla y termo media manija. Con yerbero encastrable de regalo",
        stock: 4,
        categoria: "combos",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/snurbpet4zxhpoihyvcp",
        precio: 41000
    },

    {
        id: 11,
        nombre: "Combo Camionero Full",
        descripcion: "incluye: mate camionero de calabaza forrado en cuero con virola de acero inoxidable lisa, bombilla pico loro, canasta simil y termo media manija",
        stock: 6,
        categoria: "combos",
        imagen: "https://res.cloudinary.com/dkb6wt24n/image/upload/f_auto,q_auto/v1/matesTramichi/cjh4zyc4tp8kfeusloif",
        precio: 48000
    },



]

const seedProducts = () => {
    productos.map(({ id, ...rest}) => {
        const productosRef = collection(db, "productos")
        addDoc(productosRef, rest)
    });
    return
}; 
seedProducts();