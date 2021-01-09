import React from 'react';

function Search ({ search, handleInput }) {
  return (
    <div className="search-box-wrapper">
      <h1>Welcome !</h1>
      <form onSubmit={search}>
        <input 
          type="text"  
          className='search-bar' 
          placeholder='Search for a recipe...' 
          onChange={handleInput} 
          required
        />
        <button type='submit' className='search-btn'>Search</button>
      </form>
    </div>
  )
}
export default Search;