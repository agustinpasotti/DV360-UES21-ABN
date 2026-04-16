import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/slides/Hero';
import { ProgrammaticIntro } from './components/slides/ProgrammaticIntro';
import { Ecosystem } from './components/slides/Ecosystem';
import { Dv360Features } from './components/slides/Dv360Features';
import { ChannelsStrategy } from './components/slides/ChannelsStrategy';
import { KpiSection } from './components/slides/KpiSection';
import { BuyingModels } from './components/slides/BuyingModels';
import { ProposalDetail } from './components/slides/ProposalDetail';
import { AbnServices } from './components/slides/AbnServices';
// import { AIAssistance } from './components/AIAssistance';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-ues21-green selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProgrammaticIntro />
        <Ecosystem />
        <Dv360Features />
        <ChannelsStrategy />
        <KpiSection />
        <BuyingModels />
        <ProposalDetail />
        <AbnServices />
      </main>
      
      <footer className="bg-ues21-dark text-slate-400 py-6 text-center text-xs">
        <p>© {new Date().getFullYear()} Universidad Siglo 21 | Proposal by ABN Digital</p>
      </footer>

      {/* <AIAssistance /> */}
    </div>
  );
};

export default App;