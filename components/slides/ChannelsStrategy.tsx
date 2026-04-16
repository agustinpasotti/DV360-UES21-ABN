import React from 'react';
import { Section } from '../Section';
import { SECTIONS } from '../../constants';
import { Tv, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ChannelsStrategy: React.FC = () => {
  return (
    <Section id={SECTIONS.CHANNELS} className="bg-ues21-dark text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-2">Canales Especiales</h2>
        <p className="text-ues21-accent text-lg">Estrategia para Connected TV (CTV) y Digital Out of Home (DOOH)</p>
      </motion.div>

      {/* CTV */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 mb-12"
      >
        <div className="flex items-center gap-4 mb-6">
            <div className="bg-ues21-green p-3 rounded-xl">
                <Tv className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold">Connected TV (CTV)</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
                <h4 className="text-xl font-semibold mb-4 text-ues21-accent">Partners & Inventario</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                    {['Netflix', 'Disney+', 'HBO Max', 'Roku', 'Vix', 'Spotify (Video)', 'Pluto TV'].map(brand => (
                        <span key={brand} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-ues21-accent hover:text-ues21-dark transition cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-ues21-accent">Checklist de Implementación</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-ues21-accent"/> Verificar Budget y CPM del medio.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-ues21-accent"/> Analizar Overlap con YouTube (evitar duplicidad costosa).</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-ues21-accent"/> Deals Preferentes (PG) en DV360 para asegurar entrega.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-ues21-accent"/> Posibilidad de Brand Lift Studies.</li>
                </ul>
            </div>
            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                <h4 className="font-bold text-lg mb-2 text-ues21-accent">Tips de Negociación</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                    <li>Buscar acuerdos regionales para mejorar CPM.</li>
                    <li>No aceptar compromisos rígidos de inversión sin probar performance.</li>
                    <li>Todo debe correr idealmente vía <strong>Programmatic Guaranteed (PG)</strong> en DV360.</li>
                    <li>Cargar creativos 10hs antes del evento (DV360 tarda ~8hs en aprobar).</li>
                </ul>
            </div>
        </div>
      </motion.div>

      {/* DOOH */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10"
      >
        <div className="flex items-center gap-4 mb-6">
            <div className="bg-ues21-accent p-3 rounded-xl">
                <MapPin className="w-8 h-8 text-ues21-dark" />
            </div>
            <h3 className="text-3xl font-bold">Digital Out of Home (DOOH)</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
                 <p className="text-slate-300 mb-6">
                    Publicidad en pantallas digitales en vía pública (paradas de autobús, grandes pantallas, centros comerciales) comprada programáticamente.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                        <div className="font-bold text-ues21-accent mb-1">Loop</div>
                        <div className="text-xs text-slate-300">Ciclo total de anuncios. Ej: cada 2 minutos se repite la tanda.</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                        <div className="font-bold text-ues21-accent mb-1">Slot</div>
                        <div className="text-xs text-slate-300">Espacio de tiempo reservado dentro del loop para una marca.</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                        <div className="font-bold text-ues21-accent mb-1">Spot</div>
                        <div className="text-xs text-slate-300">Cada vez que el anuncio aparece efectivamente en pantalla.</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                        <div className="font-bold text-ues21-accent mb-1">Impresiones</div>
                        <div className="text-xs text-slate-300">Estimación de audiencia (Personas que pasan frente a la pantalla).</div>
                    </div>
                 </div>
            </div>
            <div className="bg-ues21-accent/10 border border-ues21-accent/30 p-6 rounded-xl flex flex-col justify-center">
                 <h4 className="font-bold text-lg text-ues21-accent mb-2">Importante</h4>
                 <p className="text-sm text-slate-300">
                    Universidad Siglo 21 podría tener acceso a Betas para correr DOOH en DV360 con Programmatic Guaranteed.
                 </p>
                 <div className="mt-4 text-xs bg-black/40 p-2 rounded text-ues21-accent font-mono">
                    Proveedores: Latinad, PlaceExchange, Media Smart.
                 </div>
            </div>
        </div>
      </motion.div>
    </Section>
  );
};