import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const { cart } = useAppSelector((state) => state.products);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">STORE</span>UN
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              المنتجات
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/categories" className="navbar-link">
              التصنيفات
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              اتصل بنا
            </Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <Link to="/cart" className="cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;