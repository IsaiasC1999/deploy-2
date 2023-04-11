import './Form.css';
import { useForm } from 'react-hook-form';

const Form = ({ closeRegister }) => {

    const { register, setValue, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="text-center pt-3">
                    <h3>Registrate</h3>
                </div>
                <div className='input-group input-group-sm mb-3'>
                    <label htmlFor="" className='input-group-text'>Nombre:</label>
                    <input
                        className="form-control"
                        type="text"
                        {...register('nombre', {
                            required: true,
                            pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ].{2,30}$/
                        })} />
                    {errors.nombre?.type === 'required' && <p className='form-text px-1'>El campo nombre es requerido</p>}
                </div>
                <div className='input-group input-group-sm mb-3'>
                    <label htmlFor="" className='input-group-text'>Apellido:</label>
                    <input
                        className="form-control"
                        type="text"
                        {...register('apellido', {
                            required: true,
                            pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ].{2,30}$/
                        })} />
                    {errors.apellido?.type === 'required' && <p className='form-text px-1'>El campo apellido es requerido</p>}
                </div>
                <div className='input-group input-group-sm mb-3'>
                    <label className='input-group-text'>Email:</label>
                    <input
                        className="form-control"
                        type="text" {...register('email', {
                            pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                        })} />
                    {errors.email?.type === 'pattern' && <p className='form-text px-1'>El formato del email es incorrecto</p>}
                </div>
                <div className='input-group input-group-sm mb-3'>
                    <label className='input-group-text'>Teléfono:</label>
                    <input className="form-control" type="number" {...register('telefono', {
                        pattern: /^[0-9].{7,10}$/
                    })} />
                </div>
                <div className='input-group input-group-sm mb-3'>
                    <label className='input-group-text'>DNI:</label>
                    <input
                        className="form-control"
                        type="text" {...register('dni', {
                            pattern: /^[0-9].{6,10}$/
                        })} />
                    {errors.dni && <p className='form-text px-1'>Ingresar solo números</p>}
                </div>
                <div className='input-group input-group-sm mb-3'>
                    <label className='input-group-text'>Contraseña:</label>
                    <input
                        className="form-control"
                        type="password" {...register('contraseña', {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
                        })} />
                    {errors.contraseña?.type === 'pattern' && <p className='form-text'>Incluir mayusculas y minusculas, números y un caracter especial. <br /> Caracteres permitidos: @ # $ % !</p>}
                </div>
                <div className='input-group input-group-sm mb-3'>
                    <label className='input-group-text'>Confirmar contraseña:</label>
                    <input
                        className="form-control"
                        type="password" {...register('confirma', {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
                        })} />
                    {/* {errors.confirma?.type === errors.contraseña?.type && <p className='form-text px-1'>Debe repetir la contraseña</p>} */}
                </div>

                {/* <input type="submit" value="Enviar" /> */}
                <div className="input-group mb-3 d-flex justify-content-center">
                    <button className="btn btn-outline-secondary" type="submit" value="Enviar" id="button-addon1" >Registrarte</button>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={closeRegister}>Regresar</button>
                </div>
            </form>
        </div>
    )
}

export default Form