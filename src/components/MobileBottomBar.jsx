import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUtensils, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function MobileBottomBar() {
  const actions = [
    { to: 'inicio', icon: <FaHome />, label: 'Inicio' },
    { to: 'menu', icon: <FaUtensils />, label: 'Menú' },
    { href: 'https://wa.me/5212290000000', icon: <FaWhatsapp />, label: 'WhatsApp', external: true },
    { to: 'ubicacion', icon: <FaMapMarkerAlt />, label: 'Ubicación' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-darkBg/95 backdrop-blur-md border-t border-white/10 z-50 flex justify-around items-center py-2 sm:hidden shadow-2xl">
      {actions.map((act, i) => {
        if (act.external) {
          return (
            <a 
              key={i} 
              href={act.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 text-grayText hover:text-accentOrange transition-colors"
            >
              <span className="text-xl">{act.icon}</span>
              <span className="text-[10px] font-medium uppercase tracking-wider">{act.label}</span>
            </a>
          );
        }
        return (
          <Link
            key={i}
            to={act.to}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-accentOrange"
            className="flex flex-col items-center gap-1 text-grayText cursor-pointer transition-colors"
          >
            <span className="text-xl">{act.icon}</span>
            <span className="text-[10px] font-medium uppercase tracking-wider">{act.label}</span>
          </Link>
        );
      })}
    </div>
  );
}