const base_url_api = "http://localhost:4000"


export function postLogin(data) {

  const opction = {
    method: 'POST',
    headers:
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: data })
  }
  // 'http://localhost:4000/login

  const url = "http://localhost:4000/login"
  
  return fetch(`${url}/login`, opction)
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
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
