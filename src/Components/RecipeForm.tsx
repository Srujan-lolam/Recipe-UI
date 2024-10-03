import React from 'react';
import '../Styles/recipeform.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

const RecipeForm: React.FC = () => {
  const [isFormVisible,setIsFormVisible] = useState(false)
  const [formData,setFormData] = useState({
    title : "",
    description : "",
    steps : '',
    cuisine : '',
    category : '',
    tags : '',
    time : '',
    difficulty_level : ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setIsFormVisible(false);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleCreateButton = () => {
    setIsFormVisible(true);
  }

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
  }));
  }

  return (
    <>
    <div className='header__createButton'>
        <button onClick={handleCreateButton}><Link to = '/recipeform'>{<FaPlusCircle />}</Link></button>
    </div>
    {isFormVisible && (
    <div id = 'my-modal'>
      <form  className='form-container' onSubmit={handleSubmit}>
        <label htmlFor="recipe-name">Recipe Name</label>
        <input className="inputelement" onChange={handleChange} id="recipe-name" value = {formData.title} type="text" placeholder='Enter recipe name' name='title' required />
        <input type="file" placeholder='Upload the image' className='inputelement' id='recipe-img' />

        <label htmlFor="recipe-description">Recipe Description</label>
        <textarea className="inputelement" id="recipe-description" onChange={handleChange} name='description' value={formData.description}  placeholder='Enter the description' required />

        <label htmlFor="recipe-steps">Recipe Steps</label>
        <textarea className="inputelement" name='steps' value={formData.steps} onChange={handleChange} id="recipe-steps" placeholder='Enter the steps' required />
        <label htmlFor="recipe-cuisine">Cuisine</label>
        <select className="inputelement" id="recipe-cuisine" onChange={handleChange} name='cuisine' value={formData.cuisine} required>
          <option value="italian">Italian</option>
          <option value="indian">Indian</option>
          <option value="chinese">Chinese</option>
        </select>

        <label htmlFor="recipe-category">Category</label>
        <select className="inputelement" id="recipe-category" onChange={handleChange} name='category' value={formData.category} required>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-veg</option>
        </select>

        <label htmlFor="recipe-tags">Tags</label>
        <input className="inputelement" id="recipe-tags" onChange={handleChange} type="text" name='tags' value={formData.tags} placeholder='Enter tags' required />

        <label htmlFor="recipe-time">Time Required</label>
        <input className="inputelement" id="recipe-time" type="text" onChange={handleChange} name='time' placeholder='Enter time required' value={formData.time} required />

        <label htmlFor="difficulty-level">Difficulty Level</label>
        <select className="inputelement" id="difficulty-level" onChange={handleChange} name='difficulty_level' value={formData.difficulty_level} required>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button id = 'submit' type='submit'>
          Submit
        </button>
      </form>
    </div> )}
    </>
  );
};

export default RecipeForm;
