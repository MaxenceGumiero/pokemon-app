import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';

type Params = { id: string };

const PokemonDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
    const [pokemon, setPokemon] = useState<Pokemon|null>(null);
    
    useEffect(() => {
        POKEMONS.forEach(pokemon => {
            if (match.params.id === pokemon.id.toString()) {
            setPokemon(pokemon);
            }
        })
    }, [match.params.id]);

    return(
        <div className="container">
            <div className="row justify-content-center">
            { pokemon ? (
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mt-5" key={pokemon.id}>
                <div className="card jumbotron p-3 animated fadeInLeft">
                    <div className="row justify-content-center">
                        <img className="w-50" src={pokemon.picture} alt={pokemon.name}/>
                    </div>
                    <hr/>
                    <h2 className="text-center">{pokemon.name}</h2>
                    <p className="text-center"><strong><Link className="teal-text" to={`/pokemons/edit/${pokemon.id}`}>Éditer</Link></strong></p>
                    <hr/>
                    <p className="text-center">Ajouté le {formatDate(pokemon.created)}</p>
                    <div className="text-center">
                        {pokemon.types.map(type => (
                            <span key={type} className={formatType(type)}>{type}</span>
                        ))}
                    </div>
                    <br/>
                    <p className="text-center">PV - {pokemon.hp}</p>
                    <p className="text-center">Dégâts - {pokemon.cp}</p>
                    <hr/>
                    <Link to="/" className="btn text-white teal btn-block">Retour</Link>
                </div>
            </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <p className="text-center">Ce Pokémon n'existe pas!</p>
                        <br/>
                        <button className="btn teal btn-block">
                            <Link to="/">Retour</Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default PokemonDetail;