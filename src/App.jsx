
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Componentes/layout/Header/Header";
import "./App.css"
import Footer from "./Componentes/layout/Footer/Footer";
import { Main } from "./Componentes/layout/Main/Main";
import Home from './pages/home/Home'
import Login from "./Componentes/Login/Login";

function App() {

  return (
    <>

      <Header />
      <div className="app-conteiner">
        <Main>
          
          <Home />
          {/* <Login></Login> */}
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default App;
