import { postRegistro } from "../../../services/servicesLogin"


const useFormRegister = (setErrorPwd) => {

  const onSubmit = (data) => {
    if (data.confirma !== data.contraseña) {
      setErrorPwd(true)
    } else {

      postRegistro(data).then((res) => {

        // aqui iria el setState que muestra la ventada model de verificacion de mail.

      }).catch(() => {
        console.log("Erro la logeo");
      })
    }
  }
  
  return { onSubmit }
}

export default useFormRegister;