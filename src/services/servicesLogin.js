const base_url_api = "http://172.20.255.15:4000/"


export function postLogin(data) {

  const opction = {
    method: 'POST',
    headers:
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  // 'http://localhost:4000/login

  // const url = "http://localhost:4000/login"

  return fetch(`${base_url_api}auth`, opction)
    .then(res => {

      if (!res.ok) {
        throw new Error("Logeo Incorrecto")
      }

      return res.json();
    })
    .then(datos => {
      return datos;
    })
}

export function postRedireccion() {

  const token = document.cookie.replace("token=", "")

  const opc = {
    method: 'POST',
    headers: {
      'authorization': token
    }
  }

  return fetch('http://localhost:4000/tokenInternOusuario', opc)
    .then(res => res.json())
    .then(datos => {
      return datos

    })
}

// servicesRegister
export function postRegistro(data) {

  const objFinal = {

    nombre: data.nombre,
    apellido: data.apellido,
    documento: data.dni,
    email: data.email,
    telefono: data.telefono,
    clave: data.contraseña
  }

  let requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objFinal)
  }

  return fetch(`${base_url_api}auth`, requestOptions)
    .then(res => {

      if (!res.ok) {
        throw new Error("Error al registrar")
      }
      res.json()
    })
    .then(datos => {
      return datos
    })
}
