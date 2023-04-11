
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Componentes/layout/Header/Header";
import "./App.css"
import Footer from "./Componentes/layout/Footer/Footer";
import { Main } from "./Componentes/layout/Main/Main";

function App() {

  return (
    <>

      <Header/>
      <div className="app-conteiner">
        <Main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sit praesentium? Velit magnam vero vitae quidem voluptatum mollitia voluptate nesciunt modi earum omnis repellendus, perspiciatis doloremque eius iusto. Beatae, cumque.
        </Main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
