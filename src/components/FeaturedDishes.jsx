import React from 'react';
import { motion } from 'framer-motion';

const featured = [
  { name: 'Parrillada Especial', price: '$790', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500&auto=format&fit=crop', desc: 'Surtido premium para compartir.' },
  { name: 'Tacos al Carbón', price: '$140', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=500&auto=format&fit=crop', desc: 'Tortillas hechas a mano y carne premium.' },
  { name: 'Costillas BBQ', price: '$360', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop', desc: 'Ahumadas por horas, suaves al hueso.' }
];

export default function FeaturedDishes() {
  return (
    <section id="destacados" className="py-24 bg-darkBg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accentOrange font-bold uppercase tracking-widest text-xs">Selección del Chef</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2 uppercase">Los Más Solicitados</h2>
          <div className="h-1 w-16 bg-accentOrange mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-secondaryBg rounded-2xl overflow-hidden group border border-white/5 hover:border-accentOrange/30 transition-all duration-300 hover:shadow-glow-orange"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-accentOrange font-bold px-4 py-1 rounded-full text-sm border border-accentOrange/40">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-grayText text-sm mb-6">{item.desc}</p>
                <a 
                  href="https://wa.me/5212290000000" 
                  className="w-full block text-center bg-white/5 group-hover:bg-gradient-to-r group-hover:from-accentOrange group-hover:to-accentRed text-white font-medium py-2.5 rounded-xl transition-all duration-300 text-sm"
                >
                  Pedir Ahora
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}