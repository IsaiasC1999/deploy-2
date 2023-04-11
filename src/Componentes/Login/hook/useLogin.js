import React, { useState } from 'react'
import { postLogin, postRedireccion } from '../../../services/servicesLogin'

const useLogin = () => {

    const [DataExistente, setDataExistente] = useState({})
    const [usuario, setUsuario] = useState(""); //USESTATE DE USUARIO 
    const [contraseña, setContraseña] = useState("");//USESTATE DE CONTRASEÑA
    const [IsMount, setIsMount] = useState(false);


    const login = async () => {
        postLogin(data).then(cred => {
            console.log(cred)
            if (cred.token !== undefined) {
                document.cookie = `token=${cred.token}; max-age=${60 * 60}; path=/; samesite=strict`
                console.log("No hay token xd")
                // Redireccion();
            } else {
                console.log(cred.datos)
                Object.assign(DataExistente, cred.datos)
                console.log("DataExistente------- ")
                console.log(DataExistente)
                // setIsMount(true)
            }
        })
    }


    const Redireccion = async () => {

        try {
            postRedireccion()
                .then(data => {
                    console.log(data);
                    console.log(data.user.id);
                    CargaDatosContext(data.user.id, data.user.rol, data.user.tributos);

                    if (data.user.rol === "usuario") {
                        window.location.href = "./consulta-online";
                    } else if (data.user.rol === "interno") {
                        window.location.href = "./atencion-online";
                    }
                })
        } catch (error) {

            window.location.href = "/";
        }

    }

    return { login, Redireccion, setContraseña, setUsuario }
}

export default useLogin