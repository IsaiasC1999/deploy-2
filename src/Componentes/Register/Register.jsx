import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from '../Form/Form';
import ModalRegister from '../Modal/ModalRegister';
// import Form2 from '../Form/Form2';

const Register = ({ setOpenRegister }) => {

  // const { register, formState: { errors }, handleSubmit } = useForm();

  const [ isOpen, setIsOpen ] = useState(true)

  const closeRegister = () => {
    setOpenRegister(false)
  }

  return (

    <>
      <Form closeRegister={closeRegister} />

      {/* <ModalRegister isOpen={isOpen}/> */}

    </>




  )
}

export default Register