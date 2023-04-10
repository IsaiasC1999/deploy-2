
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Header from "./Componentes/Header/Header";
import "./App.css"
import Footer from "./Componentes/Footer/Footer";

function App() {

  return (
    <>

      <div className="app-conteiner">
        {/* <Header /> */}
        {/* <header className="header"></header> */}
        <Header/>
        <main className="main">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda deleniti eum et. Neque assumenda quas quo omnis rerum cumque voluptas natus non, quisquam quam similique amet, earum optio harum?</p>
        </main>
        {/* <footer className="footer">
          <h2>asdasd</h2>
        </footer> */}
        <Footer/>
      </div>
      {/* // <div className="conteiner-app">
    //   <Header />
    //   <main>
    //     <BrowserRouter>
    //       <Routes>
    //         <Route path="/" element={<Home />}/>   
    //       </Routes>
    //     </BrowserRouter>
    //   </main>
    //   <Footer />

    // </div> */}
    </>

  );
}

export default App;
