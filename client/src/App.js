import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import TipoEquipo from './pages/TipoEquipo';
import CreateOrEdit from './pages/TipoEquipo/CreateOrEdit';

function App() {
  return (
    <div className="inventario-iud">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/tipo-de-equipo/crear-o-editar/:id' element={<CreateOrEdit />}/>
          <Route path='/tipo-de-equipo/crear-o-editar' element={<CreateOrEdit />}/>
          <Route path="/tipo-de-equipo" element={<TipoEquipo />} />
          <Route path='/estado-de-equipo/crear-o-editar' element={() => <p>Editando equipo</p>}/>
          <Route path="/estado-de-equipo" element={() => <h2>Hello path</h2>} />
          <Route path='/usuarios/crear-o-editar' element={() => <p>Editando equipo</p>}/>
          <Route path="/usuarios" element={() => <h2>Hello path</h2>} />
          <Route path='/marcas/crear-o-editar' element={() => <p>Editando equipo</p>}/>
          <Route path="/marcas" element={() => <h2>Hello path</h2>} />
          <Route path="/inventario" element={() => <h2>Hello path</h2>} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
