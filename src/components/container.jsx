import React from 'react';
import ResultsC from './results';
import RecipeC from './recipe';
import '../style/style.css';
import {useState} from 'react'

const ContainerC = ({recipe}) => {

    const [recipeToPass, setRecipeToPass] = useState('')

    return (
        <div className="container-components col-lg-11 d-flex justify-content-center row">
            <ResultsC recipe={recipe} setRecipeToPass={setRecipeToPass}/>
            <RecipeC  recipe={recipe} recipeToPass={recipeToPass} />
        </div>
    )
}

export default ContainerC;