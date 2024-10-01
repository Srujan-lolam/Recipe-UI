import React, { useState, useEffect } from 'react';
import '../Styles/recipeSlider.css';
import sliderImage from '../assets/recipeSlider.jpg'

const slides = [
  { imageUrl: sliderImage, text: 'Special Diwali Cuisine - Delicious Sweets' },
  { imageUrl: sliderImage, text: 'Exotic Diwali Dishes - Spicy and Savory' },
  { imageUrl: sliderImage, text: 'Festive Feasts - Perfect Diwali Dinner' },
  { imageUrl: sliderImage, text: 'Light Up the Festival with Amazing Snacks' }
];

const RecipeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
            <p className="slide-text">{slide.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSlider;