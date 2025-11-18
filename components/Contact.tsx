import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-darker border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Empecemos tu Proyecto</h2>
            <p className="text-slate-400 mb-10 text-lg">
              ¿Listo para llevar tu negocio a la siguiente dimensión? Cuéntanos tu idea y te asesoraremos sobre la mejor solución tecnológica.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-slate-400">info@vistral3d.com</p>
                  <p className="text-slate-500 text-sm">Respuesta en menos de 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                  <p className="text-slate-400">+34 900 123 456</p>
                  <p className="text-slate-500 text-sm">Lun-Vie, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-emerald-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Estudio</h4>
                  <p className="text-slate-400">Av. Innovación 2025, Distrito Tecnológico</p>
                  <p className="text-slate-500 text-sm">Ciudad de México, MX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nombre</label>
                  <input type="text" id="name" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="tu@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-slate-400 mb-2">Industria</label>
                <select id="industry" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                  <option>Inmobiliaria</option>
                  <option>Turismo</option>
                  <option>Museos</option>
                  <option>Educación</option>
                  <option>Entretenimiento</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
                <textarea id="message" rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg">
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};