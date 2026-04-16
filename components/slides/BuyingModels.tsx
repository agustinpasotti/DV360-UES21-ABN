import React from 'react';
import { Section } from '../Section';
import { SECTIONS, ASSETS } from '../../constants';
import { Shield, ShieldCheck, Zap, Globe } from 'lucide-react';
import { BuyingType } from '../../types';
import { motion } from 'motion/react';

export const BuyingModels: React.FC = () => {
  return (
    <Section id={SECTIONS.BUYING} className="bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-ues21-green mb-4 flex items-center gap-4">
          Tipos de Compra en 
          <img src={ASSETS.logoDV360} alt="DV360" className="h-10 md:h-12 w-auto inline-block" referrerPolicy="no-referrer" />
        </h2>
        <p className="text-slate-600">Desde el mercado abierto hasta acuerdos garantizados.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Open Auction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-ues21-green/30 flex flex-col"
        >
            <div className="bg-ues21-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-ues21-green w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{BuyingType.OPEN}</h3>
            <span className="text-xs font-semibold text-slate-400 uppercase mb-4">Real Time Bidding</span>
            <ul className="text-sm text-slate-600 space-y-2 mb-6 flex-grow">
                <li>• No garantizado</li>
                <li>• Menor control</li>
                <li>• Inventario masivo</li>
            </ul>
        </motion.div>

        {/* PMP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-ues21-green/60 flex flex-col"
        >
            <div className="bg-ues21-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-ues21-green w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{BuyingType.PMP}</h3>
            <span className="text-xs font-semibold text-slate-400 uppercase mb-4">Subasta Privada</span>
            <ul className="text-sm text-slate-600 space-y-2 mb-6 flex-grow">
                <li>• No garantizado</li>
                <li>• Mayor calidad</li>
                <li>• Publisher invita</li>
            </ul>
        </motion.div>

        {/* Preferred Deal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-ues21-green flex flex-col"
        >
            <div className="bg-ues21-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-ues21-green w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{BuyingType.PD}</h3>
            <span className="text-xs font-semibold text-slate-400 uppercase mb-4">Precio Fijo</span>
            <ul className="text-sm text-slate-600 space-y-2 mb-6 flex-grow">
                <li>• No garantizado</li>
                <li>• Acceso prioritario</li>
                <li>• Sin subasta</li>
            </ul>
        </motion.div>

        {/* Programmatic Guaranteed */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -10, scale: 1.08 }}
          className="bg-gradient-to-b from-ues21-dark to-slate-900 rounded-xl shadow-lg p-6 border-t-4 border-ues21-accent flex flex-col text-white z-10"
        >
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="text-ues21-accent w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{BuyingType.PG}</h3>
            <span className="text-xs font-semibold text-slate-400 uppercase mb-4">Acuerdo Directo</span>
            <ul className="text-sm text-slate-300 space-y-2 mb-6 flex-grow">
                <li>• <strong className="text-ues21-accent">Garantizado</strong></li>
                <li>• Placements Premium</li>
                <li>• Control total</li>
                <li>• Ideal para CTV/Branding</li>
            </ul>
        </motion.div>
      </div>
    </Section>
  );
};