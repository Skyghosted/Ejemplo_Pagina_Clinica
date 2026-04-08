const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  'Ortodoncia',
  'Implantes dentales',
  'Estética dental',
  'Limpieza profesional',
  'Odontología infantil',
  'Urgencias dentales',
];

const handleNavClick = (href: string) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1d3a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#c9a84c] flex items-center justify-center">
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
            </div>
            <p className="font-inter text-white/50 text-sm mb-6" style={{ lineHeight: 1.75 }}>
              Tu clínica dental de confianza en Valencia. Cuidando sonrisas
              desde 2008 con excelencia y dedicación.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              <span className="font-inter text-white/60 text-xs">Calle Colón, 48, 46004 Valencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              <span className="font-inter text-white/60 text-xs">+34 963 45 67 89</span>
            </div>
          </div>

          <div>
            <h4 className="font-inter text-white text-xs font-700 uppercase tracking-widest mb-5" style={{ fontWeight: 700 }}>
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-inter text-white/50 text-sm hover:text-[#c9a84c] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#c9a84c] group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-white text-xs font-700 uppercase tracking-widest mb-5" style={{ fontWeight: 700 }}>
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#servicios')}
                    className="font-inter text-white/50 text-sm hover:text-[#c9a84c] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#c9a84c] group-hover:w-3 transition-all duration-200" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-white text-xs font-700 uppercase tracking-widest mb-5" style={{ fontWeight: 700 }}>
              Horario
            </h4>
            <div className="space-y-3">
              {[
                { day: 'Lunes – Viernes', hours: '9:00 – 20:00' },
                { day: 'Sábados', hours: '9:00 – 14:00' },
                { day: 'Domingos', hours: 'Cerrado' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="font-inter text-white/50 text-xs">{day}</span>
                  <span className={`font-inter text-xs font-semibold ${hours === 'Cerrado' ? 'text-white/30' : 'text-[#c9a84c]'}`}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => handleNavClick('#contacto')}
                className="btn-primary w-full text-center text-xs py-3"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Pedir cita ahora
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/30 text-xs text-center sm:text-left">
            © 2025 Clínica Dental Sonrisa. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {['Política de privacidad', 'Aviso legal', 'Cookies'].map((item) => (
              <button
                key={item}
                className="font-inter text-white/30 text-xs hover:text-white/60 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
