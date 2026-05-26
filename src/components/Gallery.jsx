import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=600&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-secondaryBg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accentOrange font-bold uppercase tracking-widest text-xs">Visualiza el Sabor</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2 uppercase">Galería de la Brasa</h2>
          <div className="h-1 w-16 bg-accentOrange mx-auto mt-4" />
        </div>

        {/* Masonry / Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={img} alt={`Platillo Sr Asadero ${idx}`} className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white border border-white/40 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold">
                  Sr. Asadero Premium
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}