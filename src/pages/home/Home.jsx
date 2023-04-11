import Register from "../../Componentes/Register/Register";
import style from "./Home.module.css"
import Login from "../../Componentes/Login/Login";
import { useState } from "react";


const Home = () => {

  const [openRegister, setOpenRegister] = useState(false)

  return (
    <>

      <div className={style.conteinerhome}>
        {
          openRegister ?
            <Register
              setOpenRegister={setOpenRegister}
            />
            :
            <Login
              setOpenRegister={setOpenRegister}
            />
        }
      </div>

    </>
  )
}

export default Home