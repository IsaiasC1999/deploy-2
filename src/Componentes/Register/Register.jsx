import React from 'react'
import { useForm } from 'react-hook-form'
import Form from '../Form/Form';
// import Form2 from '../Form/Form2';

const Register = ({setOpenRegister}) => {

  // const { register, formState: { errors }, handleSubmit } = useForm();

  const closeRegister =()=>{
    setOpenRegister(false)
  }

  return (
    
      <>
      <Form closeRegister={closeRegister}/>
      </>
        
        
      
   
  )
}

export default Register