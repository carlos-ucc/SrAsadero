import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/60 to-transparent" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Visual Smoke Layer Context */}
      <div className="absolute inset-0 smoke-overlay opacity-50" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        {/* Floating Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {['⭐ Calidad Premium', '🚗 Servicio para llevar', '🔥 Especialidad en parrilla'].map((badge, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-black/60 border border-accentOrange/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wide text-lightText backdrop-blur-sm"
            >
              {badge}
            </motion.span>
          ))}
        </div>

        {/* Main Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase"
        >
          El auténtico sabor <br/>
          <span className="text-gradient-fire shadow-glow-orange">del asado</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-grayText text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Parrilladas, tacos y cortes preparados con pasión y la mejor leña de la región en Veracruz.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            to="menu"
            smooth={true}
            duration={600}
            className="w-full sm:w-auto bg-gradient-to-r from-accentOrange to-accentRed hover:shadow-glow-orange text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer text-center"
          >
            Ver Menú
          </Link>
          <a
            href="https://wa.me/5212290000000?text=Hola!%20Me%20gustaria%20ver%20el%20menu%20y%20hacer%20un%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 backdrop-blur-sm"
          >
            <FaWhatsapp className="text-xl text-green-500" /> Pedir por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-accentOrange text-2xl cursor-pointer"
        >
          <Link to="nosotros" smooth={true} duration={500}>
            <FaChevronDown />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}