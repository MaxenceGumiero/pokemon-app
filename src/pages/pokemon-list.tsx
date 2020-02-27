import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
  
const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);
    
    return (
        <div className="container">
            <h1 className="mt-3">Pokédex</h1>
            <hr/>
            <p>Il y a {pokemons.length} Pokémons dans le Pokédex !</p>
            <hr/>
            <div className="list-unstyled row">
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
            </div>
        </div>
    );
}
  
export default PokemonList;