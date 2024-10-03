import React, { useEffect, useState } from 'react';
import '../styles/Toprated.css';
import RecipeCard from './RecipeCard';

const Toprated: React.FC = () => {
    const [recipes,setRecipes] = useState([])
    const fetchData = async () =>{
        const response = await fetch("http://localhost:8081/recipes/1");
        const temp = await response.json();
        const recipesArray = [temp,temp,temp,temp,temp]
        setRecipes(recipesArray);
        console.log(recipes)
    }
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <section className="top-rated-recipes">
    <h1 className='center'>
        Top rated recipes
    </h1>

    <div className="recipe-grid">
    {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
       
        
    ))}
    </div>
</section>
  );
};

export default Toprated;