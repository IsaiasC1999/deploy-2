import React from 'react'
import "./Header.css"
// import {img} from "../../../img/logo.jpg" 
const Header = () => {
  return (
    <header className="header">
     
      <img src="../../../img/logo.jpg" alt='logo-municipalidad' width="80px" height="80px" ></img>
      
      <div className="titulo-header">
          <h2 className='h2_titulo'>Dirección de Ingresos Municipales</h2>
          <h5 className='h5_titulo'>Municipalidad de San Miguel de Tucumán</h5>
        </div>
    </header>
  )
}

export default Header