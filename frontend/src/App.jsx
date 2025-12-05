import React,{ createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'


// Creamos el contexto
export const AuthContext = createContext(); //Contexto logged/no logged
export const CarritoContext = createContext(); //Contexto carrito

function App() {

    //LOGGED
    const [isLogged, setIsLogged] = useState(false);

    //CARRITO-----------------------------------------------
    //carrito es el estado del carrito (un array de objetos)
    const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem("carrito");//guardar en LocalStorage->"string"
      try {
          const parsed = JSON.parse(saved); //Convierte el string-> array de objetos
          return Array.isArray(parsed) ? parsed : []; //si no es un array->[]
      } catch {
      return [];
        }
      });

    //Guardar carrito en localStorage cada vez que cambie
    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);


    //ADD->carrito
    const addToCarrito = (product) => {
      setCarrito((prevCart) => { //actualizamos estado del carrito

        // Si ya existe el producto(+1)
        const existing = prevCart.find(item => item.id === product.id && item.size === product.size);
        if (existing) {
          return prevCart.map(item =>
            item.id ===  product.id && item.size === product.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevCart,product];
        }
      });
    };

    //ELIMINAR->camiseta carrito
    //solo mantiene los productos que NO coinciden con id y size
    //nuevo array sin el producto que queríamos eliminar
    const removeFromCarrito = (id, size) => {
    setCarrito(prevCart =>
      prevCart.filter(item => !(item.id === id && item.size === size))
      );
    };

    const updateQuantity = (id, size, qty) => {
      setCarrito(prevCart =>
        prevCart.map(item =>
          item.id === id && item.size === size
            ? { ...item, quantity: qty }
            : item
        )
      );
    };
    // Función para limpiar carrito
    const clearCarrito = () => setCarrito([]);
    //fin Carrito -----------------------------------------------


    
    //LOGGED->Comprobamos si hay cookie token al cargar la app
    useEffect(() => {
      const token = document.cookie
        .split("; ")
        .find(row => row.startsWith("token="))
        ?.split("=")[1];
      setIsLogged(!!token);
    }, []);

  return(
  <>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <CarritoContext.Provider value={{carrito,addToCarrito,removeFromCarrito,updateQuantity,clearCarrito}}>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </CarritoContext.Provider>
    </AuthContext.Provider>
  </>
  )
}
export default App
