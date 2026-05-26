import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-24 bg-darkBg text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accentOrange font-bold uppercase tracking-widest text-xs">Comentarios</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2 uppercase">Lo Que Dicen Nuestros Clientes</h2>
          <div className="h-1 w-16 bg-accentRed mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-secondaryBg p-8 rounded-2xl border border-white/5 relative flex flex-col justify-between"
            >
              <div>
                <FaQuoteLeft className="text-accentOrange/20 text-4xl absolute top-6 right-8" />
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(t.stars)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-grayText text-sm leading-relaxed italic mb-6">"{t.comment}"</p>
              </div>
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <h5 className="font-bold text-white text-sm">{t.name}</h5>
                <span className="text-xs text-white/40">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}