import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  { q: '¿Tienen servicio a domicilio?', a: 'Sí, contamos con entrega a domicilio directa cubriendo toda la zona de Costa Verde y sus alrededores, además de alianzas estratégicas para envíos rápidos.' },
  { q: '¿Aceptan tarjeta?', a: 'Por supuesto. Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard y American Express) tanto en establecimiento como para pago contra entrega.' },
  { q: '¿Hay estacionamiento?', a: 'Contamos con un área de estacionamiento dedicada al frente y servicio de Valet Parking sin costo los fines de semana.' },
  { q: '¿Tienen paquetes familiares?', a: 'Sí, nuestras parrilladas especiales funcionan perfectamente como paquetes para compartir de 2, 4 y hasta 6 personas con entradas incluidas.' }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-darkBg text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accentOrange font-bold uppercase tracking-widest text-xs">Resolviendo dudas</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mt-2">Preguntas Frecuentes</h2>
          <div className="h-1 w-16 bg-accentOrange mx-auto mt-4" />
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-secondaryBg rounded-xl overflow-hidden border border-white/5">
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex justify-between items-center font-semibold text-base sm:text-lg hover:bg-white/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-accentOrange">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/5 bg-black/20"
                    >
                      <p className="p-6 text-grayText text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}