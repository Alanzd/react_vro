import React, { useState } from 'react'
import { useEffect } from 'react';
import { Edit } from './Edit';

// me llega por defecto del padre un objeto que tengo que desestructurar
// llegara props.listState y props.setListState
// el estado ahora pertenece al componente padre App.js
export const List = ({listState, setListState}) => {

// al hacer onclick en edit le paso el id de la pelicula(setEdit)
  const [edit, setEdit] = useState(0);

 // es el primer metodo que se carga cuando llamo a un componente
  useEffect(()=> {
    getMovies();
  // el array vacio indica que se va a ejecutar una vez solamente
  }, [])

 // const [listState, setListState] = useState([]);
  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'));
    setListState(movies);
   // para poder utilizarlo en el metodo deleteMovie tengo que añadir return
   return movies
  }

  const deleteMovie = (id) => {
    //conseguir peliculas almacenadas
    let moviesStoraged = getMovies()

    /* eliminar la que quiero borrar con el metodo filter:recorro cada peli
    y creo un array solo con las pelis que cumplan una condicion */
    let newMoviesArray = moviesStoraged.filter(movie => movie.id !== parseInt(id))

    // actualizar listState
    setListState(newMoviesArray)

    // actualizar el localStorage
     localStorage.setItem('movies', JSON.stringify(newMoviesArray))

  }

  return (
    <>
      { listState != null ? 
        listState.map( movie => {
          return (
            <article className="movie-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button className="edit" onClick={() => setEdit(movie.id)}>Edit</button>
              <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
              {/*aqui va a aparecer el formulario de editar*/}
              {edit === movie.id && (
                //paso las props movie, getMovie, setEdit y setListState
                <Edit 
                  movie={movie} 
                  getMovies={getMovies}
                  setEdit={setEdit}
                  setListState={setListState}/>
              ) }
            </article>
          );
        }): <h2>NO MOVIES</h2>
      }
    </>
  )
}
