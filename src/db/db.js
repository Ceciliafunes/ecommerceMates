import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAc4_hMLgkJaiOzNMmNaZ5C1SHQ9XEA6Sw",
    authDomain: "ecommerce-tramichi.firebaseapp.com",
    projectId: "ecommerce-tramichi",
    storageBucket: "ecommerce-tramichi.firebasestorage.app",
    messagingSenderId: "433935122809",
    appId: "1:433935122809:web:e3d3d95db3956894e6efa8"
};

  // Inicializar Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
