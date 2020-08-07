import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import FeaturedRecipes from './components/FeaturedRecipes';
import Recipes from './components/Recipes';
import Popup from './components/Popup';
import './index.css';

import axios from 'axios';


function App () {
  // State
  const [ recipes, setRecipes ] = useState([]);
  const [ featuredRecipes, setFeaturedRecipes ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ searchRequest, setSearchRequest ] = useState(false);
  const [ selected, setSelected ] =  useState({});

  // API
  const API_URL = 'https://api.edamam.com/search'; 
  const API_ID = 'a9e3fe49';
  const API_KEY = '15e03f8ba33086be7a0e599c7e143cdc';   
  
  // Get random recipes on render
  const getFeaturedRecipes = (food) => {
    axios(`${API_URL}?q=${food}&app_id=${API_ID}&app_key=${API_KEY}&to=4`)
      .then(({ data }) => {
        setFeaturedRecipes(data.hits);
      });    
  }

  useEffect(() => { 
    let foodArray = ['chicken', 'pancakes', 'cake', 'tofu', 'banana', 'pizza', 'fries'];

    let random = foodArray[Math.floor(Math.random() * foodArray.length)];

    getFeaturedRecipes(random);    
  }, []);    

  // Search functionality
  const search = (e) => {
    e.preventDefault();
    setSearchRequest(true);

    axios(`${API_URL}?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
      .then(({ data }) => {
        setRecipes(data.hits);
      });   
    
    // Clear input field
    e.target.elements[0].value = '';
  }

  const handleInput = (e) => {    
    setQuery(e.target.value);   
  }

  // Recipe popup
  const openPopup = (arr, uri) => {
    const selectedRecipe = arr.find(recipe => recipe.recipe.uri === uri);
    setSelected(selectedRecipe);    
  };

  const closePopup = () => {
    setSelected({});
  }

  return (
    <div className='App'>
      <header className='header'>        
        <Search search={search} handleInput={handleInput}/>        
      </header>
      <main>
        {searchRequest ? 
        <div>
          <div className='separator'><h2>Search results for: {query}</h2></div>
          <Recipes recipes={recipes} openPopup={openPopup}/>
        </div>
        : <div>
          <div className='separator'><h2>Featured Recipes</h2></div>
          <FeaturedRecipes featuredRecipes={featuredRecipes} openPopup={openPopup}/>
        </div> }


        {(typeof selected.recipe != "undefined") ? <Popup selected={selected} closePopup={closePopup}/> : false}
      </main>
    </div>
  );
}

export default App;