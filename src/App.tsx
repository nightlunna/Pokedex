import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <Router>
      <Routes>
        {}
        <Route path="/" element={<Home />} />
        
        {}
        <Route path="/details/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;