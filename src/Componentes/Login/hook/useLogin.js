import React, { useEffect, useState } from 'react'
import { postLogin, postRedireccion } from '../../../services/servicesLogin'


const useLogin = () => {

  const [DataExistente, setDataExistente] = useState({})
  const [usuario, setUsuario] = useState(""); //USESTATE DE USUARIO 
  const [contraseña, setContraseña] = useState("");//USESTATE DE CONTRASEÑA
  const [IsMount, setIsMount] = useState(false);
  const [IsMessage,setIsMesagge] = useState(false);  
  
  const data = {
    usuario: usuario,
    clave: contraseña
  }

  const login = async () => {
    postLogin(data).then(cred => {
       
      console.log(cred);

      if(cred.token_acceso){ 
        document.cookie = `token=${cred.token_acceso}; max-age=${60 * 60}; path=/; samesite=strict`    
        console.log("Entre aqui");        
      }

      if(cred.token_basico.token_basico){
        // colacar estado que active modal por si faltan datos
        document.cookie = `token_basico=${cred.token_basico.token_basico}; max-age=${60 * 60}; path=/; samesite=strict`            
      }      
      
    }).catch((error) => {
      // colocar estado que imprimera un mensaje de error si esta mal logueado
      setIsMesagge(true);
      console.log(error);
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

  return { login, Redireccion, setContraseña, setUsuario,IsMessage }
}

export default useLogin