import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['inicio', 'servicios', 'nosotros', 'por-que-nosotros', 'testimonios', 'contacto'];
      let current = 'inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#1a2744] shadow-[0_2px_40px_rgba(26,39,68,0.3)]'
          : 'bg-transparent'
      }`}
      style={{ transitionDuration: '400ms' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('#inicio')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <div>
              <div className="font-playfair font-700 text-white text-base leading-tight" style={{ fontWeight: 700 }}>
                Clínica Dental
              </div>
              <div className="text-[#c9a84c] text-xs font-inter font-500 tracking-widest uppercase" style={{ fontWeight: 500 }}>
                Sonrisa
              </div>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id || (id === 'nosotros' && activeSection === 'por-que-nosotros');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link ${isActive ? 'active text-[#c9a84c]' : 'text-white/80 hover:text-white'}`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('#contacto')}
              className="btn-primary ml-4 text-sm"
            >
              Pedir cita
            </button>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1a2744] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left nav-link text-base ${isActive ? 'active text-[#c9a84c]' : 'text-white/80'}`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('#contacto')}
              className="btn-primary text-center mt-2"
            >
              Pedir cita
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
