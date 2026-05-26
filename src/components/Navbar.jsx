import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { to: 'inicio', label: 'Inicio' },
  { to: 'nosotros', label: 'Nosotros' },
  { to: 'destacados', label: 'Favoritos' },
  { to: 'menu', label: 'Menú' },
  { to: 'galeria', label: 'Galería' },
  { to: 'opiniones', label: 'Opiniones' },
  { to: 'ubicacion', label: 'Ubicación' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkBg/95 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="inicio" smooth={true} duration={500} className="cursor-pointer">
          <span className="font-display text-2xl font-black uppercase tracking-wider text-white">
            Sr.<span className="text-accentOrange"> Asadero</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-accentOrange font-medium"
              className="text-grayText hover:text-white cursor-pointer transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/5212290000000?text=Hola,%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-accentOrange to-accentRed text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-glow-red transition-all duration-300 hover:scale-105 inline-block"
          >
            Ordenar Ahora
          </a>
        </div>

        {/* Hamburger Icon */}
        <button className="lg:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-darkBg z-40 flex flex-col p-6 gap-6 lg:hidden border-t border-white/5 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-lightText text-xl font-medium border-b border-white/5 pb-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5212290000000?text=Hola,%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-accentOrange to-accentRed text-white py-3 text-center rounded-xl font-semibold mt-4 shadow-glow-orange"
          >
            Ordenar Ahora
          </a>
        </div>
      )}
    </nav>
  );
}