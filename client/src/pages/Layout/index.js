import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 gx-0">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tipo-de-equipo">Tipo de Equipo</Link></li>
            <li><Link to="/estado-de-equipo">Estado de Equipo</Link></li>
            <li><Link to="/usuarios">Usuarios</Link></li>
            <li><Link to="/marcas">Marcas</Link></li>
            <li><Link to="/inventario">Inventario</Link></li>
          </ul>
        </div>
        <div className="col-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
