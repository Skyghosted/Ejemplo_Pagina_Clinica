import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote:
      'Me cambiaron la vida. Llevaba años con complejos por mi sonrisa y después del tratamiento de ortodoncia me siento una persona completamente diferente. El equipo es increíble, paciente y muy profesional.',
    name: 'María García',
    city: 'Valencia',
    service: 'Ortodoncia invisible',
    initials: 'MG',
    delay: 'delay-100',
  },
  {
    quote:
      'Vine con mucho miedo después de años sin ir al dentista. La Dra. Sánchez me hizo sentir cómodo desde el primer minuto. El implante quedó perfecto y el precio fue muy razonable con la financiación.',
    name: 'Carlos Martínez',
    city: 'Torrent',
    service: 'Implante dental',
    initials: 'CM',
    delay: 'delay-200',
  },
  {
    quote:
      'El blanqueamiento y las carillas superaron todas mis expectativas. Ahora sonrío en todas las fotos sin pudor. La atención es de primera, siempre puntual y muy detallista. Los recomiendo al 100%.',
    name: 'Laura Fernández',
    city: 'Paterna',
    service: 'Estética dental',
    initials: 'LF',
    delay: 'delay-300',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c9a84c" stroke="none">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-fade-in-up ${testimonial.delay} ${isVisible ? 'is-visible' : ''} bg-white rounded-2xl p-8 card-hover shadow-[0_4px_32px_rgba(26,39,68,0.08)] border border-gray-100 flex flex-col h-full`}
    >
      <StarRating />

      <div className="mb-2">
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
          <path d="M0 20V12.4C0 5.4667 2.8 1.2 8.4 0L10 2.4C7.4667 3.2 6 5.2 5.6 8H11.2V20H0ZM16.8 20V12.4C16.8 5.4667 19.6 1.2 25.2 0L26.8 2.4C24.2667 3.2 22.8 5.2 22.4 8H28V20H16.8Z" fill="#c9a84c" opacity="0.25"/>
        </svg>
      </div>

      <p
        className="font-inter text-slate-600 flex-1 mb-8"
        style={{ fontSize: '0.9375rem', lineHeight: 1.8, fontStyle: 'italic' }}
      >
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-[#1a2744] flex items-center justify-center flex-shrink-0">
          <span className="font-playfair text-[#c9a84c] text-sm font-bold">{testimonial.initials}</span>
        </div>
        <div>
          <div className="font-inter text-[#1a2744] font-semibold text-sm">{testimonial.name}</div>
          <div className="font-inter text-slate-400 text-xs mt-0.5">{testimonial.city} · {testimonial.service}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="testimonios" className="py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-fade-in-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="section-label mb-4">Testimonios</p>
          <h2 className="section-title mb-4">
            Lo que dicen nuestros
            <br />
            <span className="italic">pacientes</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-inter text-slate-500 max-w-lg mx-auto" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            Más de 2.000 pacientes ya han confiado en nosotros.
            Sus palabras son nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c" stroke="none">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <span className="font-inter text-[#1a2744] text-sm font-semibold">4.9 / 5</span>
            <span className="font-inter text-slate-400 text-sm">basado en +350 reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
