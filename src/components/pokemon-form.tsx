import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
  
type Props = {
  pokemon: Pokemon
};

type Field = {
    value?: any,
    error?: string,
    isValid?: boolean,
}

type Form = {
    name: Field,
    hp: Field,
    cp: Field,
    types: Field,
}
  
const PokemonForm: FunctionComponent<Props> = ({pokemon}) => {
  
    const [form, setForm] = useState<Form>({
        name: {value: pokemon.name, isValid: true},
        hp: {value: pokemon.hp, isValid: true},
        cp: {value: pokemon.cp, isValid: true},
        types: {value: pokemon.types, isValid: true},
    })

    const history = useHistory();

    const types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];

    const hasType = (type: string): boolean => {
        return form.types.value.includes(type);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = {[fieldName]: {value: fieldValue}}
        setForm({...form, ...newField});
    }

    const validateForm = () => {
        let newForm: Form = form;  
        if(!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
          const errorMsg: string = 'Le nom du pokémon est requis (1-25).';
          const newField: Field = { value: form.name.value, error: errorMsg, isValid: false };
          newForm = { ...newForm, ...{ name: newField } };
        } else {
          const newField: Field = { value: form.name.value, error: '', isValid: true };
          newForm = { ...newForm, ...{ name: newField } };
        }
        if(!/^[0-9]{1,3}$/.test(form.hp.value)) {
          const errorMsg: string = 'Les points de vie du pokémon sont compris entre 0 et 999.';
          const newField: Field = {value: form.hp.value, error: errorMsg, isValid: false};
          newForm = { ...newForm, ...{ hp: newField } };
        } else {
          const newField: Field = { value: form.hp.value, error: '', isValid: true };
          newForm = { ...newForm, ...{ hp: newField } };
        }
        if(!/^[0-9]{1,2}$/.test(form.cp.value)) {
          const errorMsg: string = 'Les dégâts du pokémon sont compris entre 0 et 99';
          const newField: Field = {value: form.cp.value, error: errorMsg, isValid: false};
          newForm = { ...newForm, ...{ cp: newField } };
        } else {
          const newField: Field = { value: form.cp.value, error: '', isValid: true };
          newForm = { ...newForm, ...{ cp: newField } };
        }
        setForm(newForm);
        return newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
      }
    
      const isTypesValid = (type: string): boolean => {
        if (form.types.value.length === 1 && hasType(type)) {
          return false;
        } 
        if (form.types.value.length >= 3 && !hasType(type)) { 
          return false; 
        }  
        return true;
      }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            history.push(`/pokemons/${pokemon.id}`);
        }
    }

    const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        const checked = e.target.checked;
        let newField: Field;
        if (checked) {
            const newTypes: string[] = form.types.value.concat([type]);
            newField = { value: newTypes };
        } else {
            const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type);
            newField = { value: newTypes };
        }
        setForm({...form, ...{ types: newField }});
    }
    
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="jumbotron pt-3 pb-5"> 
                <div className="row justify-content-center">
                    <img className="w-50" src={pokemon.picture} alt={pokemon.name} />
                </div>
                <hr/>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e => handleInputChange(e)}></input>
                    <br/>
                    {form.name.error &&
                    <div className="alert alert-danger">
                        {form.name.error}
                    </div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="hp">Point de vie</label>
                    <input id="hp" name="hp" type="number" className="form-control" value={form.hp.value} onChange={e => handleInputChange(e)}></input>
                    <br/>
                    {form.hp.error &&
                    <div className="alert alert-danger">
                        {form.hp.error}
                    </div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="cp">Dégâts</label>
                    <input id="cp" name="cp" type="number" className="form-control" value={form.cp.value} onChange={e => handleInputChange(e)}></input>
                    <br/>
                    {form.cp.error &&
                    <div className="alert alert-danger">
                        {form.cp.error}
                    </div>
                    }
                </div>
                <div className="form-group">
                    <label>Types</label>
                    <div className="row">
                    {types.map(type => (
                        <div key={type} className="col-3">
                        <label>
                            <input id={type} type="checkbox" className="filled-in mr-2" value={type} disabled={!isTypesValid(type)} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
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