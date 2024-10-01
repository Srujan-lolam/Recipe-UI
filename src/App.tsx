import React from 'react'; // Ensure React is imported, as JSX is transformed through React.createElement
import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Routes,Route } from 'react-router-dom';
import RecipeForm from './Components/RecipeForm';


// Define App as a functional component type using React.FC (Functional Component)
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path='/recipeform' element= {<RecipeForm/>} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;