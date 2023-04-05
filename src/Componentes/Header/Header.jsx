import React from 'react'

const Header = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center border" id="contenedor-informacion">
        <div className="pd-2">
          <img src="img/logo.jpg" width="120" height="120"></img>
        </div>
        <div className="container text-center titulo-dim">
          <h2>Dirección de Ingresos Municipales</h2>
          <h5>Municipalidad de San Miguel de Tucumán</h5>
        </div>
      </div>
  )
}

export default Header