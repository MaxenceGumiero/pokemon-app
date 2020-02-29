import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
  
const PageNotFound: FunctionComponent = () => {
  
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mt-5 text-center">
                    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page non trouvée"/>
                    <hr/>
                    <h1 className="mb-0">Cette page n'existe pas !</h1> 
                    <Link to="/" className="btn teal white-text btn-block">
                        Retour
                    </Link>
                </div>
            </div>
        </div>
    );
}
  
export default PageNotFound;