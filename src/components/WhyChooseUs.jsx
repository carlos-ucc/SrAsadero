import React from 'react';
import { motion } from 'framer-motion';
import { FaEgg, FaUsers, FaBicycle, FaUtensils } from 'react-icons/fa';

const features = [
  { icon: <FaEgg />, title: 'Ingredientes Frescos', desc: 'Todo es del campo o cortes certificados directos del día.' },
  { icon: <FaUsers />, title: 'Ambiente Familiar', desc: 'Espacios perfectamente adaptados para disfrutar con los tuyos.' },
  { icon: <FaBicycle />, title: 'Entrega Rápida', desc: 'Alianza de repartidores locales para mantener tu carne caliente.' },
  { icon: <FaUtensils />, title: 'Sabor Auténtico', desc: 'Dominio absoluto de la cocción tradicional con mezquite y carbón.' },
];

const stats = [
  { value: '15K+', label: 'Clientes felices' },
  { value: '40K+', label: 'Platillos servidos' },
  { value: '8+', label: 'Años de experiencia' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-darkBg text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-accentOrange font-bold uppercase tracking-widest text-xs">¿Por qué nosotros?</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black mt-2 uppercase">La Excelencia en <br/> Cada Detalle</h2>
            <div className="h-1 w-16 bg-accentOrange mt-4" />
          </div>
          <p className="text-grayText text-base sm:text-lg">
            Nos esmeramos en perfeccionar cada etapa de tu experiencia gastronómica. Desde la rigurosa selección de proveedores de carne hasta el empaque térmico para pedidos a domicilio.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((f, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-secondaryBg p-8 rounded-2xl border border-white/5 flex flex-col items-start"
            >
              <div className="text-3xl text-accentOrange mb-4 bg-darkBg p-3 rounded-xl border border-white/5">{f.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-white">{f.title}</h4>
              <p className="text-grayText text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Counters Counterfeit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-secondaryBg rounded-2xl p-10 border border-white/5 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="relative last:border-none md:border-r border-white/10 px-4">
              <div className="text-4xl sm:text-5xl font-black text-accentOrange mb-2 font-display">{s.value}</div>
              <div className="text-grayText uppercase tracking-wider text-xs font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}