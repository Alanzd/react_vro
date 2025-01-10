import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1>Contacto</h1>
      <form className='contact' action="mailto:ana@ana.es">
        <input type='text' placeholder='Nombre'/>
        <input type='text' placeholder='Apellidos'/>
        <input type='text' placeholder='email'/>
        <textarea placeholder='Motivo de contacto'></textarea>
        <input type='submit' value="Enviar"/>
      </form>
    </div>
  )
}
