import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Dashboard.css';

interface StoreLayoutProps {
  children: ReactNode;
}

const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
  return (
    <div className="store-container">
      <Navbar />
      <div className="store-content">
        <div className="store-main">
          {children}
        </div>
        <footer className="store-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">UN</span>STORE
            </div>
            <div className="footer-links">
              <Link to="/about">عن المتجر</Link>
              <Link to="/privacy">سياسة الخصوصية</Link>
              <Link to="/terms">الشروط والأحكام</Link>
            </div>
            <div className="footer-copyright">
              © 2025 UNSTORE. جميع الحقوق محفوظة - usef tarek
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StoreLayout;