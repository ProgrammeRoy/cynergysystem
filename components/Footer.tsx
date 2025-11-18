import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Vistral 3D. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};