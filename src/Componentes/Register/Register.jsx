import React from 'react'
import { useForm } from 'react-hook-form'
import Form from '../Form/Form';

const Register = ({setOpenRegister}) => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const closeRegister =()=>{
    setOpenRegister(false)
  }

  return (
    <div className='container'>
      <div className='d-flex border justify-content-center align-items-center'>
        <div className="border border-3">
          <Form closeRegister={closeRegister}/>
        </div>
      </div>
    </div>
  )
}

export default Register