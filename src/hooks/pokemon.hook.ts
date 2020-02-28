import { useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';

const usePokemons = (): Pokemon[] => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return pokemons;
}

export default usePokemons;
    