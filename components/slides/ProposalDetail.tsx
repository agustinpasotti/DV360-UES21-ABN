import React from 'react';
import { Section } from '../Section';
import { SECTIONS, ASSETS } from '../../constants';
import { motion } from 'motion/react';

export const ProposalDetail: React.FC = () => {
  return (
    <Section id={SECTIONS.PROPOSAL} className="bg-white text-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-ues21-green mb-4">Detalle de servicio</h2>
          <p className="text-slate-600">Costos de plataforma y condiciones de la propuesta.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Fees and Percentages */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <img src={ASSETS.logoDV360} alt="DV360" className="h-6 w-auto" referrerPolicy="no-referrer" />
                  <span className="text-xl font-medium text-slate-800">Open Exchange</span>
                </div>
                <span className="text-3xl font-bold text-ues21-green">16%</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <div className="flex flex-col">
                  <span className="text-xl font-medium text-slate-800">Youtube & Programmatic</span>
                  <span className="text-xl font-medium text-slate-800">Direct Guaranteed Fee Cost</span>
                </div>
                <span className="text-3xl font-bold text-ues21-green">10%</span>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-lg text-slate-700">Set Up Fee de Plataforma</span>
                  <span className="text-sm text-slate-400">(Unica Vez)</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xl text-slate-400 line-through">USD 500</span>
                  <span className="text-2xl font-bold text-ues21-green">Bonificado</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-lg text-slate-700">Operational Platform Fee</span>
                  <span className="text-sm text-slate-400">(Mensual)</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xl text-slate-400 line-through">USD 2.000</span>
                  <span className="text-2xl font-bold text-ues21-green">Bonificado</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detail Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ues21-green to-transparent opacity-30"></div>
            
            <h3 className="text-2xl font-bold text-center mb-8 tracking-widest uppercase text-ues21-green">Detalle Propuesta</h3>
            
            <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed italic">
              <p>
                <strong className="text-slate-900 not-italic">Forma de pago</strong> ABN emitirá y enviará por correo electrónico una factura al inicio de cada mes. El vencimiento de pago de la factura se producirá a los treinta (30) días a partir de la fecha de envío.
              </p>
              
              <p>
                El pago se realizará mediante transferencia bancaria a la cuenta indicada por la administración de ABN al momento del envío de la factura electrónica. Producida la mora, en forma automática por el solo cumplimiento del plazo referido, se deberá abonar una penalización del 10% mensual acumulativo hasta la fecha del efectivo pago. Transcurridos los noventa (90) días desde la fecha de envío de la factura se aplicará además un punitorio del 0,5% mensual acumulativo. La falta de pago en término facultará a ABN a suspender el servicio.
              </p>
              
              <p>
                <strong className="text-slate-900 not-italic">Vigencia</strong> *Propuesta válida hasta 3 meses después de enviada la misma. No incluye viáticos. No incluye IVA.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-100"
        >
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            ABN brindará soporte integral bajo el formato “Operational” 100% bonificado por ser cliente de ABN Group. Este servicio incluye especialistas dedicados a que la implementación, ejecución y mantenimiento de las campañas se ejecuten de manera correcta, asumiendo la responsabilidad sobre su operativa. <strong className="text-ues21-green">Universidad Siglo 21</strong> contará con un mail de ABN para observar dentro de plataforma.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
