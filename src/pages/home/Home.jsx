import Register from "../../Componentes/Register/Register";
import style from "./Home.module.css"
import Login from "../../Componentes/Login/Login";
import { useState } from "react";
import ModalSuccess from "../../Componentes/Modal/ModalSuccess";


const Home = () => {

  const [openRegister, setOpenRegister] = useState(false)

  const [success, setSuccess] = useState(true)

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
      {/* {
        success ?
          <ModalSuccess success={success} setSuccess={setSuccess} />
          :
          ""
      } */}
    </>
  )
}

export default Home