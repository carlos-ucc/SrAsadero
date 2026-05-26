import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5212290000000?text=Hola,%20me%20gustaria%20revisar%20la%20carta%20y%20ordenar."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 md:bottom-6 z-40 bg-green-500 text-white p-4 rounded-full text-3xl shadow-glow-orange cursor-pointer hover:scale-110 transition-transform hidden sm:flex items-center justify-center"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  );
}