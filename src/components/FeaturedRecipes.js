import React from 'react';
// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function FeaturedRecipes({ featuredRecipes, openPopup }) {
  
  return (
    <div className="featured-recipes-wrapper">
      {featuredRecipes.map(({ recipe }) => (
        <div className='recipe' onClick={() => openPopup(featuredRecipes, recipe.uri)}>
          <img src={recipe.image} alt=""/>
          <span className='source'>{recipe.source}</span>
          <h3 className='recipe-label'>{recipe.label}</h3>
          <div className="meta">
            <span className='time'>
              <FontAwesomeIcon className='icon' icon={faClock} />
              {recipe.totalTime} mins
            </span>
            <span className='ingredients-num'>
              <FontAwesomeIcon className='icon' icon={faUtensils} />   
              {recipe.ingredients.length} ingredients
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedRecipes;