import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';


export const Container2 = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Container1 = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #303030;
    font-family: sans-serif;
  }
`;

export const colors: Record<string, string> = {
  grass: '#78C850', fire: '#F08030', water: '#6890F0',
  bug: '#A8B820', normal: '#A8A878', poison: '#A040A0',
  electric: '#F8D030', ground: '#E0C068', fairy: '#EE99AC',
  psychic: '#F85888',
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const barraInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: 20px auto;
  display: block;
  border-radius: 25px;
  border: 1px solid #ddd;
  outline: none;
`;

export const PokedexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const Card = styled.div<{ $pokemonType: string }>`
  background-color: ${props => colors[props.$pokemonType] || '#757575'};
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  color: black;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  img { width: 130px; }
  h3, h2 { text-transform: capitalize; margin: 10px 0; }
`;

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

export const BotaoVoltar = styled.button`
  background: rgb(255, 1, 191);
  color: white;
  border: 1px solid rgb(255, 128, 191);
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ButtonFavorite = styled(motion.button)<{ $isFavorite: boolean }>`
  background: ${props => props.$isFavorite ? '#2e2e2e' : 'rgba(255, 255, 255, 0.1)'};
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-size: 22px;
`;

export const DetalhesInfo = styled.div`
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.05);
  padding: 15px;
  border-radius: 12px;
  text-align: left;
`;

export const FavoritesSection = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 215, 0, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 215, 0, 0.2);
`;

export const FavTitle = styled.h2`
  color: #ffd700;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FavoritesList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const FavoriteTag = styled.div`
  background: #ffd700;
  color: #000;
  padding: 6px 16px;
  border-radius: 20px;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 14px;
  `;

  export const MainTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 30px;
  `;
  
  export const LoadingText = styled.p`
  color: white;
  text-align: center;
  margin-top: 50px;
`;

export const PokemonImage = styled.img`
  width: 200px;
`;

export const DetailsCard = styled(Card)`
  cursor: default;
  max-width: 500px;
  margin: 0 auto;
`;

export const PokemonTitle = styled.h2`  
  text-transform: capitalize;
`;