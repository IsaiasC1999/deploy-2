import './Form.module.css';
import { useForm } from 'react-hook-form';

const Form = () => {

    const { register, setValue, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = () => {
        console.log(register)
    }

    return (
        <div className='form'>
            <form action="">
                <h3>Registrar</h3>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text"
                        {
                        ...register('nombre', {
                            required: true,
                            minLength: 3
                        })
                        }
                    />
                    {errors.nombre?.type === 'required' && <p>El campo nombre es obligatorio</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener más caracteres</p>}
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" 
                        {
                            ...register('apellido',{
                                required:true,
                                minLength: 3
                            })
                        }
                    />
                    {errors.apellido?.type === 'required' && <p>El campo apellido es obligatorio</p>}
                    {errors.apellido?.type === 'minLength' && <p>El campo debe tener al menos 3 letras</p>}
                </div>
                <div>
                    <label htmlFor="">DNI</label>
                    <input type='text' 
                        {
                            ...register('dni',{
                                required: true,
                                minLength: 7
                            })
                        }
                    />
                    {errors.dni?.type === 'required' && <p>El campo DNI es obligatorio</p>}
                    {errors.dni?.type === 'minLength' && <p>El campo debe tener al menos 8 numeros</p>}
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type='number' 
                        {
                            ...register('number',{
                                required: true,
                                minLength: 7
                            })
                        }
                    />
                    {errors.number?.type === 'required' && <p>El campo Telefono es obligatorio</p>}
                    {errors.number?.type === 'minLength' && <p>El campo debe tener al menos 8 numeros</p>}
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type='email' 
                        {
                            ...register('email',{
                                pattern: "",
                                required: true,
                                minLength: 7
                            })
                        }
                    />
                    {errors.email?.type === 'required' && <p>El campo Email es obligatorio</p>}
                    {errors.email?.type === 'minLength' && <p>El campo debe tener al menos 8 numeros</p>}
                </div>
                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type='password' 
                        {
                            ...register('pwd',{
                                required: true,
                                minLength: 7
                            })
                        }
                    />
                    {errors.pwd?.type === 'required' && <p>El campo Contraseña es obligatorio</p>}
                    {errors.pwd?.type === 'minLength' && <p>El campo debe tener al menos 8 numeros</p>}
                </div>
                <div>
                    <label htmlFor="">Confirmar Contraseña</label>
                    <input type='password' 
                        {
                            ...register('cpwd',{
                                required: true,
                                minLength: 7
                            })
                        }
                    />
                    {errors.cpwd?.type === 'required' && <p>El campo es obligatorio</p>}
                    {errors.cpwd?.type === 'minLength' && <p>El campo debe tener al menos 8 numeros</p>}
                </div>
                <button onClick={handleSubmit(onSubmit)}>Enviar</button>
            </form>
        </div>
    )
}

export default Form