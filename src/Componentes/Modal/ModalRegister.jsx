import React, { useState } from 'react'

const ModalRegister = ({isOpen}) => {

    const [ cod, setCod ] = useState("")
    const [ validar, setValidar ] = useState(false);


    const handleModalContainerClick = (e) => e.stopPropagation();



    return (
        <article className={`modal_register ${isOpen && "is-open"}`} onClick={handleModalContainerClick}>
            <div className="modal-container">
                {/* <button className="modal-close" /*onClick={closeModal}>
                    X
                </button> */}
                <h1 className="modal-header">Validar Email</h1>
                <h4 className="h4">Tiempo de espera: {/*<Moment date={start} format="mm:ss" durationFromNow />*/}</h4>
                <p className="modal-content">Código de validación enviado al siguiente Email: <strong> {/*{DataExistente.email*/}</strong></p>
                <hr />
                <form action="">
                    <div className="input-group input-group-sm mb-3">
                        <label htmlFor="" className="input-group-text w-60">Ingrese el código enviado por correo*</label>
                        <input type="text"
                            className="form-control w-40"
                            aria-describedby="inputGroup-sizing-sm"
                            value={cod}
                            onChange={(e) => setCod(e.target.value)}
                        />
                        <a href="#" className="text-dark text-decoration-underline pl-2" onClick={(e) => Update()}>Reenviar Codigo</a>
                        {/*{
                            val ?
                                ""
                                :
                        }*/}
                    </div>
                    <div className="input-group mb-3 d-flex justify-content-center">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1" /*onClick={IsMount ? (e) => HandleActualiza() : (e) => handleValidation()}*/>Validar</button>
                    </div>
                </form>
                {validar ?
                    <h4 className="Validacion p-2 text-light">
                        Validación realizada con exito
                        <Loading color="light" />
                    </h4>
                    :
                    ""
                }
            </div>
        </article>
    )
}

export default ModalRegister