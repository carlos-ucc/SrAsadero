import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-secondaryBg relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accentOrange/10 rounded-full filter blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accentOrange font-bold tracking-widest text-xs uppercase block mb-3">Nuestra Historia</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-6 uppercase leading-tight">
            Tradición de Brasa <br/> y Fuego Local
          </h2>
          <div className="h-1 w-20 bg-accentOrange mb-8" />
          <p className="text-grayText mb-6 leading-relaxed text-base sm:text-lg">
            Nacido en el corazón de **Veracruz**, **Sr. Asadero** celebra el arte de la parrilla mexicana de alta gama. Seleccionamos cuidadosamente cortes de la más alta calidad y los transformamos con el sutil e inconfundible aroma del carbón de mezquite.
          </p>
          <p className="text-grayText mb-8 leading-relaxed text-base">
            No solo servimos platillos excepcionales; creamos un ambiente de calidez familiar inigualable donde cada bocado rinde tributo a las recetas tradicionales de nuestro país, complementado con ingredientes frescos del campo veracruzano.
          </p>
          
          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-white font-bold text-xl mb-1">100% Fresco</h4>
              <p className="text-grayText text-sm">Ingredientes de origen local garantizados todos los días.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-1">Sabor Único</h4>
              <p className="text-grayText text-sm">Leña y carbón seleccionados para el ahumado perfecto.</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Compelling Image Layout */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-accentOrange to-accentRed rounded-2xl opacity-30 filter blur-lg" />
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" 
              alt="Parrilla e ingredientes de Sr Asadero" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}