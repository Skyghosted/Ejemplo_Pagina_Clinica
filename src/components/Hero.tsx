import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a2744] hero-pattern"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full opacity-6"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)', opacity: 0.06 }}
        />
        <div className="absolute top-[15%] left-[8%] w-[2px] h-[200px] bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent" />
        <div className="absolute top-[10%] right-[12%] w-[120px] h-[120px] border border-[#c9a84c]/15 rounded-full" />
        <div className="absolute top-[12%] right-[13%] w-[80px] h-[80px] border border-[#c9a84c]/10 rounded-full" />
        <div className="absolute bottom-[20%] right-[8%] w-[200px] h-[200px] border border-[#c9a84c]/10 rotate-45" />

        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" fill="#f8f9fa" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <div
            className={`section-label mb-6 flex items-center gap-3 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="w-8 h-[2px] bg-[#c9a84c]" />
            Clínica Dental en Valencia
            <span className="w-8 h-[2px] bg-[#c9a84c]" />
          </div>

          <h1
            className={`font-playfair text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 800,
              transitionDelay: '0.1s',
              lineHeight: 1.1,
            }}
          >
            Tu sonrisa{' '}
            <span className="italic gold-text-gradient">perfecta</span>
            <br />
            empieza aquí
          </h1>

          <p
            className={`font-inter text-white/75 mb-10 max-w-xl transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.7,
              fontWeight: 400,
              transitionDelay: '0.2s',
            }}
          >
            Más de 15 años cuidando la salud dental de las familias valencianas.
            Tecnología avanzada, equipo especializado y un trato cercano que
            te mereces.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <button
              onClick={() => handleScroll('#contacto')}
              className="btn-primary"
            >
              Pedir cita ahora
            </button>
            <button
              onClick={() => handleScroll('#servicios')}
              className="btn-outline"
            >
              Ver servicios
            </button>
          </div>

          <div
            className={`flex items-center gap-8 mt-14 pt-8 border-t border-white/10 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.45s' }}
          >
            {[
              { value: '+2.000', label: 'Pacientes' },
              { value: '+15', label: 'Años de experiencia' },
              { value: '98%', label: 'Satisfacción' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair text-[#c9a84c] text-2xl font-bold">{stat.value}</div>
                <div className="font-inter text-white/50 text-xs mt-0.5 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => handleScroll('#servicios')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#c9a84c] transition-colors duration-300 animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
