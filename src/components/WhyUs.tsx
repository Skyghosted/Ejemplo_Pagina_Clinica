import { Cpu, Users, Gift, CreditCard } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefits = [
  {
    icon: Cpu,
    title: 'Tecnología de última generación',
    description:
      'Equipamiento digital de vanguardia: radiografías 3D, escáneres intraorales y láser dental para diagnósticos precisos y tratamientos sin dolor.',
    delay: 'delay-100',
  },
  {
    icon: Users,
    title: 'Equipo especializado',
    description:
      'Cada tratamiento es realizado por el especialista más adecuado. Nuestro equipo se forma continuamente para ofrecerte siempre lo mejor.',
    delay: 'delay-200',
  },
  {
    icon: Gift,
    title: 'Primeras visitas sin coste',
    description:
      'Tu primera consulta de revisión y diagnóstico es completamente gratuita. Sin compromiso, sin sorpresas. Solo queremos conocerte.',
    delay: 'delay-300',
  },
  {
    icon: CreditCard,
    title: 'Financiación flexible',
    description:
      'Planes de pago a medida sin intereses hasta en 24 meses. Tu salud dental no puede esperar por motivos económicos.',
    delay: 'delay-400',
  },
];

function BenefitCard({ benefit }: { benefit: typeof benefits[0] }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`animate-fade-in-up ${benefit.delay} ${isVisible ? 'is-visible' : ''} relative group`}
    >
      <div className="bg-[#1e3060] rounded-2xl p-8 h-full card-hover border border-white/5 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle, #c9a84c, transparent)' }}
        />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-6 group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
            <Icon size={26} className="text-[#c9a84c]" strokeWidth={1.75} />
          </div>

          <h3
            className="font-playfair text-white text-xl mb-4"
            style={{ fontWeight: 700 }}
          >
            {benefit.title}
          </h3>

          <p
            className="font-inter text-white/60 text-sm leading-relaxed"
            style={{ lineHeight: 1.75 }}
          >
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyUs() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="por-que-nosotros" className="py-28 bg-[#1a2744] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-fade-in-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="section-label mb-4">¿Por qué elegirnos?</p>
          <h2 className="font-playfair text-white text-center mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.2 }}>
            La diferencia que
            <br />
            <span className="italic gold-text-gradient">marca la diferencia</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-inter text-white/60 max-w-xl mx-auto" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            Nos comprometemos con tu bienestar en cada paso del camino,
            desde la primera consulta hasta el resultado final.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
