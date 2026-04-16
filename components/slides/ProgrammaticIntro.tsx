import React from 'react';
import { Section } from '../Section';
import { SECTIONS, ASSETS } from '../../constants';
import { ShoppingCart, Radio, ArrowRight, Layers, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ProgrammaticIntro: React.FC = () => {
  return (
    <Section id={SECTIONS.PROGRAMMATIC} className="bg-slate-50">
      {/* Certified Partner Logos */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <a 
          href="https://enterprisemarketingportal.google/auth/find-a-partner/abndigital-ar?a=713571869"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center group cursor-pointer"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-ues21-green font-bold mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
            Certified Partner
          </span>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100">
            <img src={ASSETS.logoABNBlack} alt="ABN Digital" className="h-12 md:h-16 w-auto" />
            <div className="h-12 w-px bg-slate-300 hidden md:block"></div>
            <img src={ASSETS.logoGMP} alt="Google Marketing Platform" className="h-12 md:h-16 w-auto" />
          </div>
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-ues21-green mb-4">02 Programática</h2>
        <div className="h-1 w-20 bg-ues21-accent rounded-full"></div>
        <p className="mt-4 text-slate-600 text-lg">¿Cómo funciona el intercambio?</p>
      </motion.div>

      {/* Demand vs Supply */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-50 p-3 rounded-full">
              <ShoppingCart className="w-8 h-8 text-ues21-green" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-ues21-dark uppercase">DEMANDA (Anunciante)</h3>
              <div className="flex items-center gap-2">
                <div className="bg-white border border-slate-200 p-1 rounded shadow-sm">
                  <img src={ASSETS.logoUES21} alt="UES21" className="h-6 w-auto" />
                </div>
                <p className="text-ues21-green font-semibold">Universidad Siglo 21</p>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Quiere salir en los medios más relevantes y llegar a sus usuarios en el momento y lugar indicado. Busca eficiencia y precisión en la compra.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden transition-all"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="bg-red-100 p-3 rounded-full">
              <Radio className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 uppercase">OFERTA (Medios)</h3>
              <p className="text-red-600 font-semibold">Sitios, Apps, CTV</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed relative z-10">
            Quieren comercializar sus sitios y plataformas. Venden espacios publicitarios (inventory) para monetizar su contenido.
          </p>
        </motion.div>
      </div>

      {/* The Connector */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mb-20"
      >
        <div className="bg-ues21-dark text-white px-8 py-3 rounded-full shadow-lg flex items-center gap-3">
          <Layers className="w-5 h-5 text-ues21-accent" />
          <span className="font-bold">Intermediario: Ad Networks & Programática</span>
        </div>
        <div className="h-12 w-0.5 bg-slate-300"></div>
        <div className="text-center max-w-2xl bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-700">
            Es una forma <strong>automatizada</strong> de comprar espacios publicitarios en Internet, usando tecnología y datos en tiempo real para decidir cuándo, dónde y a quién mostrar un anuncio.
          </p>
        </div>
      </motion.div>

      {/* Pains/Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-1 flex flex-col justify-center"
        >
             <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <AlertCircle className="text-orange-500" /> Pain Points
             </h3>
             <p className="text-slate-600">
                 Sin programática unificada, un usuario puede ser impactado excesivamente en diferentes sitios sin control centralizado.
             </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8"
        >
            <div className="flex-1 text-center">
                <div className="text-red-500 font-bold text-xl mb-2">Compra Tradicional</div>
                <div className="text-6xl font-black text-slate-200">15</div>
                <div className="text-sm text-slate-500">Impactos por usuario (Saturación)</div>
            </div>
            <ArrowRight className="text-slate-300 hidden md:block" />
            <div className="flex-1 text-center">
                <div className="text-green-600 font-bold text-xl mb-2 flex items-center justify-center gap-2">
                  Con 
                  <img src={ASSETS.logoDV360} alt="DV360" className="h-6 w-auto inline-block" referrerPolicy="no-referrer" />
                </div>
                <div className="text-6xl font-black text-ues21-green">5</div>
                <div className="text-sm text-slate-500">Impactos controlados (Frecuencia Óptima)</div>
            </div>
        </motion.div>
      </div>
    </Section>
  );
};