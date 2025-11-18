import React, { useState } from 'react';
import { IndustryType, IndustryFeature } from '../types';
import { Building2, Plane, GraduationCap, Landmark, Ticket } from 'lucide-react';

const features: IndustryFeature[] = [
  {
    type: IndustryType.REAL_ESTATE,
    title: "Inmobiliaria & Construcción",
    description: "Acelera las ventas con recorridos inmersivos que filtran prospectos calificados antes de la visita física.",
    benefits: ["Open House 24/7", "Medición de espacios remota", "Renders de preventa"],
    icon: <Building2 className="w-6 h-6" />
  },
  {
    type: IndustryType.TOURISM,
    title: "Turismo & Hospitalidad",
    description: "Inspira a viajeros mostrando tus instalaciones, habitaciones y amenidades con total transparencia.",
    benefits: ["Aumento de reservas directas", "Confianza del cliente", "Experiencia de marca"],
    icon: <Plane className="w-6 h-6" />
  },
  {
    type: IndustryType.MUSEUMS,
    title: "Arte & Cultura",
    description: "Democratiza el acceso a la cultura digitalizando exposiciones y sitios históricos para audiencias globales.",
    benefits: ["Preservación digital", "Acceso educativo global", "Experiencias aumentadas"],
    icon: <Landmark className="w-6 h-6" />
  },
  {
    type: IndustryType.EDUCATION,
    title: "Educación & Entrenamiento",
    description: "Entornos seguros para entrenamiento técnico y aulas virtuales que rompen barreras geográficas.",
    benefits: ["Entrenamiento sin riesgos", "Gamificación del aprendizaje", "Laboratorios virtuales"],
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    type: IndustryType.ENTERTAINMENT,
    title: "Entretenimiento & Eventos",
    description: "Crea hype para tus eventos o extiende la vida de los mismos con experiencias post-evento inmersivas.",
    benefits: ["Escenarios virtuales", "Activaciones de marca", "Recuerdos digitales"],
    icon: <Ticket className="w-6 h-6" />
  }
];

export const Industries: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryType>(IndustryType.REAL_ESTATE);

  const activeFeature = features.find(f => f.type === activeIndustry) || features[0];

  return (
    <section id="industries" className="py-24 bg-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soluciones por Industria</h2>
          <p className="text-slate-400">Adaptamos nuestra tecnología a las necesidades específicas de tu sector.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {features.map((item) => (
              <button
                key={item.type}
                onClick={() => setActiveIndustry(item.type)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeIndustry === item.type 
                    ? 'bg-slate-800 border-l-4 border-primary text-white shadow-lg' 
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <div className={`${activeIndustry === item.type ? 'text-primary' : 'text-slate-500'}`}>
                  {item.icon}
                </div>
                <span className="font-medium">{item.type}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 h-full relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    {activeFeature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{activeFeature.title}</h3>
                </div>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {activeFeature.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Beneficios Clave</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeFeature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-200">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <img 
                    src={`https://picsum.photos/800/400?random=${activeIndustry}`} 
                    alt={activeFeature.title}
                    className="w-full h-64 object-cover rounded-xl border border-slate-600/50 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};