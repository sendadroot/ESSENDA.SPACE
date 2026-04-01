import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-matte-black text-off-white/70 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <Link to="/" className="inline-block group">
            <img 
              src="/src/assets/logo.png" 
              alt="ESSENDA Logo" 
              className="h-5 md:h-6 w-auto transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="italic">ESSENDA — porque la vida no tiene que pesar tanto.</p>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/sobre-mi" className="hover:text-essenda-red transition-colors">Sobre mí</Link>
          <Link to="/acompanamientos" className="hover:text-essenda-red transition-colors">Acompañamientos</Link>
          <Link to="/contacto" className="hover:text-essenda-red transition-colors">Contacto</Link>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-essenda-red transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-essenda-red transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <div className="pt-4 border-t border-off-white/10 text-sm">
            <p>&copy; {currentYear} ESSENDA. Todos los derechos reservados.</p>
            <Link to="/aviso-legal" className="hover:text-essenda-red">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
