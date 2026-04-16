import React from 'react';
import { Section } from '../Section';
import { Card } from '../Card';
import { SECTIONS, ASSETS } from '../../constants';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Target, 
  Zap, 
  PieChart, 
  Settings, 
  Globe,
  ArrowRight
} from 'lucide-react';

export const AbnServices: React.FC = () => {
  const services = [
    {
      title: "Media Strategy",
      description: "Planificación y ejecución de campañas multi-canal orientadas a resultados de negocio.",
      icon: <Target className="w-8 h-8 text-ues21-green" />,
      color: "border-ues21-green/20"
    },
    {
      title: "Programmatic Excellence",
      description: "Expertos certificados en DV360, CM360 y Search Ads 360 para una compra eficiente.",
      icon: <Zap className="w-8 h-8 text-ues21-accent" />,
      color: "border-ues21-accent/20"
    },
    {
      title: "Data & Analytics",
      description: "Medición avanzada, atribución y dashboards en tiempo real para decisiones basadas en datos.",
      icon: <BarChart3 className="w-8 h-8 text-ues21-green" />,
      color: "border-ues21-green/20"
    },
    {
      title: "Creative Production",
      description: "Desarrollo de assets digitales de alto impacto y creatividades dinámicas (DCO).",
      icon: <PieChart className="w-8 h-8 text-ues21-accent" />,
      color: "border-ues21-accent/20"
    },
    {
      title: "Tech & Consulting",
      description: "Implementación de stacks tecnológicos y consultoría estratégica en transformación digital.",
      icon: <Settings className="w-8 h-8 text-ues21-green" />,
      color: "border-ues21-green/20"
    },
    {
      title: "Global Reach",
      description: "Capacidad de ejecución regional y global con un enfoque local personalizado.",
      icon: <Globe className="w-8 h-8 text-ues21-accent" />,
      color: "border-ues21-accent/20"
    }
  ];

  return (
    <Section id="abn-services" className="bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-ues21-green font-bold mb-6 opacity-60">
          Nuestro ADN
        </span>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 tracking-tight">
            Somos
          </h2>
          <div className="hidden md:block w-px h-20 bg-slate-200"></div>
          <div className="relative">
            <img src={ASSETS.logoABNBlack} alt="ABN Digital" className="h-16 md:h-24 w-auto relative z-10" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-ues21-green/10 rounded-full blur-xl -z-0"></div>
          </div>
        </div>
        <div className="mt-12 max-w-2xl">
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light italic">
            "Transformamos datos en oportunidades"
          </p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`h-full border-l-4 ${service.color} hover:shadow-xl transition-all duration-300 group`}>
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a 
          href="https://abndigital.com.ar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-abn-dark text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl group"
        >
          Conoce más sobre ABN Digital
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 text-center pb-10"
      >
        <h3 className="text-4xl font-bold text-ues21-green mb-4">¡Muchas Gracias!</h3>
        <p className="text-slate-500 text-lg font-light">Equipo ABN Digital & Universidad Siglo 21</p>
      </motion.div>
    </Section>
  );
};
