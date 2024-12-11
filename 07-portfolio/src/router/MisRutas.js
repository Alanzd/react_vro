import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Curriculum } from '../components/Curriculum';
import { Servicios } from '../components/Servicios';
import { Portfolio } from '../components/Portfolio';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Header y navegacion  */}
      <HeaderNav />
      {/* Contenido central */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </section>
      <hr />

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}
