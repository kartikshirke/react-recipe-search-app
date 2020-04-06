import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '9f8c6455';
  const APP_KEY = '70e71494d49ea7f317ed1538ac4bb7c6';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const searchResult = (e) => {
    setSearch(e.target.value);
  }

  const queryData = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={queryData}>
        <h1>Search Recipes:</h1>&nbsp;
      <input className="search-bar"
          type="text"
          value={search}
          onChange={searchResult} />
        <button className="search-button" type="submit" >Search</button>
      </form>
      <div className="recipes">
        {
          recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />))
        }
      </div>
    </div>
  )
}

export default App;
