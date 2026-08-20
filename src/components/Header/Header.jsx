// src/components/Header/Header.jsx
import React, { useState } from 'react'; // useState hook'unu ekledik
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  // Menünün açık olup olmadığını tutan state (varsayılan: false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menüyü açıp kapatan fonksiyon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>XmaX <span className="text-gold">GROUP</span></h2>
      </div>

      {/* Sadece mobilde görünecek Hamburger İkonu */}
      {/* isMenuOpen true ise 'active' sınıfını da ekliyoruz ki çizgiler çarpıya (X) dönüşsün */}
      <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      
      {/* Menü Linkleri */}
      {/* isMenuOpen true ise 'open' sınıfını ekleyerek menüyü ekrana kaydırıyoruz */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          {/* href="#home" yerine href="/#home" yapıyoruz */}
          <li><a href="/#home" onClick={toggleMenu}>HOME</a></li>
          
          <li><Link to="/about" className={styles.navLink} onClick={toggleMenu}>ABOUT</Link></li>
          
          {/* Diğer linklerin başına da '/' ekliyoruz */}
          <li><a href="/#sectors" onClick={toggleMenu}>SECTORS</a></li>
          <li><a href="/#representations" onClick={toggleMenu}>REPRESENTATIONS</a></li>
          <li><a href="/#contact" onClick={toggleMenu}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;