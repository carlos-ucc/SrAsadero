import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaDirections } from 'react-icons/fa';

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-secondaryBg text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Details Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accentOrange font-bold uppercase tracking-widest text-xs">Visítanos</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2 mb-8 uppercase">Ubicación y Horarios</h2>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="text-2xl text-accentOrange mt-1"><FaMapMarkerAlt /></div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Dirección</h4>
                <p className="text-grayText text-sm leading-relaxed">Blvd. Adolfo Ruiz Cortines, Costa Verde, Veracruz, México.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl text-accentOrange mt-1"><FaClock /></div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Horarios de Atención</h4>
                <p className="text-grayText text-sm mb-1">Lunes a Jueves: 1:00 PM - 11:00 PM</p>
                <p className="text-grayText text-sm">Viernes a Domingo: 8:00 AM - 12:00 AM</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Blvd.+Adolfo+Ruiz+Cortines,+Costa+Verde,+Veracruz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accentOrange to-accentRed text-white font-bold px-6 py-3.5 rounded-xl hover:shadow-glow-orange transition-all duration-300"
            >
              <FaDirections /> Cómo Llegar
            </a>
          </motion.div>

          {/* Interactive Map Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
          >
            <iframe 
              title="Google Maps Location - Sr Asadero"
              src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3768.962137530635!2d-96.1158914!3d19.1640576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3413da66ef065%3A0x633b4d4554b73b22!2sBlvd.%20Adolfo%20Ruiz%20Cortines%2C%20Costa%20Verde%2C%20Veracruz!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}