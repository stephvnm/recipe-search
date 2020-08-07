import React from 'react';
import Recipe from './Recipe';

function Recipes({ recipes, openPopup }) {    
  return (
    <section className="recipes">
      {recipes.map(recipe => (        
        <Recipe recipes={recipes} recipe={recipe} openPopup={openPopup} />
      ))}
    </section>
  )
}

export default Recipes;