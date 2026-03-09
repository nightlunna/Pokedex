import { useNavigate } from 'react-router-dom';
import * as S from '../styles';
import { usePokemons } from '../hooks/usarPokemons';

export default function Home() {
  const { pokemons, search, setSearch } = usePokemons();
  const navigate = useNavigate();

  return (
    <S.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <S.GlobalStyle />
      <h1 style={{ textAlign: 'center', color: 'white' }}>Pokédex</h1>
      
      <S.barraInput
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <S.PokedexGrid>
        {pokemons.map((poke) => (
          <S.Card 
            key={poke.id} 
            $pokemonType={poke.types[0].type.name}
            onClick={() => navigate(`/details/${poke.id}`)}
          >
            <img src={poke.sprites.other['official-artwork'].front_default} alt={poke.name} />
            <h3>{poke.name}</h3>
            <p>#{poke.id.toString().padStart(3, '0')}</p>
          </S.Card>
        ))}
      </S.PokedexGrid>  
    </S.Container>
  );
}