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


export const BotaoVoltar = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background-color: #ffa0d4;
`;

export const DetalhesInfo = styled.div`
  margin-top: 20px;
  text-align: left;
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 15px;
  line-height: 1.6;
`;
