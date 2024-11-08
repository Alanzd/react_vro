import React, { useState, listState } from 'react';

// con la desestructuracion de objetos obtengo lisState y setListState
// viene de App.js
export const Search = ({listState, setListState}) => {

  const [search, setSearch] = useState("")
  const [notFinded, setNotFinded] = useState(false)
  const searchMovie = (e) => {

  //creo estado y lo actualizo
    setSearch(e.target.value);

  // filtro el listado para buscar coincidencias
    let finded_movies = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })

  // compruebo si hay resultado y si no lo hay devuelvo a pelis encontradas el listado de peliculas guardadas
    if (search.length <= 1 || search.length <= 0){
      finded_movies = JSON.parse(localStorage.getItem("movies"));
      setNotFinded(true)
    } else {
      setNotFinded(false)
    }

  // si lo hay actualizar el estado del listado principal con lo filtrado (setListState)
  setListState(finded_movies)
  }
    
  return (
    <div className="search">
      <h3 className="title">Search:{search}</h3>
      {notFinded == true && (
        <span className='not_finded'>No hay coincidencias</span>
      )}
      <form action="">
        <input 
          type="text" 
          name="search" 
          id="search_field"
          autoComplete='off'
          value={search}
          onChange={searchMovie}/>
        <button>Search</button>
      </form>
  </div>
  )
}
