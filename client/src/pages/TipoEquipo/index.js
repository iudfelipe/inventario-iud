import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTipos } from '../../api/helper';

function TipoEquipo() {
  const [tipos, setTipos] = useState([]);
  const setupTiposEquipo = async () => {
    const { data: { data } } = await getTipos();

    setTipos(data);
  }

  useEffect(() => {
    setupTiposEquipo();
  }, []);

  return (
    <main>
      <h1 className="pt-2 pb-3">Tipo de Equipo</h1>
      <div className="row">
        <div className="col">
          <Link to="crear-o-editar"><div className="btn btn-primary">+ Nuevo</div></Link>
        </div>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha de creación</th>
              <th scope="col">Fecha de actualización</th>
            </tr>
          </thead>
          <tbody>
            {!tipos?.length && <p className="mt-2">No hay resultados para mostrar</p>}
            {tipos.map((t) => (
              <tr key={t.id}>
                <th scope="row">{t.id}</th>
                <td>{t.nombre}</td>
                <td>{t.estado ? 'activo' : 'inactivo'}</td>
                <td>{new Date(t.fechaCreacion).toDateString()}</td>
                <td>{new Date(t.fechaActualizacion).toDateString()}</td>
                <td>
                  <Link to={`crear-o-editar/${t.id}`}>
                    <button className="btn btn-primary">Editar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default TipoEquipo;
