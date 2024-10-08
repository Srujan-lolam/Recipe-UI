import '../styles/Toprated.css';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import recipeimg from '../assets/recipe.jpg';
import { useState } from 'react';

interface Recipe {
    title: string;
    imageUrl: string;
    rating: number;
  }

interface RecipeCardProps {
    recipe: Recipe;
  }
  
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
  
    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };
  
    return (
      <div className="recipe-card">
        <div className="recipe-image-container">
          <img src={recipeimg} alt={recipe.title} className="recipe-image" />
          <button className="favorite-btn" onClick={toggleFavorite}>
            {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
        </div>
        <div className="recipe-info">
          <h3>{recipe.title}</h3>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} color={index < recipe.rating ? '#ffc107' : '#e4e5e9'} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default RecipeCard