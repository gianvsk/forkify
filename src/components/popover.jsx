import React, {useState, useEffect} from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import '../style/style.css'
import { api_key } from '../utils/constants';
import 'bootstrap/dist/css/bootstrap.min.css';



const MyComponent = ({bookmarkRecipes}) => {

  const [recipeFound, setRecipeFound] = useState([])

    useEffect(() => {
      let recipes = JSON.parse(sessionStorage.getItem('recipes') || '[]');
      recipes.map((el) => {
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${el}?key=${api_key}`)
          .then((response) => response.json())
          .then((data) => {
            setRecipeFound((prevRecipeFound) => {
              const updatedRecipeFound = prevRecipeFound.filter(
                (recipe) => recipe.id !== data.data.recipe.id
              );
              return [...updatedRecipeFound, data.data.recipe];
            });
          })
          .catch((err) => console.error('error:' + err));
      });
    }, [bookmarkRecipes]);

  const popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" className="popover-custom" title="Popover bottom">
          {recipeFound && 
          <div>
              {recipeFound.map((el,index) => 
                            <div key={index} className="container-recipes">
                            <div /* onClick={() => setRecipeId(el.id)} */ className='recipeFound p-2 px-4'>
                                <img src={el.image_url} alt="recipe img" />
                                <div className="mx-3">
                                    <h3>{el.title.toUpperCase()}</h3>
                                    <p>{el.publisher.toUpperCase()}</p>
                                </div>
                            </div>
                        </div>
                            )}
                </div>
        
          }
    </Popover>
  );

  return(
    <OverlayTrigger
    trigger="click"
    rootClose
    placement="bottom"
    overlay={popoverClickRootClose}
  >
    <button className='container-navbar-text__button d-flex align-items-center p-3'><img src='svg/bookmark.png' className='mb-1' width="30" height="30" alt="edit icon" />BOOKMARK</button>
    </OverlayTrigger>
)
}

export default MyComponent;