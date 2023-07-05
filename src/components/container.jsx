import React from 'react';
import ResultsC from './results';
import RecipeC from './recipe';
import style from '../style/style.css';

const ContainerC = ({recipe, setRecipe}) => {

    return (
        <div className="container-components col-lg-10 d-flex justify-content-center row">
            <ResultsC recipe={recipe}/>
            <RecipeC recipe={recipe}/>
        </div>
    )
}

export default ContainerC;