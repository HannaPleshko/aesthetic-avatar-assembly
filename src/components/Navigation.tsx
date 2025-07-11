
import React, { useState } from 'react';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/32eb3d426dc7534083fe659b4cbec1378c2157a9?placeholderIfAbsent=true"
        className={styles.logo}
        alt="Elza Coffee Logo"
      />
      
      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
        <a href="#menu" className={styles.navLink}>
          menu
        </a>
        <a href="#services" className={styles.navLink}>
          services
        </a>
        <a href="#product" className={styles.navLink}>
          product
        </a>
        <a href="#blog" className={styles.navLink}>
          blog
        </a>
        <a href="#contact" className={styles.navLink}>
          contact
        </a>
      </nav>

      {/* Social Icons - Desktop */}
      <div className={styles.socialIcons}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/f3f059b3c54fbb27e1e5237cc82df77aa0bc167e?placeholderIfAbsent=true"
          className={styles.socialIcon}
          alt="Social Icon 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/71e1e75126ff7d292df68bba7b6db5385ab105ff?placeholderIfAbsent=true"
          className={styles.socialIcon}
          alt="Social Icon 2"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className={styles.mobileMenuButton}
        aria-label="Toggle mobile menu"
      >
        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavContent}>
          <a href="#home" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#menu" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            menu
          </a>
          <a href="#services" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            services
          </a>
          <a href="#product" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            product
          </a>
          <a href="#blog" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            blog
          </a>
          <a href="#contact" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            contact
          </a>
          <div className={styles.mobileSocialIcons}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/f3f059b3c54fbb27e1e5237cc82df77aa0bc167e?placeholderIfAbsent=true"
              className={styles.socialIcon}
              alt="Social Icon 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/71e1e75126ff7d292df68bba7b6db5385ab105ff?placeholderIfAbsent=true"
              className={styles.socialIcon}
              alt="Social Icon 2"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
