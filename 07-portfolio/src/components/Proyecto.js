import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

  const [proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(() => {
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
    setProyecto(proyecto[0])
    // paso el indice 0 y asi me quedo con el unico proyecto de esa variable filtrada    
  }, [])
  //corchete vacio para que se filtre  solo una vez al cargar el componente


  return (
    <div className='page page-work'>
      <div className="mask">
        <img src={"/images/" + proyecto.id + ".png"} />
      </div>
      <h1 className="heading">{proyecto.name}</h1>
      
      <h3>{proyecto.tecnologias}</h3>
      <a href={"https://" + proyecto.url} target='_blank'>Ir al proyecto</a>


    </div>
  )
}
