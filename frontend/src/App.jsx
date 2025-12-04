import React,{ createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'


// Creamos el contexto
export const AuthContext = createContext();

function App() {
   const [isLogged, setIsLogged] = useState(false);

  // Comprobamos si hay cookie token al cargar la app
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
  <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
  </BrowserRouter>
 </AuthContext.Provider>
  </>
  )
}
export default App
