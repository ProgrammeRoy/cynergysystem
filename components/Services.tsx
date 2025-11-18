import React from 'react';
import { ScanEye, Layers, MonitorPlay, Box } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Recorridos Virtuales 360°",
    description: "Permite a tus clientes caminar por tus espacios desde cualquier lugar del mundo. Ideal para bienes raíces y hotelería.",
    icon: <ScanEye className="w-8 h-8 text-primary" />
  },
  {
    title: "Visualización Arquitectónica",
    description: "Renders hiperrealistas de alto impacto para pre-venta inmobiliaria y concursos de arquitectura.",
    icon: <Layers className="w-8 h-8 text-secondary" />
  },
  {
    title: "Experiencias WebGL",
    description: "Interactividad 3D nativa en el navegador. Configuradores de producto y museos virtuales sin descargas.",
    icon: <MonitorPlay className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Gemelos Digitales",
    description: "Réplicas digitales exactas de activos físicos para gestión de instalaciones, entrenamiento y preservación.",
    icon: <Box className="w-8 h-8 text-emerald-400" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Utilizamos tecnología de vanguardia para crear herramientas de venta y educación visualmente impactantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all duration-300 group hover:transform hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl inline-block group-hover:bg-slate-800 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};