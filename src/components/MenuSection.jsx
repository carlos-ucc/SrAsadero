import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../data/menu';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('cortes');

  return (
    <section id="menu" className="py-24 bg-secondaryBg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accentOrange font-bold uppercase tracking-widest text-xs">Menú Interactivo</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2 uppercase">Nuestra Carta</h2>
          <div className="h-1 w-16 bg-accentRed mx-auto mt-4" />
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-white/10 pb-6">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.id ? 'bg-gradient-to-r from-accentOrange to-accentRed text-white shadow-glow-orange' : 'bg-darkBg text-grayText hover:text-white border border-white/5'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Cards Display */}
        <motion.div layout class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {menuItems[activeCategory].map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-darkBg p-4 rounded-2xl flex flex-col sm:flex-row gap-5 items-center border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-grow w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
                    <span className="text-accentOrange font-black text-lg ml-2">{item.price}</span>
                  </div>
                  <p className="text-grayText text-xs leading-relaxed font-light mb-4">{item.description}</p>
                  <a
                    href={`https://wa.me/5212290000000?text=Hola,%20me%20gustaria%20pedir%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-accentOrange hover:text-accentRed transition-colors uppercase tracking-wider"
                  >
                    + Agregar al pedido
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}