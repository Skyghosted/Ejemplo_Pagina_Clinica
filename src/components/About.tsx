import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '+2.000', label: 'pacientes', sub: 'confían en nosotros' },
  { value: '+15', label: 'años', sub: 'de experiencia' },
  { value: '98%', label: 'satisfacción', sub: 'de nuestros pacientes' },
];

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            ref={leftRef}
            className={`animate-fade-in-left ${leftVisible ? 'is-visible' : ''}`}
          >
            <p className="section-label mb-4">Quiénes somos</p>
            <h2 className="section-title mb-6">
              Más de una década
              <br />
              <span className="italic">dedicada a tu salud</span>
            </h2>
            <div className="divider-gold mb-8" />

            <div className="space-y-5 font-inter text-slate-600 mb-12" style={{ lineHeight: 1.8 }}>
              <p>
                Desde 2008, la <strong className="text-[#1a2744] font-semibold">Clínica Dental Sonrisa</strong> ha
                sido el referente de la salud bucodental en Valencia. Fundada con
                la visión de democratizar la odontología de alta calidad, hemos
                combinado tecnología de vanguardia con un trato humano y cercano.
              </p>
              <p>
                Nuestro equipo de especialistas altamente formados trabaja con un
                único objetivo: ofrecerte los mejores resultados de forma segura,
                cómoda y a precios accesibles. Porque creemos que una sonrisa
                perfecta está al alcance de todos.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#f8f9fa] rounded-xl p-5 border border-gray-100 text-center hover:border-[#c9a84c]/40 transition-colors duration-300"
                >
                  <div className="stat-number">{stat.value}</div>
                  <div className="font-inter text-[#1a2744] text-sm font-semibold mt-1 capitalize">
                    {stat.label}
                  </div>
                  <div className="font-inter text-slate-400 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`animate-fade-in-right ${rightVisible ? 'is-visible' : ''} relative`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-[#1a2744] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-2/3 h-2/3 rounded-bl-[100px] opacity-20"
                  style={{ background: 'linear-gradient(225deg, #c9a84c, transparent)' }}
                />
              </div>

              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-[#1e3060] to-[#0f1d3a] flex items-center justify-center shadow-2xl">
                <div className="text-center px-8">
                  <div
                    className="font-playfair text-white mb-3 italic"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.5 }}
                  >
                    "Nuestra misión es devolverte la confianza de sonreír cada día"
                  </div>
                  <div className="divider-gold mx-auto mb-4" />
                  <div className="font-inter text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
                    Dr. Martínez
                  </div>
                  <div className="font-inter text-white/50 text-xs mt-1">
                    Director Clínico
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-[#c9a84c] flex flex-col items-center justify-center shadow-xl">
                <div className="font-playfair text-[#1a2744] text-3xl font-800" style={{ fontWeight: 800 }}>A+</div>
                <div className="font-inter text-[#1a2744]/70 text-xs font-semibold mt-0.5 uppercase tracking-wide">Calidad</div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl border-2 border-[#c9a84c]/40 rotate-12" />
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-xl border border-[#c9a84c]/20 rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
