import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { api_key } from '../utils/constants';

const RecipeC = ({ recipeId, toggleRecipeToBookmark }) => {

    const [servings, setServings] = useState(4)
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(null)

    const fetchRecipe = async () => {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=${api_key}`)
        const json = await response.json()
        if (!json.data?.recipe) return
        setRecipe(json.data.recipe)
        setIngredients(json.data.recipe.ingredients)
    }

    const addServing = () => setServings(servings + 1)
    const removeServing = () => servings > 1 ? setServings(servings - 1) : null

    const getIngredientQuantity = (quantity) => {
        return Math.sign(quantity * servings / 4) < 0 ?
                quantity * servings / 4 * -1 :
                quantity * servings / 4
    }

    useEffect(() => {
        if (!recipeId) return
        fetchRecipe()
    }, [recipeId])

    return (
        <div className="recipe col-12 col-lg-8">
            {!recipe &&
                <div className="recipe-message">
                    <div className="recipe-message-container">
                        <div className="icon-recipe-container"><FontAwesomeIcon className="icon-smile" icon={faFaceSmile} /></div>
                        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
                    </div>
                </div>}
            {recipe &&
                <div>
                    <div className='recipe__container col-12'>
                        <div className='recipe__container-overflowImage'>
                        <img className="img-recipe w-100" src={recipe.image_url} alt="recipe img" />
                        </div>
                        <h1 className='recipe__container-textImage'>
                        <span className='recipe__container-textImage--text'>{recipe.title.toUpperCase()}</span>
                        </h1>
                    </div>
                    <div className='preparation'>
                        <div className='preparation-container'>
                            <img src="svg/clock.png" className="me-3" width="30" height="30" alt="clock icon"/>
                            <span className='number'>60</span>
                            <span className='text'>MINUTES</span>
                        </div>
                        <div className='preparation-container'>
                            <img src="svg/user.png" className="me-3" width="30" height="30" alt="clock icon"/> 
                            <span className='number'>{servings}</span>
                            <span className='text'>SERVINGS</span>
                            <button onClick={addServing}><img className='icon-plus-minus' src="svg/add.png" width="20" height="20" alt="plus-icon" /></button>
                            <button onClick={removeServing}><img className='icon-plus-minus' src="svg/minus.png" width="20" height="20" alt="minus-icon" /></button>
                        </div>
                        <div className='spacer'/>
                        <div className='icon-bookmark-container '>
                            <button onClick={() => toggleRecipeToBookmark(recipeId)}>
                            <img className='icon-bookmark-recipe' src="svg/bookmark-white.png" width="25" height="25" alt="bookmark" /></button>
                        </div>
                    </div>
                    <div className='ingredients'>
                        <h2>RECIPE INGREDIENTS</h2>
                        <ul className='listIngredients row'>
                            {ingredients.map((el, index) => (
                                <li key={index} className='listIngredients__singleIngredient d-flex col-12 col-lg-6'>
                                <img className='mx-2' src='svg/check.png' width="20" height="20" alt="check" />
                                <h5>{getIngredientQuantity(el.quantity) + ` ${el.unit} ${el.description}`}</h5>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='cooking'>
                        <h2 className='cooking__title'>HOW TO COOK IT</h2>
                        <p className='cooking__paragraph'>This recipe was carefully designed and tested by All Recipes. Please check out directions at their website.</p>
                        <button className='cooking__button'>DIRECTIONS <img className='ms-3 mb-1' src='svg/right-arrow.png' width="12" height="12" alt="right-arrow"/></button>
                    </div>
                </div>

            }
        </div>
    ) 
}

export default RecipeC;