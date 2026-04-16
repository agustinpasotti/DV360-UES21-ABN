import React from 'react';
import { Section } from '../Section';
import { Card } from '../Card';
import { SECTIONS, ASSETS } from '../../constants';
import { Target, BarChart2, DollarSign, Layers, Users, PieChart } from 'lucide-react';
import { motion } from 'motion/react';

export const Dv360Features: React.FC = () => {
  return (
    <Section id={SECTIONS.DV360} className="bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16 text-center flex flex-col items-center"
      >
        <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-ues21-accent/20 shadow-sm">
          <img 
            src={ASSETS.logoGMP} 
            alt="Google Marketing Platform" 
            className="h-8 md:h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <h2 className="text-4xl font-bold text-ues21-dark mb-6 flex items-center justify-center gap-4">
          ¿Qué es 
          <img 
            src={ASSETS.logoDV360} 
            alt="DV360" 
            className="h-10 md:h-12 w-auto inline-block"
            referrerPolicy="no-referrer"
          />?
        </h2>
        <p className="text-xl text-slate-600">
          <strong>Display & Video 360</strong> es una plataforma de Google que permite a Universidad Siglo 21 comprar publicidad digital de manera automatizada, centralizando campañas en miles de sitios web, apps y TV conectada.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[
          { title: "Unificación de Medios", icon: <Layers className="w-6 h-6 text-ues21-green"/>, text: "Gestiona todas las compras (Display, Video, Audio, DOOH) desde un solo lugar, eliminando silos de información." },
          { title: "Control de Frecuencia", icon: <Target className="w-6 h-6 text-ues21-green"/>, text: "Limita cuántas veces un usuario ve un anuncio a través de todos los medios, evitando la saturación y el desperdicio de presupuesto." },
          { title: "Eficiencia de Costos", icon: <DollarSign className="w-6 h-6 text-ues21-green"/>, text: "Optimización en tiempo real de pujas para asegurar el mejor precio por impresión (CPM)." },
          { title: "Diversidad de Formatos", icon: <PieChart className="w-6 h-6 text-ues21-green"/>, text: "Acceso a inventario Premium en YouTube, Connected TV, Audio y Vía Pública Digital (DOOH)." },
          { title: "Reportes Consolidados", icon: <BarChart2 className="w-6 h-6 text-ues21-green"/>, text: "Una única fuente de verdad para medir el rendimiento de todas las campañas." },
          { title: "Reach Adicional", icon: <Users className="w-6 h-6 text-ues21-green"/>, text: "Al controlar la frecuencia, el presupuesto ahorrado se reinvierte automáticamente para alcanzar a usuarios nuevos." }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card title={item.title} icon={item.icon}>
              {item.text}
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
      >
        <h3 className="text-2xl font-bold text-ues21-green mb-6 border-b pb-4">Métricas Clave de Eficiencia</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Added Reach</h4>
                <p className="text-slate-600 text-sm mb-4">
                    El número de usuarios adicionales alcanzados gracias a la regulación de frecuencia.
                    <br/>
                    <em>Dinero no gastado en repetir anuncios = Dinero usado para encontrar gente nueva.</em>
                </p>
                <div className="bg-green-50 p-4 rounded text-green-800 text-xs font-mono border border-green-100">
                    CPMA con Added Reach &lt; CPMA Tradicional
                </div>
            </div>
            <div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Overlap de Reach</h4>
                <p className="text-slate-600 text-sm mb-4">
                    Porcentaje de usuarios que ven anuncios en múltiples plataformas (ej. ven el anuncio en YouTube y luego en una App).
                </p>
                <div className="bg-blue-50 p-4 rounded text-blue-800 text-xs font-mono border border-blue-100">
                    Importante: Analizar overlap entre CTV y YouTube para optimizar costos.
                </div>
            </div>
        </div>
      </motion.div>
    </Section>
  );
};