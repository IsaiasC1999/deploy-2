import React from 'react'
import useLogin from './hook/useLogin'

const Login = ({ setOpenRegister }) => {


    const { login, setContraseña, setUsuario } = useLogin()

    const openRegister = () => { setOpenRegister(true) }

    return (
        <div>
            <div className="container d-flex border justify-content-center align-items-center" id="contenedor-ingreso">
                <div className="container " id="formulario">
                    <form action="/auth" method="POST">
                        <div className="container w-100 text-center pt-3">
                            <h3>Inicio de Sesión</h3>
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <label className="input-group-text" id="inputGroup-sizing-sm">Usuario</label>
                            <input type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                                name="user"
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <label className="input-group-text" id="inputGroup-sizing-sm">Contraseña</label>
                            <input type="password"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                                name="password"
                                onChange={(e) => setContraseña(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3 d-flex justify-content-center">
                            <button href="#" className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={() => login()}>Ingresar</button>
                            <button href="#" className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={openRegister}>Registrarte</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login