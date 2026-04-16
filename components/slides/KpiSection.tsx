import React from 'react';
import { Section } from '../Section';
import { SECTIONS, ASSETS } from '../../constants';
import { motion } from 'motion/react';

export const KpiSection: React.FC = () => {
  const kpis = [
    { id: 1, label: "Universo Digital", desc: <>Usuarios activos en internet (L30d) - Data de <img src={ASSETS.logoDV360} alt="DV360" className="h-3 w-auto inline-block align-middle" referrerPolicy="no-referrer" />.</> },
    { id: 2, label: "Universo Total", desc: "Alcance total posible con budget máximo." },
    { id: 3, label: "Impresiones", desc: "Cantidad de veces que se muestra el anuncio." },
    { id: 4, label: "Reach (UU)", desc: "Usuarios Únicos alcanzados." },
    { id: 5, label: "Reach +3", desc: "Usuarios únicos que vieron el anuncio 3 o más veces." },
    { id: 6, label: "Visualizaciones", desc: "Para video, vistas completas o parciales." },
    { id: 7, label: "Cobertura (%)", desc: "Reach / Universo." },
    { id: 8, label: "VTR", desc: "Views / Impresiones." },
    { id: 9, label: "CPM", desc: "(Inversión * 1000) / Impresiones." },
    { id: 10, label: "CPMA", desc: "(Inversión * 1000) / Reach." },
    { id: 11, label: "Frecuencia", desc: "Impresiones / Reach." },
  ];

  return (
    <Section id={SECTIONS.KPI} className="bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-ues21-green">Estrategia de Branding: KPIs</h2>
        <p className="text-slate-500 mt-2">Métricas utilizadas para la etapa de Reconocimiento</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {kpis.map((kpi, idx) => (
          <motion.div 
            key={kpi.id} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-default"
          >
            <div className="bg-ues21-accent text-ues21-dark w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mr-3 shadow-sm">
              {kpi.id}
            </div>
            <div>
              <h4 className="font-bold text-slate-800">{kpi.label}</h4>
              <p className="text-xs text-slate-500 mt-1">{kpi.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-ues21-green/5 rounded-2xl p-8 border border-ues21-green/10"
      >
        <h3 className="text-2xl font-bold text-ues21-dark mb-6 text-center">Cálculo de Cobertura Total (Fórmula Sainsbury)</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-sm text-slate-700 max-w-md space-y-4">
                <p>
                    Se utiliza para calcular la probabilidad conjunta de alcance cuando se utilizan múltiples medios, asumiendo que las audiencias se superponen de manera aleatoria.
                </p>
                <p className="font-bold text-ues21-green bg-white px-4 py-2 rounded-lg shadow-sm inline-block">
                    Cobertura Total = 1 - [(1-CobA) x (1-CobB) x ... x (1-CobN)]
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-ues21-green/10">
                <div className="text-xs text-slate-400 uppercase font-bold mb-2">Interpretación</div>
                <div className="text-lg text-slate-700">
                    Es la probabilidad de que una persona <span className="text-ues21-green font-bold">SI</span> haya sido alcanzada al menos por un medio.
                </div>
            </div>
        </div>
      </motion.div>
    </Section>
  );
};