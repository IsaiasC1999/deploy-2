import React from 'react'

const Login = () => {
    return (
        <div >
            <div >
                <div >
                    <h3>Inicio de Sesión</h3>
                </div>
                <form>
                    <div >
                        <label >Usuario</label>
                        <input type="text"

                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name="user"
                        // onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div >
                        <label >Contraseña</label>
                        <input type="password"

                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name="password"
                        // onChange={(e) => setContraseña(e.target.value)}
                        />
                    </div>
                    <div >
                        <button href="#" type="button" id="button-addon1" >Ingresar</button>
                        <button href="#" type="button" id="button-addon2" >Registrarte</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Login