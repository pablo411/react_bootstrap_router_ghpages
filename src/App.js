import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      
      <div className="App-body">
       <Routes>
        <Route path="/" element={<Home />} />
        
       </Routes>
      </div>
    </div>
  );
}

export default App;
