import React from 'react';
import '../Styles/recipeform.css';

const RecipeForm: React.FC = () => {
  return (
    <div>
      <form  className='form-container' action='./' method='post'>
        <label htmlFor="recipe-name">Recipe Name</label>
        <input className="inputelement" id="recipe-name" type="text" placeholder='Enter recipe name' required />

        <label htmlFor="recipe-description">Recipe Description</label>
        <input className="inputelement" id="recipe-description" type="text" placeholder='Enter recipe description' required />

        <label htmlFor="recipe-steps">Recipe Steps</label>
        <textarea className="inputelement" id="recipe-steps" placeholder='Enter the steps' required />

        <label htmlFor="recipe-cuisine">Cuisine</label>
        <input className="inputelement" id="recipe-cuisine" type="text" placeholder='Enter cuisine' required />

        <label htmlFor="recipe-category">Category</label>
        <input className="inputelement" id="recipe-category" type="text" placeholder='Enter category' required />

        <label htmlFor="recipe-tags">Tags</label>
        <input className="inputelement" id="recipe-tags" type="text" placeholder='Enter tags' required />

        <label htmlFor="recipe-time">Time Required</label>
        <input className="inputelement" id="recipe-time" type="text" placeholder='Enter time required' required />

        <label htmlFor="difficulty-level">Difficulty Level</label>
        <select className="inputelement" id="difficulty-level" required>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button id="submit" type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
