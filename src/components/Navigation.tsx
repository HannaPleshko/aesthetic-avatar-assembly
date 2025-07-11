
import React, { useState } from 'react';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-20 flex w-full items-center justify-between px-4 sm:px-8 lg:px-[34px] py-4 lg:py-0 max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/32eb3d426dc7534083fe659b4cbec1378c2157a9?placeholderIfAbsent=true"
        className="aspect-square object-contain w-12 sm:w-16 lg:w-[72px] shrink-0"
        alt="Elza Coffee Logo"
      />
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-[30px] text-lg xl:text-xl text-[rgba(255,248,232,1)] font-normal whitespace-nowrap px-[30px] py-[30px]">
        <a href="#home" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300">
          Home
        </a>
        <a href="#menu" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300">
          menu
        </a>
        <a href="#services" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300">
          services
        </a>
        <a href="#product" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300">
          product
        </a>
        <a href="#blog" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300">
          blog
        </a>
        <a href="#contact" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300">
          contact
        </a>
      </nav>

      {/* Social Icons - Desktop */}
      <div className="hidden lg:flex gap-[7px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/f3f059b3c54fbb27e1e5237cc82df77aa0bc167e?placeholderIfAbsent=true"
          className="aspect-square object-contain w-6 hover:scale-110 transition-transform cursor-pointer"
          alt="Social Icon 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/71e1e75126ff7d292df68bba7b6db5385ab105ff?placeholderIfAbsent=true"
          className="aspect-square object-contain w-6 hover:scale-110 transition-transform cursor-pointer"
          alt="Social Icon 2"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle mobile menu"
      >
        <span className={`w-6 h-0.5 bg-[rgba(255,248,232,1)] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[rgba(255,248,232,1)] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[rgba(255,248,232,1)] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`lg:hidden absolute top-full left-0 w-full bg-[rgba(34,21,24,0.95)] backdrop-blur-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center py-6 space-y-4 text-lg text-[rgba(255,248,232,1)] font-normal">
          <a href="#home" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#menu" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            menu
          </a>
          <a href="#services" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            services
          </a>
          <a href="#product" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            product
          </a>
          <a href="#blog" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            blog
          </a>
          <a href="#contact" className="hover:text-[rgba(218,187,158,1)] transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            contact
          </a>
          <div className="flex gap-4 pt-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/f3f059b3c54fbb27e1e5237cc82df77aa0bc167e?placeholderIfAbsent=true"
              className="aspect-square object-contain w-6 hover:scale-110 transition-transform cursor-pointer"
              alt="Social Icon 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc086154295a4e38a51632f10c7dd710/71e1e75126ff7d292df68bba7b6db5385ab105ff?placeholderIfAbsent=true"
              className="aspect-square object-contain w-6 hover:scale-110 transition-transform cursor-pointer"
              alt="Social Icon 2"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
