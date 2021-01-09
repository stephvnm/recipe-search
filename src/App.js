import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Recipes from './components/Recipes';
import Popup from './components/Popup';
import './index.css';

import axios from 'axios';

function App () {
  const [ recipes, setRecipes ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ searchRequest, setSearchRequest ] = useState(false);
  const [ selected, setSelected ] =  useState({});

  // API
  const API_URL = 'https://api.edamam.com/search'; 
  const API_ID = 'a9e3fe49';
  const API_KEY = '15e03f8ba33086be7a0e599c7e143cdc';

  const fetchData = (query, hitsCount) => {
    axios.get(`${API_URL}?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&to=${hitsCount}`)
      .then(({ data }) => setRecipes(data.hits))
      .catch((error) => {
        console.log(error);
      })
  }
  
  useEffect(() => { 
    const foodArray = ['chicken', 'pancakes', 'cake', 'tofu', 'banana', 'pizza', 'fries'];

    let random = foodArray[Math.floor(Math.random() * foodArray.length)];

    fetchData(random, 4);
  }, []);    

  const handleInput = (e) => setQuery(e.target.value);

  // Search functionality
  const search = (e) => {
    e.preventDefault();
    setSearchRequest(true);

    // Fetch results
    fetchData(query, 10); 
      
    // Clear input field
    e.target.elements[0].value = '';
  }

  // Open recipe popup
  const openPopup = (arr, uri) => {
    const selectedRecipe = arr.find(recipe => recipe.recipe.uri === uri);
    setSelected(selectedRecipe);      
  };

  // Close popup
  const closePopup = () => setSelected({});

  return (
    <div className='App'>
      <header className='header'>    
        <Search search={search} handleInput={handleInput}/>        
      </header>
      <main>
        {searchRequest ?         
          <div className='separator'><h2>Search results for: {query}</h2></div> : 
          <div className='separator'><h2>Recipes of the Day</h2></div> }
        <Recipes recipes={recipes} openPopup={openPopup}/>         
       
        {(typeof selected.recipe != "undefined") ? <Popup selected={selected} closePopup={closePopup}/> : false}
      </main>
    </div>
  );
}
export default App;