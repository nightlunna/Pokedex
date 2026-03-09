import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { funcaoaxios } from '../funcaoaxios';
import * as S from '../styles';

export default function PokemonDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    funcaoaxios.get(`/pokemon/${id}`).then(res => setPokemon(res.data));
  }, [id]);

  if (!pokemon) return <S.Container><p style={{color: 'white'}}>Carregando...</p></S.Container>;

  return (
    <S.Container initial={{ x: 50 }} animate={{ x: 0 }}>
      <S.GlobalStyle />
      {}
      <S.BotaoVoltar onClick={() => navigate(-1)}>← Voltar</S.BotaoVoltar>

      <S.Card $pokemonType={pokemon.types[0].type.name} style={{ cursor: 'default', maxWidth: '500px', margin: '0 auto' }}>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} style={{ width: '200px' }} />
        <h2>{pokemon.name}</h2>
        
        <S.DetalhesInfo>
          <p><strong>ID:</strong> #{pokemon.id}</p>
          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Habilidades:</strong> {pokemon.abilities.map((a: any) => a.ability.name).join(', ')}</p>
        </S.DetalhesInfo>
      </S.Card>
    </S.Container>
  );
}