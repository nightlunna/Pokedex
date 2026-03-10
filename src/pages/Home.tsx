import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokemonContext } from '../context/pokemonContext';
import { funcaoaxios } from '../funcaoaxios';
import * as S from '../styles';

export default function Home() {
  const navigate = useNavigate();
  const { favorites } = usePokemonContext();
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    funcaoaxios.get('/pokemon?limit=1000').then(async (res) => {
      const listacompleta = await Promise.all(
        res.data.results.map(async (p: any) => {
          const detalhe = await funcaoaxios.get(`/pokemon/${p.name}`);
          return detalhe.data;
        })
      );
      setPokemons(listacompleta);
    });
  }, []);

  useEffect(() => {
    console.log(pokemons)
  }, [pokemons])

  const filteredPokemons = pokemons.filter(p => p.name.includes(search.toLowerCase()));

  return (
    <S.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <S.GlobalStyle />
      <S.MainTitle>Pokédex</S.MainTitle>

      {favorites.length > 0 && (
        <S.FavoritesSection>
          <S.FavTitle>⭐ Meus Favoritos</S.FavTitle>
          <S.FavoritesList>
            {favorites.map(fav => (
              <S.FavoriteTag key={fav.id} onClick={() => navigate(`/details/${fav.id}`)}>
                #{fav.id.toString().padStart(3, '0')} {fav.name}
              </S.FavoriteTag>
            ))}
          </S.FavoritesList>
        </S.FavoritesSection>
      )}

      <S.barraInput
        placeholder="Buscar na lista geral..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <S.PokedexGrid>
        {filteredPokemons.map((p) => (
          <S.Card
            key={p.id}
            $pokemonType={p.types[0].type.name}
            onClick={() => navigate(`/details/${p.id}`)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={p.sprites.other['official-artwork'].front_default}
              alt={p.name}
            />
            <h2>{p.name}</h2>
          </S.Card>
        ))}
      </S.PokedexGrid>
    </S.Container>
  );
}