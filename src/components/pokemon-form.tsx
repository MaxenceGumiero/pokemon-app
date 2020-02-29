import React, { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
  
type Props = {
  pokemon: Pokemon
};
  
const PokemonForm: FunctionComponent<Props> = ({pokemon}) => {
  
    const types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
    
    return (
        <form>
            <div className="jumbotron pt-3 pb-5"> 
                <div className="row justify-content-center">
                    <img className="w-50" src={pokemon.picture} alt={pokemon.name} />
                </div>
                <hr/>
                <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input id="name" type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                <label htmlFor="hp">Point de vie</label>
                <input id="hp" type="number" className="form-control"></input>
                </div>
                <div className="form-group">
                <label htmlFor="cp">Dégâts</label>
                <input id="cp" type="number" className="form-control"></input>
                </div>
                <div className="form-group">
                <label>Types</label>
                <div className="row">
                {types.map(type => (
                    <div key={type} className="col-3">
                    <label>
                        <input id={type} type="checkbox" className="filled-in mr-2"></input>
                        <span>
                            <p className={formatType(type)}>{ type }</p>
                        </span>
                    </label>
                    </div>
                ))}
                </div>
                </div>
                <div className="card-action center">
                    <button type="submit" className="btn teal white-text btn-block">Valider</button>
            </div>
            </div>
        </form>
    );
};
   
export default PokemonForm;