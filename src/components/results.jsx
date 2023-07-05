import React from 'react';
import '../style/style.css';
import { useState, useEffect } from 'react';

const ResultsC = ({ recipe, setRecipeToPass }) => {

    const [recipesFound, setRecipesFound] = useState([])

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
            .then((response) => response.json())
            .then((data) => setRecipesFound(data.recipes))
            .catch(err => console.error('error:' + err))
    }, [recipe])

    return (
        <div className="results d-flex flex-column justify-content-center align-items-start col-lg-4">
            {recipesFound && recipesFound.map(el =>
                <div className="d-flex justify-content-center align-items-center container-recipes w-100">
                    <div onClick={() => setRecipeToPass(el)} className='d-flex flex-row align-items-center w-100 p-2 px-4'>
                        <img src={el.image_url} alt="recipe img" />
                        <div className="mx-3">
                            <h3>{el.publisher.toUpperCase()}</h3>
                            <p>{el.title.toUpperCase()}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    )

}

export default ResultsC;