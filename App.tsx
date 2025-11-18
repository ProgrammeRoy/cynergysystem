import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChatBot } from './components/AIChatBot';

function App() {
  return (
    <div className="min-h-screen bg-darker text-slate-200 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
}

export default App;