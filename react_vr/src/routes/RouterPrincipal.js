import React from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Items } from '../components/Items'
import { Contact } from '../components/Contact'
import { Error } from '../components/Error'
import { People } from '../components/People'


export const RouterPrincipal = () => {
    // retorno un componente que tenga la config de las rutas
    return (
        // todas las rutas tienen que estar englobadas dentro de BrowserRouter
        <BrowserRouter>

            <h1>Cabecera</h1>
            <hr />
            <nav>
                <ul>
                    <li>
                        {/* esta es la manera de hacer enlaces en React */}
                        <NavLink
                            to="/inicio"
                            className= {({isActive})=> { return isActive ? "activated" : ''}}>
                            Inicio
                        </NavLink>
                    </li>
                    
                    <li>
                        {/* la clase navigate tiene una condicion */}
                        <NavLink
                            to="/items"
                            className= {({isActive})=> { return isActive ? "activated" : ''}}>
                            Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className= {({isActive})=> { return isActive ? "activated" : ''}}>
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/people"
                            className= {({isActive})=> { return isActive ? "activated" : ''}}>
                            Persona
                        </NavLink>
                    </li>

                </ul>
            </nav>
            <hr />
            <section className='contenido-principal'>
                {/* y todas las rutas definidas dentro de la etiqueta Routes */}
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/items' element={<Items />} />
                    <Route path='/contact' element={<Contact />} />

                    {/* puedo añadir params a la url  */}
                    <Route path='/people/:nombre' element={<People />} />

                    {/* el asterisco es cualquier ruta que no esté definida
                si hay varias lineas tengo que meterlo en parentesis y un fragment vacio o div*/}
                    {/* <Route path='*' element={(<h1>Error 404, la página no existe</h1>)} /> */}
                    <Route path='*' element={<Error />} />
                </Routes>
            </section>
            <hr />
            <footer>
                Pie de página
            </footer>
        </BrowserRouter>
    )
}
