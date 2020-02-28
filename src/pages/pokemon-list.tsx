import React, { FunctionComponent } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../hooks/pokemon.hook';
  
const PokemonList: FunctionComponent = () => {
    
    const pokemons = usePokemons();

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