
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Header from "./Componentes/Header/Header";
import "./App.css"
import Footer from "./Componentes/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>   
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>

  );
}

export default App;
