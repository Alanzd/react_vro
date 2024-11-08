import React, { useState } from 'react';
        

export const Edit = ({movie, getMovies, setEdit, setListState}) => {
    const component_title = 'Editar pelicula';

    const saveEdition = (e, id) => {
        e.preventDefault();

        // Conseguir el target del evento
        let target = e.target;
        
        // consigo las peliculas almacenadas con el param getMovies que me viene desde list.js
       
       let movies_storaged = getMovies();
        // buscar el indice del objeto de la pelicula por el id para actualizarla
       // solo si se cumple que el id de la pelicula en movies_storaged es igual al id 
       // que paso por parametro en el click y que quiero modificar
       const index = movies_storaged.findIndex(movie => movie.id === id);

       // crear nuevo objeto con ese index
       let movie = {
        id,
        title: target.title.value,
        description:target.description.value,
       }
       // modifico el indice de las peliculas almacenadas
       movies_storaged[index] = movie;

       // guardar el nuevo array de obj en el local storage y actualizar estados
       localStorage.setItem('movies', JSON.stringify(movies_storaged))
       setEdit(index);
       setListState(movies_storaged)
    }
    return (
        <div className='edit_form'>
            <h3 className='title'>{component_title}</h3>
            <form onSubmit={ e => saveEdition(e, movie.id)}>
                <input 
                    type='text'
                    name='title'
                    className='title_edited'
                    defaultValue={movie.title}/>
                <textarea 
                    name='description'  
                    defaultValue={movie.description}
                    className='modified_description'/>
                <input 
                    type='submit'  
                    className='edit' 
                    value="update"/>
            </form>
        </div>
    )
}
