import React from 'react';
// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';



function Recipe({ recipes, recipe, openPopup }) {
  const prepTime = (mins) => {
    let h = Math.floor(mins /60);
    let m = mins % 60;

    m = m < 10 ? '0' + m : m;

    return `${h}h ${m}m`;
  }
  
  return (    
    <div className='recipe' onClick={() => openPopup(recipes, recipe.recipe.uri)}>
      <img src={recipe.recipe.image} alt=""/>
      <span className='source'>{recipe.recipe.source}</span>
      <h3 className='recipe-label'>{recipe.recipe.label}</h3>
      <div className="meta">
        <span className='time'>
          <FontAwesomeIcon className='icon' icon={faClock} />
          {prepTime(recipe.recipe.totalTime)} 
        </span>
        <span className='ingredients-num'>
          <FontAwesomeIcon className='icon' icon={faUtensils} />
          {recipe.recipe.ingredients.length} ingredients
        </span>
      </div>
    </div>    
  )
}

export default Recipe;