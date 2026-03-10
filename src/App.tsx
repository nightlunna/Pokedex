import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from './context/pokemonContext'; 
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <PokemonProvider> {}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;
