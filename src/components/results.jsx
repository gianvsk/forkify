import React from 'react';
import '../style/style.css';
import { useState, useEffect } from 'react';
import { api_key } from '../utils/constants';

const ResultsC = ({ searchText, setRecipeId, page, setPage }) => {

    const [recipesFound, setRecipesFound] = useState([])
    const recipesToGetFromArray = 10

    const nextPage = () =>
        page > 0 && page * recipesToGetFromArray < recipesFound.length ? (
            setPage(page + 1)
        ) : false

    const previousPage = () =>
        page > 1 ? (
            setPage(page - 1)
        ) : setPage(1)

    const checkPage = () =>
        page !== 1 ? page * recipesToGetFromArray
            : page - 1

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${searchText}&key=${api_key}`)
            .then((response) => response.json())
            .then((data) => {
                setRecipesFound(data.data.recipes)
            })
            .catch(err => console.error('error:' + err))
    }, [searchText])

    return (
        <div className="results d-flex align-items-start flex-sm-column justify-content-sm-center align-items-sm-start justify-content-lg-start col-12 col-lg-5 pt-5">
            {recipesFound && recipesFound.slice(checkPage(), checkPage() + 10).map((el, index) => (
                <div key={index} onClick={() => setRecipeId(el.id)} className="container-recipes d-flex flex-column justify-content-start align-items-start justify-content-sm-center align-items-sm-center flex-lg-row justify-content-lg-start align-items-lg-center w-md-100">
                        <img className='container-recipes__image me-5 me-sm-2' src={el.image_url} alt="recipe img" />
                        <div className="mx-3">
                            <h3>{el.title.toUpperCase()}</h3>
                            <p>{el.publisher.toUpperCase()}</p>
                        </div>
                    </div>
                    ))}
            {recipesFound.length > 0 && <div className='results__buttonContainer d-flex flex-column justify-content-around flex-sm-row w-100 pb-sm-5 pt-sm-2 mt-md-4'>
                {page > 1 && <button className='results__buttonContainer-button' onClick={previousPage}>
                    <img className='pe-2' src='svg/arrow-left-salmon.png' width="20" height="10" alt="arrow-left-icon" />
                    Page {page - 1}</button>}
 
                {page * recipesToGetFromArray < recipesFound.length && <button className='results__buttonContainer-button' onClick={nextPage}>
                    Page {page + 1}
                    <img className='ps-2' src='svg/arrow-right-salmon.png' width="20" height="10" alt="arrow-right-icon" /></button>
                    }
            </div>} 
        </div>
    )

}

export default ResultsC;