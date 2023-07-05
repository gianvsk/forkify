import React from 'react';
import style from '../style/style.css';
import {useState, useEffect} from 'react';

const ResultsC = ({recipe}) => {

    const [recipesFound, setRecipesFound] = useState([])

    const [recipeForAPI, setRecipeForAPI] = useState(recipe)

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
        .then((response) => response.json())
        .then((data) => ( setRecipesFound(data.recipes)))
        .catch(err => console.error('error:' + err))
    }, [recipe])

    return ( 
    <div className="results d-flex flex-column justify-content-center align-items-start col-lg-4">
        {recipesFound && recipesFound.map(el => <div className="d-flex justify-content-center align-items-center container-recipes">
                                                    <div className='d-flex flex-row justify-content-center align-items-center'>
                                                        <img src={el.image_url}/>
                                                        <h3>{el.publisher}</h3>
                                                    </div>
                                                </div>)}
    </div>
    )

}

export default ResultsC;