import React, { useState } from 'react';
import { SaveinStorage } from '../helpers/SaveInStorage';

export const Create = ({setListState}) => {
  const title = "Create movie";
  const [movieState, setMovieState] = useState({
    title: '',
    description: '',    
  })

  const getData = e => {
    e.preventDefault();

  // Conseguir datos del formulario
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

  //crear objeto de la pelicula a guardar
    let movie = {
      id: new Date().getTime(),
      title,
      description
    }
  // Guardar estado
    setMovieState(movie)

  /* actualizo el estado del listado principal, agrego la nueva peli al
  estado que ya existe */

  // agrego la nueva peli al listado que ya existe y que me viene de app.js, 
  // devuelvo un array con todos los elementos que haya (...elements) mas el nuevo elem (movie) que se agrega al final
    setListState(elements => {
      return !Array.isArray(elements) ? [movie] : [...elements, movie];
    })

  // guardar en localhost
    SaveinStorage('movies', movie);

  }

  return (
    <div className="add">
      <h3 className="title">{title}</h3>
      {(movieState.title && movieState.description) && "HAS CREADO LA PELICULA:"+ (movieState.title) }
      <form onSubmit={getData}>
        <input id="title"
          type="text"
          name="title"
          placeholder="Title" />
        <textarea name="description"
          id="description"
          placeholder="Description"
          cols="30" rows="10">
        </textarea>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}
