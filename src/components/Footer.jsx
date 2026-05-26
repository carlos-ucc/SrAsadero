import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Block */}
        <div>
          <span className="font-display text-2xl font-black uppercase tracking-wider block mb-4">
            Sr.<span className="text-accentOrange"> Asadero</span>
          </span>
          <p className="text-grayText text-sm leading-relaxed mb-6">
            Cortes finos, parrilladas y los mejores tacos al carbón de la costa veracruzana. Calidad insuperable.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="text-grayText hover:text-white transition-colors" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="text-grayText hover:text-white transition-colors" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/5212290000000" className="text-grayText hover:text-white transition-colors" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Links Navigation */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-accentOrange mb-4">Explora</h4>
          <div className="flex flex-col gap-2.5 text-sm text-grayText">
            {['Inicio', 'Nosotros', 'Menu', 'Galeria', 'Opiniones'].map((l) => (
              <Link key={l} to={l.toLowerCase()} smooth={true} className="hover:text-white cursor-pointer transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Info Contact */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-accentOrange mb-4">Ubicación</h4>
          <p className="text-grayText text-sm leading-relaxed">
            Blvd. Adolfo Ruiz Cortines,<br/> Costa Verde, Veracruz, México.
          </p>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-accentOrange mb-4">Servicio</h4>
          <p className="text-grayText text-sm mb-1">Lun - Jue: 1:00 PM - 11:00 PM</p>
          <p className="text-grayText text-sm">Vie - Dom: 8:00 AM - 12:00 AM</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 text-center md:flex md:justify-between text-xs text-white/40">
        <p>© {new Date().getFullYear()} Sr. Asadero. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">Diseñado con orgullo en Veracruz.</p>
      </div>
    </footer>
  );
}