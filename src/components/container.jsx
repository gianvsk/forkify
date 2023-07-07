import React from 'react';
import ResultsC from './results';
import RecipeC from './recipe';
import '../style/style.css';
import {useState , useEffect} from 'react'
import NavbarC from './navbar';

const ContainerC = () => {

    const [searchText, setSearchText] = useState('')
    const [recipeId, setRecipeId] = useState()

    const [bookmarkRecipes, setBookmarkRecipes] = useState([])

    const toggleRecipeToBookmark = (recipeId) => {
        let recipes = JSON.parse(sessionStorage.getItem('recipes') || '[]')
        if (recipes.includes(recipeId)) {
            recipes = recipes.filter(el => el !== recipeId)
        } else {
            recipes.push(recipeId)
        }
        setBookmarkRecipes(recipes)
        sessionStorage.setItem('recipes', JSON.stringify(recipes))
    }

    return (
        <div className="container-components d-flex col-12 row">
            <NavbarC setSearchText={setSearchText} />
            <ResultsC searchText={searchText} setRecipeId={setRecipeId}/>
            <RecipeC recipeId={recipeId} toggleRecipeToBookmark={toggleRecipeToBookmark} />
        </div>
    )
}

export default ContainerC;