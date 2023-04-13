import './Form.css';
import { useForm } from 'react-hook-form';

const Form = ({ closeRegister }) => {

    const { register, setValue, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        
            <form className='register' action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="text-center pt-3">
                    <h3 className='title-form'>Registrate</h3>
                </div>
                <div className='inputs'>
                    <label htmlFor="" className=''>Nombre:</label>
                    <input
                        className=""
                        type="text"
                        {...register('nombre', {
                            required: true,
                            pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ].{2,30}$/
                        })} 
                    />
                    {errors.nombre?.type === 'required' && <p className='errors'>El campo nombre es requerido</p>}
                </div>
                <div className='inputs'>
                    <label htmlFor="" className=''>Apellido:</label>
                    <input
                        className=""
                        type="text"
                        {...register('apellido', {
                            required: true,
                            pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ].{2,30}$/
                        })}
                    />
                    
                    {errors.apellido?.type === 'required' && <p className='errors'>El campo apellido es requerido</p>}
                </div>
                <div className='inputs'>
                    <label className=''>Email:</label>
                    <input
                        className=""
                        type="text" {...register('email', {
                            pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                        })} />
                    {errors.email?.type === 'pattern' && <p className='errors'>El formato del email es incorrecto</p>}
                </div>
                <div className='inputs'>
                    <label className=''>Teléfono:</label>
                    <input className="" type="number" {...register('telefono', {
                        pattern: /^[0-9].{7,10}$/,
                        required:true
                    })} />
                    {errors.telefono?.type === "required" && <p className='errors'>El campo telefono es requerido</p>}
                </div>
                <div className='inputs'>
                    <label className=''>DNI(sin puntos):</label>
                    <input
                        className=""
                        type="number" {...register('dni', {
                            required : true,
                            pattern: /^[0-9].{6,10}$/
                        })} />
                    {/* {errors.dni?.type === "pattern" && <p className='errors'></p>} */}
                    {errors.dni?.type === "required" && <p className='errors'>El campo dni es requerido</p>}
                     
                </div>
                <div className='inputs'>
                    <label className=''>Contraseña:</label>
                    <input
                        className=""
                        type="password" {...register('contraseña', {
                              required:true ,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
                        })} />

                    {errors.contraseña?.type === 'pattern' && <p className='errors'>Incluir mayusculas y minusculas, números y un caracter especial. <br /> Caracteres permitidos: @ # $ % !</p>}
                    {errors.contraseña?.type === 'required' && <p className='errors'>Este campo es requerido</p>}    
                </div>
                <div className='inputs'>
                    <label className=''>Confirmar contraseña:</label>
                    <input
                        className=""
                        type="password" {...register('confirma', {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
                        })} />
                </div>
                {/* {errors.confirma?.type === errors.contraseña?.type && <p className='errors'>Debe repetir la contraseña</p>} */}

                {/* <input type="submit" value="Enviar" /> */}
                <div className="input-group mb-3 d-flex justify-content-center mt-3">
                    <button className="btn btn-primary font-weight-bold " type="submit" value="Enviar" id="button-addon1" >Registrarte</button>
                    <button className="btn btn-primary mt-1 font-weight-bold" type="button" id="button-addon2" onClick={closeRegister}>Regresar</button>
                </div>
            </form>
        
    )
}

export default Form