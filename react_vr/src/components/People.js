import React from 'react'
import { useParams } from 'react-router-dom/dist';

export const People = () => {
    // para recoger parametros que me llegan de la url:
    // uso la desestructuracion de objetos
 const {nombre} =  useParams()
 
  return (
    <div>
        <h1>Persona</h1>
        <p>Pagina de persona: {nombre}</p>
    </div>
  )
}