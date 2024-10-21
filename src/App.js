import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header';
import Main from './Componentes/Main.js';
import InformacionDeContacto from './Componentes/InformacionDeContacto.js';
import Conciertos from './PaginasEnlazadas/Conciertos.js';
import Contactos from './PaginasEnlazadas/Contacto.js';
import Discordia from './PaginasEnlazadas/Discordia.js';




function App() {
  return (
  <div className="App">
      <div>
        <Header />
      </div> 
      <div className="App-body">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/conciertos" element={<Conciertos />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/discordia" element={<Discordia />} />
        </Routes>
      </div>
      <div className='footer'>
       <InformacionDeContacto />
      </div>
      
  </div>
  );
}

export default App;
