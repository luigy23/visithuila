import React from 'react'
import estilo from '../Styles/login.module.css'

const Login = () => {
  return (
    <main className={estilo.hero}>
        <h3 className='text-2xl font-semibold bg-verdeH-800 px-10 py-1 rounded-full rounded-b-none shadow-2xl'>Ingresa</h3>
        <div className='w-80  bg-white rounded-lg shadow-2xl'>
            <form className='flex flex-col gap-4 p-10 text-zinc-900'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' className='border border-gray-400 rounded-lg p-2' />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' className='border border-gray-400 rounded-lg p-2' />
                <button className='bg-verdeH-500 text-white rounded-lg p-2'>Iniciar Sesión</button>
                {/* añadimos un boton con estilo secundario (fantasma) para el registro: */}
                <button className='bg-transparent text-verdeH-500 border border-verdeH-500 rounded-lg p-2'>Registrarse</button>
            </form>

        </div>
    </main>
  )
}

export default Login