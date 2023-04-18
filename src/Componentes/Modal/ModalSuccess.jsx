import './Modal.css'
import React, { useEffect, useState } from 'react'


const ModalSuccess = ({ success, setSuccess }) => {

    const [tiempoRestante, setTiempoRestante] = useState(1);
    const handleModalContainerClick = (e) => e.stopPropagation();

    const actualizarTiempo = () => {
        setTiempoRestante(tiempoRestante + 1)
    }

    useEffect(() => {
        if (tiempoRestante > 0 && tiempoRestante < 4) {
            const intervalo = setInterval(actualizarTiempo, 1000)
            return () => clearInterval(intervalo)
        } else {
            // setSuccess(false)
        }
    }, [tiempoRestante])

    return (
        <article className={`modal-success ${success && "is-open"}`} onClick={handleModalContainerClick}>
            <div className='modal-container'>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => setSuccess(false)}></button>
                    </div>
                    <div className="modal-body text-center border">
                        <h1 className="h1 mb-3">Bienvenido!</h1>
                        <h4 className='h4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                             Registrado con exito
                        </h4>
                        {/* <h4 className='h4'> <FaRegCheckCircle className='valid' /> Registrado con exito</h4> */}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ModalSuccess