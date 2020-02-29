import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
 
type Params = { id: string };
  
const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
    const [pokemon, setPokemon] = useState<Pokemon|null>(null);
    
    useEffect(() => {
        POKEMONS.forEach(pokemon => {
        if (match.params.id === pokemon.id.toString()) {
            setPokemon(pokemon);
        }
        })
    }, [match.params.id]);
        
    return (
        <div className="container">
            <div className="row justify-content-center">
            { pokemon ? (
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 mt-5">
                        <h2 className="header center">Éditer { pokemon.name }</h2>
                        <hr/>
                        <PokemonForm pokemon={pokemon}></PokemonForm>
                    </div>
                ) : (
                    <h4 className="center">Aucun pokémon à afficher !</h4>
                )}
            </div>
        </div>
    );
    }
  
export default PokemonEdit;