import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { submitCita, type CitaFormData } from '../lib/supabase';

const servicios = [
  'Ortodoncia',
  'Implantes dentales',
  'Estética dental',
  'Limpieza profesional',
  'Odontología infantil',
  'Urgencias dentales',
  'Revisión general',
  'Otro',
];

const contactInfo = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Calle Colón, 48, 3º\n46004 Valencia, España',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+34 963 45 67 89',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@clinicasonrisa.es',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lunes a Viernes: 9:00 – 20:00\nSábados: 9:00 – 14:00',
  },
];

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  const [form, setForm] = useState<CitaFormData>({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.telefono || !form.servicio) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }
    setLoading(true);
    try {
      await submitCita(form);
      setSuccess(true);
      setForm({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
    } catch {
      setError('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Contacto</p>
          <h2 className="section-title mb-4">
            Reserva tu cita
            <br />
            <span className="italic">sin compromiso</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-inter text-slate-500 max-w-lg mx-auto" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            Primera visita gratuita. Te llamamos en menos de 24 horas para
            confirmar tu cita en el horario que mejor te convenga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div
            ref={leftRef}
            className={`lg:col-span-3 animate-fade-in-left ${leftVisible ? 'is-visible' : ''}`}
          >
            <div className="bg-[#f8f9fa] rounded-2xl p-8 lg:p-10 border border-gray-100">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-playfair text-[#1a2744] text-2xl font-bold mb-3">
                    ¡Solicitud enviada!
                  </h3>
                  <p className="font-inter text-slate-500 max-w-sm" style={{ lineHeight: 1.75 }}>
                    Hemos recibido tu solicitud de cita. Nos pondremos en contacto
                    contigo en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-primary mt-8"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Nombre completo *</label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Teléfono *</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+34 600 000 000"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Servicio de interés *</label>
                      <select
                        name="servicio"
                        value={form.servicio}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecciona un servicio</option>
                        {servicios.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos brevemente tu situación o cualquier duda que tengas..."
                      rows={4}
                      className="form-input resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle size={18} className="text-red-500 flex-shrink-0" />
                      <p className="font-inter text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-center"
                    style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                  >
                    {loading ? 'Enviando...' : 'Solicitar cita'}
                  </button>

                  <p className="font-inter text-slate-400 text-xs text-center" style={{ lineHeight: 1.6 }}>
                    Al enviar este formulario aceptas nuestra política de privacidad.
                    Tus datos serán tratados con total confidencialidad.
                  </p>
                </form>
              )}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`lg:col-span-2 animate-fade-in-right ${rightVisible ? 'is-visible' : ''} flex flex-col justify-center`}
          >
            <h3 className="font-playfair text-[#1a2744] text-2xl font-700 mb-8" style={{ fontWeight: 700 }}>
              Información de contacto
            </h3>

            <div className="space-y-7">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#1a2744] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c] transition-colors duration-300 mt-0.5">
                    <Icon size={18} className="text-[#c9a84c] group-hover:text-[#1a2744] transition-colors duration-300" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="font-inter text-[#1a2744] text-xs font-semibold uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    <div className="font-inter text-slate-600 text-sm" style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#1a2744] rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-inter text-white text-sm font-semibold">Urgencias disponibles</span>
              </div>
              <p className="font-inter text-white/60 text-sm" style={{ lineHeight: 1.7 }}>
                Para urgencias dentales, llámanos directamente al{' '}
                <span className="text-[#c9a84c] font-semibold">+34 963 45 67 89</span>.
                Te atenderemos lo antes posible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
