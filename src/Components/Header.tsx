import React, { useState } from 'react';
import '../styles/header.css';
import logo from '../assets/logo.webp';
import { FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Recipe Platform Logo" />
        <h1>RecipePlatform</h1>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search for recipes..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="header__auth">
        <button onClick={handleAuthClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </header>
  );
};

export default Header;