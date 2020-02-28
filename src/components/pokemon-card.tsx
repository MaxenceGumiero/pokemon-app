import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';

type Props = {
    pokemon: Pokemon,
    borderColor?: string
}

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#00C851'}) => {
    
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#9e9e9e');
    }

    return(
        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={pokemon.id} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card-border jumbotron p-3 animated fadeInUp" style={{ borderColor: color }}>
                <div className="row justify-content-center">
                    <img className="w-50" src={pokemon.picture} alt={pokemon.name}/>
                </div>
                <hr/>
                <h2 className="text-center">{pokemon.name}</h2>
                <hr/>
                <p className="text-center">Ajouté le {formatDate(pokemon.created)}</p>
                <div className="text-center">
                    {pokemon.types.map(type => (
                        <span key={type} className={formatType(type)}>{type}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;