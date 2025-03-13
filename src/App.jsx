import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from './components/Carrito/Carrito';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="BIENVENIDOS A TRAMICHI MATES" />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        <ToastContainer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App

