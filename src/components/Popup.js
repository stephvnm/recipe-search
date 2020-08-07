import React from 'react';

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="popup-container">
        <header className='popup-header'>
          <h1>
            {selected.recipe.label}
            <span>{Math.round(selected.recipe.calories)} KCal</span>
          </h1>          
        </header>
        <hr/>
        <div className="main-content">
          <img src={selected.recipe.image} alt={selected.recipe.label}/>
          <div className="separator-line"></div>
          <div className="ingredients">
            <h3>Ingredients:</h3>
            {selected.recipe.ingredientLines.map(ingredient => (              
              <li>{ingredient}</li>           
            ))}
              
            <h4>{selected.recipe.yield}  Servings</h4> 
          </div>               
        </div>
        <div className="info">          
          <p>
            For directions and other info related to this recipe - visit <a href={selected.recipe.url} target='_blank' rel="noopener noreferrer">{selected.recipe.source}</a>.
          </p>
        </div>
        <footer>
          <button className="close-btn" onClick={closePopup}>Go Back</button>
        </footer>
      </div>
    </section>
  );
};

export default Popup;