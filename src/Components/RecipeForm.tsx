import React from 'react';
import '../Styles/recipeform.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

const RecipeForm: React.FC = () => {
  const [isFormVisible,setIsFormVisible] = useState(false)
  const [formData,setFormData] = useState({
    title : "",
    imageUrl : "https://img.jpg",
    description : "",
    ingredients : [],
    steps : [],
    cuisineType : '',
    category : '',
    tags : [],
    cookingTime : 8,
    difficultyLevel : '',
    dietaryRestrictions : '',
    rating : 4
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    console.log(data)
    fetch("http://localhost:8081/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setIsFormVisible(false);
        console.log("Success:srujan", data);
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

  const handleChangeArray = (e) =>{
    const {name,value} = e.target
    const valueArray = value.split(',')
    setFormData((prevData) => ({
      ...prevData,
      [name] : valueArray
    }))
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
        <label htmlFor="recipe-tags">Ingredients</label>
        <input className="inputelement" id="recipe-ingredients" onChange={handleChangeArray} type="text" name='ingredients' value={formData.ingredients} placeholder='Enter tags' required />

        <label htmlFor="recipe-steps">Recipe Steps</label>
        <textarea className="inputelement" name='steps' value={formData.steps} onChange={handleChangeArray} id="recipe-steps" placeholder='Enter the steps' required />
        <label htmlFor="recipe-cuisine">Cuisine</label>
        <select className="inputelement" id="recipe-cuisine" onChange={handleChange} name='cuisineType' value={formData.cuisine} required>
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
        <input className="inputelement" id="recipe-tags" onChange={handleChangeArray} type="text" name='tags' value={formData.tags} placeholder='Enter tags' required />

        <label htmlFor="recipe-time">Time Required</label>
        <input className="inputelement" id="recipe-time" type="number" onChange={handleChange} name='cookingTime' placeholder='Enter time required' value={formData.time} required />

        <label htmlFor="difficulty-level">Difficulty Level</label>
        <select className="inputelement" id="difficulty-level" onChange={handleChange} name='difficultyLevel' value={formData.difficultyLevel} required>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor="recipe-tags">Dietery-restrictions</label>
        <input className="inputelement" id="recipe-dietery_restrictions" onChange={handleChange} type="text" name='dietaryRestrictions' value={formData.dietaryRestrictions} placeholder='Enter dietery restrictions' required />

        <button id = 'submit' type='submit'>
          Submit
        </button>
      </form>
    </div> )}
    </>
  );
};

export default RecipeForm;
