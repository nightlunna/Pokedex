import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { funcaoaxios } from '../funcaoaxios';
import * as S from '../styles';
import { usePokemonContext } from '../context/pokemonContext';

export default function PokemonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = usePokemonContext();
  const [pokemon, setPokemon] = useState<any>(null);


  useEffect(() => {
    funcaoaxios.get(`/pokemon/${id}`).then(res => setPokemon(res.data));
  }, [id]);


  if (!pokemon) {
    return (
      <S.Container>
        <p style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Carregando...</p>
      </S.Container>
    );
  }

  const favoritado = isFavorite(Number(id));

  return (
    <S.Container initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <S.GlobalStyle />

      { }
      <S.HeaderDetails>
        <S.BotaoVoltar onClick={() => navigate(-1)}>← Voltar</S.BotaoVoltar>

        <S.ButtonFavorite
          $isFavorite={favoritado}
          onClick={() => toggleFavorite({ id: pokemon.id, name: pokemon.name })}
          whileTap={{ scale: 0.9 }}
        >
          {favoritado ? '⭐' : '☆'}
        </S.ButtonFavorite>
      </S.HeaderDetails>

      { }
      <S.Card $pokemonType={pokemon.types[0].type.name} style={{ cursor: 'default', maxWidth: '500px', margin: '0 auto' }}>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          style={{ width: '200px' }}
        />
        <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>

        { }
        <S.DetalhesInfo>
          <p><strong>ID:</strong> #{pokemon.id.toString().padStart(3, '0')}</p>
          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Habilidades:</strong> {pokemon.abilities.map((a: any) => a.ability.name).join(', ')}</p>
        </S.DetalhesInfo>
      </S.Card>

    </S.Container>
  );
}