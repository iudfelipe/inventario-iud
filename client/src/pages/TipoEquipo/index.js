import { Link } from 'react-router-dom';

function TipoEquipo() {
  return (
    <main>
      <h1 className="pt-2 pb-3">Tipo de Equipo</h1>
      <div className="row">
        <div className="col">
          <Link to="crear-o-editar" className="btn-primary">+ Nuevo</Link>
        </div>
      </div>
      <div className="row">
        {/* here goes the list of equipo types */}
      </div>
    </main>
  )
}

export default TipoEquipo;
