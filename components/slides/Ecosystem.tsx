import React from 'react';
import { Section } from '../Section';
import { SECTIONS, ASSETS } from '../../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Ecosystem: React.FC = () => {
  return (
    <Section id={SECTIONS.SOLUTION} className="bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-ues21-green mb-2">Solución Integral</h2>
        <p className="text-slate-500">El flujo de trabajo propuesto para Universidad Siglo 21</p>
      </motion.div>

      <div className="relative overflow-x-auto pb-12 hide-scrollbar">
        <div className="min-w-[1000px] flex items-center justify-between gap-4 px-4">
          
          {/* Client */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 w-40 shrink-0"
          >
            <span className="text-ues21-dark font-bold text-sm uppercase tracking-wide">Anunciante</span>
            <div className="w-full aspect-square bg-white rounded-full shadow-lg border-4 border-ues21-green flex items-center justify-center p-4 relative z-10 overflow-hidden">
                <img src={ASSETS.logoUES21} alt="Universidad Siglo 21" className="w-full" />
            </div>
            <span className="font-bold text-lg text-slate-800">Universidad Siglo 21</span>
          </motion.div>

          <ArrowRight className="text-slate-300 w-8 h-8 shrink-0" />

          {/* Agency */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-4 w-32 shrink-0"
          >
            <span className="text-ues21-dark font-bold text-sm uppercase tracking-wide">Agencia</span>
            <div className="w-24 h-24 bg-abn-dark rounded-full shadow-lg flex items-center justify-center p-2 relative z-10">
                <img src={ASSETS.logoABNWhite} alt="ABN" className="w-full" />
            </div>
            <span className="font-bold text-lg text-slate-800">ABN</span>
          </motion.div>

          {/* THE BIG BOX - Programmatic Env */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 border-2 border-dashed border-ues21-green rounded-3xl p-6 bg-ues21-green/5 relative"
          >
             <div className="absolute -top-3 left-6 bg-ues21-green text-white px-3 py-1 text-xs font-bold rounded-full">
                Entorno Programático
             </div>

             <div className="flex items-center justify-between gap-2">
                
                {/* DSP */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">DSP</span>
                    <div className="w-32 py-4 bg-white border border-ues21-green/20 rounded-lg shadow-sm flex flex-col items-center justify-center gap-1">
                        <img 
                          src={ASSETS.logoDV360} 
                          alt="DV360" 
                          className="h-6 w-auto"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-[10px] text-slate-400">Demand Side Platform</div>
                    </div>
                </div>

                <div className="h-px bg-slate-300 w-8"></div>

                {/* Ad Exchange */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">AdExchange</span>
                    <div className="w-32 py-4 bg-gradient-to-r from-ues21-green to-ues21-accent rounded-lg shadow-sm text-center text-white font-bold text-sm">
                        Google AdX
                    </div>
                </div>

                <div className="h-px bg-slate-300 w-8"></div>

                {/* SSP */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">SSP</span>
                    <div className="flex flex-col gap-2">
                        <div className="px-3 py-1 bg-white border border-slate-200 rounded flex items-center justify-center h-8 w-24">
                            <img src={ASSETS.logoHypeAds} alt="HypeAds" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <div className="px-3 py-1 bg-white border border-slate-200 rounded flex items-center justify-center h-8 w-24">
                            <img src={ASSETS.logoLatinAd} alt="LatinAd" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <div className="px-3 py-1 bg-white border border-slate-200 rounded flex items-center justify-center h-8 w-24">
                            <img src={ASSETS.logoHBOMax} alt="HBO Max" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                        </div>
                    </div>
                </div>

             </div>
          </motion.div>

          <ArrowRight className="text-slate-300 w-8 h-8 shrink-0" />

          {/* Media */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4 w-40 shrink-0"
          >
             <span className="text-ues21-dark font-bold text-sm uppercase tracking-wide">Medios</span>
             <div className="grid grid-cols-2 gap-2">
                 <div className="w-12 h-12 bg-white border border-slate-100 rounded-lg flex items-center justify-center p-1 shadow-sm">
                    <img src={ASSETS.logoHBOMax} alt="HBO Max" className="w-full h-auto" referrerPolicy="no-referrer" />
                 </div>
                 <div className="w-12 h-12 bg-white border border-slate-100 rounded-lg flex items-center justify-center p-1 shadow-sm">
                    <img src={ASSETS.logoPlutoTV} alt="Pluto TV" className="w-full h-auto" referrerPolicy="no-referrer" />
                 </div>
                 <div className="w-12 h-12 bg-white border border-slate-100 rounded-lg flex items-center justify-center p-1 shadow-sm">
                    <img src={ASSETS.logoPrimeVideo} alt="Prime Video" className="w-full h-auto" referrerPolicy="no-referrer" />
                 </div>
                 <div className="w-12 h-12 bg-white border border-slate-100 rounded-lg flex items-center justify-center p-1 shadow-sm">
                    <img src={ASSETS.logoInfobae} alt="Infobae" className="w-full h-auto" referrerPolicy="no-referrer" />
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};