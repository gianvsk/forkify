import React from 'react';
import style from '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const RecipeC = ({recipe}) => {

    return (
        <div className="recipe col-lg-8">
            <div className="recipe-message d-flex justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-center">
            <div className="icon-recipe-container"><FontAwesomeIcon className="icon-smile" icon={faFaceSmile} /></div>
            <p>Start by searching for a recipe or an ingredient. Have fun!</p>
            </div>
            </div>
        </div>
    )
}

export default RecipeC;