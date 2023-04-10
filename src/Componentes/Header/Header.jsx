import React from 'react'
import style from "./Header.module.css"
const Header = () => {
  return (
    <header className={`${style.header}`}>
    {/* <div className={`${style.headerPrueba}`} id="contenedor-informacion">
        <div className="pd-2">
          <img src="img/logo.jpg" width="120" height="120"></img>
        </div>
        <div className="container text-center titulo-dim">
          <h2>Dirección de Ingresos Municipales</h2>
          <h5>Municipalidad de San Miguel de Tucumán</h5>
        </div>
      </div> */}
      <h2>header</h2>
    </header>
  )
}

export default Header