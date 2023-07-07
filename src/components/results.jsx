import React from 'react';
import '../style/style.css';
import { useState, useEffect } from 'react';
import { api_key } from '../utils/constants';

const ResultsC = ({ searchText, setRecipeId }) => {

    const [recipesFound, setRecipesFound] = useState([])
    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${searchText}&key=${api_key}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setRecipesFound(data.data.recipes)
            })
            .catch(err => console.error('error:' + err))
    }, [searchText])

    return (
        <div className="results col-12 col-lg-4">
            {recipesFound && recipesFound.map((el,index) =>
                <div key={index} className="container-recipes">
                    <div onClick={() => setRecipeId(el.id)} className='recipeFound p-2 px-4'>
                        <img src={el.image_url} alt="recipe img" />
                        <div className="mx-3">
                            <h3>{el.title.toUpperCase()}</h3>
                            <p>{el.publisher.toUpperCase()}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    )

}

export default ResultsC;