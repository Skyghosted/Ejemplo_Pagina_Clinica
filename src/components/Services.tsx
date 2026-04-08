import { Smile, Shield, Sparkles, Droplets, Heart, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Smile,
    title: 'Ortodoncia',
    description: 'Brackets metálicos, de zafiro y alineadores invisibles para una sonrisa perfectamente alineada.',
    delay: 'delay-100',
  },
  {
    icon: Shield,
    title: 'Implantes dentales',
    description: 'Soluciones permanentes de titanio con resultados naturales y funcionalidad completa.',
    delay: 'delay-200',
  },
  {
    icon: Sparkles,
    title: 'Estética dental',
    description: 'Blanqueamiento, carillas de porcelana y diseño de sonrisa para resultados transformadores.',
    delay: 'delay-300',
  },
  {
    icon: Droplets,
    title: 'Limpieza profesional',
    description: 'Higiene oral profunda con ultrasonidos para mantener tus encías y dientes en perfecto estado.',
    delay: 'delay-100',
  },
  {
    icon: Heart,
    title: 'Odontología infantil',
    description: 'Atención especializada y cariñosa para los más pequeños, con ambiente tranquilo y seguro.',
    delay: 'delay-200',
  },
  {
    icon: Zap,
    title: 'Urgencias dentales',
    description: 'Atención rápida y efectiva para dolores agudos, roturas y emergencias dentales urgentes.',
    delay: 'delay-300',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`animate-fade-in-up ${service.delay} ${isVisible ? 'is-visible' : ''} bg-white rounded-xl p-8 card-hover shadow-[0_4px_24px_rgba(26,39,68,0.07)] border border-gray-100/80 group`}
    >
      <div className="w-14 h-14 rounded-xl bg-[#f8f9fa] flex items-center justify-center mb-6 group-hover:bg-[#1a2744] transition-colors duration-300">
        <Icon
          size={26}
          className="text-[#c9a84c] group-hover:text-[#c9a84c] transition-colors duration-300"
          strokeWidth={1.75}
        />
      </div>
      <h3 className="font-playfair text-[#1a2744] text-xl font-700 mb-3" style={{ fontWeight: 700 }}>
        {service.title}
      </h3>
      <p className="font-inter text-slate-500 text-sm leading-relaxed" style={{ lineHeight: 1.7 }}>
        {service.description}
      </p>
      <div className="mt-6 flex items-center gap-2 text-[#c9a84c] font-inter text-sm font-600 group-hover:gap-3 transition-all duration-200" style={{ fontWeight: 600 }}>
        <span>Saber más</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-fade-in-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="section-label mb-4">Nuestros servicios</p>
          <h2 className="section-title mb-4">
            Tratamientos de excelencia
            <br />
            <span className="italic">para cada necesidad</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-inter text-slate-500 max-w-xl mx-auto" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            Ofrecemos una atención integral de la salud bucodental con los
            tratamientos más avanzados y un equipo altamente cualificado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
