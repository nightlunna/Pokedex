import { useEffect, useState } from 'react';
import { funcaoaxios } from '../funcaoaxios';

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await funcaoaxios.get('/pokemon?limit=1000');
        const data = response.data;

        const promises = data.results.map(async (pokemon: any) => {
          const res = await funcaoaxios.get(pokemon.url);
          return res.data;
        });

        const results = await Promise.all(promises);

        setPokemons(results);
      } catch (error) {
        console.error('Erro ao buscar pokémons:', error);
      }
    };

    fetchPokemons();
  }, []);

  const filtered = pokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    pokemons: filtered,
    search,
    setSearch,
  };
}