import React from 'react';

// Importar imágenes desde src/assets
import corporativo from '../assets/corporativo.png';
import inventarios from '../assets/inventarios.png';
import aplicaciones from '../assets/aplicaciones.jpg';
import dashboardAdmin from '../assets/dashboardAdmin.png';
import reservas from '../assets/reservas.png';
import blog from '../assets/blog.png';

export const Portafolio = () => {
  return (
    <div className="container my-5 py-5">
      <h2 className="display-5 fw-bold text-center mb-4 animate_animated animate_fadeIn">
        Portafolio de Proyectos <span className="text-primary">Innovadores</span>
      </h2>
      <p className="text-center text-muted mb-5 animate_animated animate_fadeIn">
        Una selección de proyectos que reflejan mi compromiso con la calidad, eficiencia y la innovación tecnológica.
      </p>

      <div className="d-flex flex-column gap-4 animate_animated animate_fadeInUp">

        {/* Proyecto 1 */}
        <div className="card h-auto shadow-sm border-0">
          <img src={corporativo} className="card-img-top" alt="Proyecto Web Corporativo" />
          <div className="card-body">
            <h5 className="card-title text-primary">Proyecto Web Corporativo</h5>
            <p className="card-text text-muted">
              Desarrollo integral de una plataforma e-commerce con funcionalidades avanzadas y optimización de rendimiento.
            </p>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="card h-auto shadow-sm border-0">
          <img src={inventarios} className="card-img-top" alt="Sistema de Gestión Interna" />
          <div className="card-body">
            <h5 className="card-title text-primary">Sistema de Gestión Interna</h5>
            <p className="card-text text-muted">
              Implementación de un sistema de administración de inventario con integración de base de datos en tiempo real.
            </p>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="card h-auto shadow-sm border-0">
          <img src={aplicaciones} className="card-img-top" alt="Aplicación Móvil Híbrida" />
          <div className="card-body">
            <h5 className="card-title text-primary">Aplicación Móvil Híbrida</h5>
            <p className="card-text text-muted">
              Desarrollo de una aplicación móvil híbrida para la gestión de publicaciones en redes sociales.
            </p>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div className="card h-auto shadow-sm border-0">
          <img src={dashboardAdmin} className="card-img-top" alt="Dashboard Administrativo" />
          <div className="card-body">
            <h5 className="card-title text-primary">Dashboard Administrativo</h5>
            <p className="card-text text-muted">
              Plataforma interactiva para análisis de KPIs empresariales con gráficos dinámicos y filtros personalizados.
            </p>
          </div>
        </div>

        {/* Proyecto 5 */}
        <div className="card h-auto shadow-sm border-0">
          <img src={reservas} className="card-img-top" alt="Sistema de Reservas" />
          <div className="card-body">
            <h5 className="card-title text-primary">Sistema de Reservas</h5>
            <p className="card-text text-muted">
              Aplicación web para gestión de turnos y citas, con notificaciones automáticas y panel de administración.
            </p>
          </div>
        </div>

        {/* Proyecto 6 */}
        <div className="card h-auto shadow-sm border-0">
          <img src={blog} className="card-img-top" alt="Blog Tecnológico" />
          <div className="card-body">
            <h5 className="card-title text-primary">Blog Tecnológico</h5>
            <p className="card-text text-muted">
              Desarrollo de un blog optimizado con SEO, CMS personalizado y secciones dinámicas de contenido.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
