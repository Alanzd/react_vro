import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Soy una <strong>Desarrolladora Frontend</strong> con más de 3 años de experiencia en el diseño y desarrollo de interfaces web utilizando tecnologías como HTML, CSS, JavaScript, React, Vue y JQuery.</h1>
      <h2 className='title'>Buscando oportunidades en Madrid para formar parte de un equipo en el que poder seguir desarrollando mis habilidades y conocimientos en el campo del desarrollo frontend. <Link to="/contacto">Contacta conmigo.</Link></h2>
      <section className='last-works'>
      <h1>Algunos de mis proyectos</h1>
        <ListadoTrabajos limite="2"/>
      </section>
    </div>

  )
}


 