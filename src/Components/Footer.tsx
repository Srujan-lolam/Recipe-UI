import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Your perfect platform to discover new recipes and share your own creation with food lovers worldwide.</p>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>123 Recipe St., Baking City</p>
        <p>(123) 456-7890</p>
        <p>info@recipeplatform.com</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Newsletter</h4>
        <p>Subscribe to our newsletter for the latest recipes and blog posts!</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://youtube.com"><FaYoutube /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;