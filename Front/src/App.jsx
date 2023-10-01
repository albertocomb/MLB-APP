import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa las dependencias de React Router
import Navigator from '../components/navbar/navbar';
import Home from '../components/content/Home';
import News from '../components/content/News'; // Importa tu componente de la página de noticias
import Scores from '../components/content/Scores'; // Importa tu componente de la página de puntajes
import Players from '../components/content/Players';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Scores" element={<Scores />} />
          <Route path="/Players" element={<Players />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
