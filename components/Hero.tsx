import React from 'react';
import { ArrowRight, Cuboid } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darker">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/80 to-darker z-10" />
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="3D Abstract Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 backdrop-blur-sm">
          <Cuboid className="w-4 h-4 text-primary" />
          <span className="text-sm text-slate-300 font-medium">El futuro es inmersivo</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Digitaliza Tu Mundo en <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tres Dimensiones</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Transformamos espacios físicos en experiencias digitales interactivas para inmobiliarias, museos y empresas visionarias.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            Cotizar Proyecto
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#portfolio" 
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm"
          >
            Ver Portafolio
          </a>
        </div>
      </div>
    </div>
  );
};