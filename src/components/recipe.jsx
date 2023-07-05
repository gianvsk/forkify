import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const api_key = '6d948498-1b38-4395-865f-4f3969f0bd45'

const RecipeC = ({ recipeToPass, recipe }) => {

    const [servings, setServings] = useState(4)

    const [recipeId, setRecipeId] = useState('')
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}&key=${api_key}`)
            .then((response) => response.json())
            .then((data) => (data.data.recipes.find(el => el.title === recipeToPass.title ? setRecipeId(el.id) : false)))
            .catch(err => console.error('error:' + err))
    }, [recipeToPass])

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=${api_key}`)
            .then((response) => response.json())
            .then((data) => (setIngredients(data.data.recipe.ingredients),
                console.log(data.data.recipe.ingredients)))
            .catch(err => console.error('error:' + err))
    }, [recipeId])

    return (
        <div className="recipe col-lg-8">
            {recipeToPass === '' &&
                <div className="recipe-message d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="icon-recipe-container"><FontAwesomeIcon className="icon-smile" icon={faFaceSmile} /></div>
                        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
                    </div>
                </div>}
            {recipeToPass &&
                <div>
                    <div className='div-image'>
                        <img className="img-recipe w-100" src={recipeToPass.image_url} alt="recipe img" />
                    </div>
                    <div className='preparation d-flex justify-content-around align-items-center'>
                        <div>
                            <FontAwesomeIcon icon={faClock} style={{ color: "#f38e82" }} />
                            <span>60</span>
                            <span>MINUTES</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#f38e82" }} />
                            <span>{servings}</span>
                            <span>SERVINGS</span>
                            <button onClick={() => setServings(servings + 1)}><img className='icon-plus-minus' src="svg/add.png" width="20" height="20" alt="plus-icon" /></button>
                            <button onClick={() => setServings(servings - 1)}><img className='icon-plus-minus' src="svg/minus.png" width="20" height="20" alt="minus-icon" /></button>
                        </div>
                        <div className='icon-bookmark-container d-flex justify-content-center align-items-center'>
                            <button><img className='icon-bookmark-recipe' src="svg/bookmark.png" width="20" height="20" alt="bookmark" /></button>
                        </div>
                    </div>
                    <div className='ingredients d-flex flex-column justify-content-center align-items-center'>
                        <h2>RECIPE INGREDIENTS</h2>
                        <ul className='listIngredients row'>
                            {ingredients.map((el, index) => <li key={index} className='listIngredients__singleIngredient d-flex col-lg-6'>
                                <img className='mx-2' src='svg/check.png' width="20" height="20" alt="check" />
                                <h5>{Math.sign(el.quantity * servings / 4) < 0 ? el.quantity * servings / 4 * (-1) :
                                                                                    el.quantity * servings / 4} {el.unit + ' ' + el.description}</h5>
                            </li>)}
                        </ul>
                    </div>
                    <div className='cooking d-flex flex-column align-items-center'>
                        <h2 className='mb-5 cooking__title'>HOW TO COOK IT</h2>
                        <p className='mb-5 cooking__paragraph'>This recipe was carefully designed and tested by All Recipes. Please check out directions at their website.</p>
                        <button className='cooking__button'>DIRECTIONS <img className='ms-3 mb-1' src='svg/right-arrow.png' width="12" height="12" alt="right-arrow"/></button>
                    </div>
                </div>

            }
        </div>
    ) 
}

export default RecipeC;