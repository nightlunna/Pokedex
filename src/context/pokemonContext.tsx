import { createContext, useState, useContext, type ReactNode } from 'react';

interface FavoritePokemon {
  id: number;
  name: string;
}

interface PokemonContextData {
  favorites: FavoritePokemon[];
  toggleFavorite: (pokemon: FavoritePokemon) => void;
  isFavorite: (id: number) => boolean;
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData);

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

  const toggleFavorite = (pokemon: FavoritePokemon) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === pokemon.id);
      if (exists) {
        return prev.filter((p) => p.id !== pokemon.id); 
      }
      return [...prev, pokemon];
    });
  };

  const isFavorite = (id: number) => favorites.some((p) => p.id === id);

  return (
    <PokemonContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemonContext = () => useContext(PokemonContext);