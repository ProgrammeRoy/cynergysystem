import React, { useState } from 'react';
import { PortfolioItem, IndustryType } from '../types';
import { ExternalLink } from 'lucide-react';

const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: "Residencial Luxury Heights",
    category: IndustryType.REAL_ESTATE,
    imageUrl: "https://picsum.photos/600/400?random=1",
    description: "Recorrido Matterport para penthouse de lujo."
  },
  {
    id: '2',
    title: "Museo de Historia Natural",
    category: IndustryType.MUSEUMS,
    imageUrl: "https://picsum.photos/600/400?random=2",
    description: "Digitalización de sala de fósiles con fotogrametría."
  },
  {
    id: '3',
    title: "Hotel Riviera Maya",
    category: IndustryType.TOURISM,
    imageUrl: "https://picsum.photos/600/400?random=3",
    description: "Experiencia inmersiva de suites y áreas comunes."
  },
  {
    id: '4',
    title: "Campus Universitario Virtual",
    category: IndustryType.EDUCATION,
    imageUrl: "https://picsum.photos/600/400?random=4",
    description: "Recorrido interactivo para nuevos estudiantes."
  },
  {
    id: '5',
    title: "Torre Corporativa Zenit",
    category: IndustryType.REAL_ESTATE,
    imageUrl: "https://picsum.photos/600/400?random=5",
    description: "Renders 360 para preventa de oficinas."
  },
  {
    id: '6',
    title: "Concierto Virtual VR",
    category: IndustryType.ENTERTAINMENT,
    imageUrl: "https://picsum.photos/600/400?random=6",
    description: "Escenario 3D para evento musical en vivo."
  }
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<IndustryType | 'Todos'>('Todos');

  const filteredItems = filter === 'Todos' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portafolio Destacado</h2>
          <p className="text-slate-400">Explora nuestros proyectos más recientes.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('Todos')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'Todos' ? 'bg-primary text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Todos
          </button>
          {Object.values(IndustryType).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === type ? 'bg-primary text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl bg-slate-900 shadow-xl border border-slate-800">
              <div className="aspect-w-16 aspect-h-10 relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">{item.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-300 mb-4">{item.description}</p>
                    <button className="text-white flex items-center gap-2 text-sm font-medium hover:underline">
                      Ver Proyecto <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};