import React from 'react';
import '../Styles/recipeform.css';

const RecipeForm: React.FC = () => {
  return (
    <div>
      <form  className='form-container' action='./' method='post'>
        <label htmlFor="recipe-name">Recipe Name</label>
        <input className="inputelement" id="recipe-name" type="text" placeholder='Enter recipe name' required />
        <input type="file" placeholder='Upload the image' className='inputelement' id='recipe-img' />

        <label htmlFor="recipe-description">Recipe Description</label>
        <textarea className="inputelement" id="recipe-description" placeholder='Enter the description' required />

        <label htmlFor="recipe-steps">Recipe Steps</label>
        <textarea className="inputelement" id="recipe-steps" placeholder='Enter the steps' required />
        <label htmlFor="recipe-cuisine">Cuisine</label>
        <select className="inputelement" id="recipe-cuisine" required>
          <option value="italian">Italian</option>
          <option value="indian">Indian</option>
          <option value="chinese">Chinese</option>
        </select>

        <label htmlFor="recipe-category">Category</label>
        <select className="inputelement" id="recipe-category"  required>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-veg</option>
        </select>

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
