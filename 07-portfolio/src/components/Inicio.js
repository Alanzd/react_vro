import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>Soy una Desarrolladora Frontend con más de 3 años de experiencia en el diseño y desarrollo de interfaces web utilizando tecnologías como HTML, CSS, JavaScript, React, Vue y JQuery.</h1>
      <h2>Buscando oportunidades en Madrid para formar parte de un equipo en el que poder seguir desarrollando mis habilidades y conocimientos en el campo del desarrollo frontend. <Link to="/contacto">Contacta conmigo.</Link></h2>
      <section className='last-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>estos son algunosde mis proyectos</p>
        <div className='works'></div>
      </section>
    </div>
  )
}
