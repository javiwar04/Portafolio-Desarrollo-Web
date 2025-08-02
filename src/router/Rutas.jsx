import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Portafolio } from '../components/Portafolio';
import { Curriculum } from '../components/Curriculum';  
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../layout/HeaderNav';
import { Inicio } from '../components/Inicio';
import { Footer } from '../layout/Footer';
import { Servicios } from '../components/Servicios';

export const Rutas = () => {
  return (
    <BrowserRouter>
      {/* Header de navegación */}
      <HeaderNav />

      {/* Contenido de las rutas */}
      <section className='content'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </section>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};
