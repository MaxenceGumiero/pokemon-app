import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';

type Props = {
    pokemon: Pokemon,
    borderColor?: string
}

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#0d47a1'}) => {
    
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#4285F4');
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
                <p>{pokemon.created.toString()}</p>
            </div>
        </div>
    );
}

export default PokemonCard;