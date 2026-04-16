import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ASSETS } from '../../constants';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-start bg-gradient-to-br from-ues21-dark via-ues21-green to-ues21-dark text-white px-6 lg:px-24 overflow-hidden">
      {/* Abstract Background Shapes */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#00C853" d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.2C83.9,-26.8,88.5,-11.7,85.8,2.3C83.1,16.2,73.1,29,62.6,39.6C52.1,50.2,41.2,58.7,29.3,65.3C17.4,71.9,4.6,76.7,-7.1,75.4C-18.8,74.1,-29.4,66.7,-39.7,58.3C-50,49.9,-60,40.5,-67.6,29C-75.2,17.5,-80.4,3.9,-78.3,-8.5C-76.1,-20.9,-66.6,-32.1,-56.3,-41.7C-46,-51.3,-34.9,-59.4,-22.9,-65.4C-10.9,-71.4,1.9,-75.3,15.2,-77.3" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <div className="z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
            <span className="px-4 py-1 border border-ues21-accent/30 rounded-full text-sm uppercase tracking-wider backdrop-blur-sm text-ues21-accent font-bold">
                Propuesta Estratégica 2026
            </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Intro a <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ues21-accent to-white">Display & Video 360</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed"
        >
          Estrategias de compra programática, ecosistema digital y optimización de medios para <span className="text-white font-bold">Universidad Siglo 21</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-8 bg-white/5 p-6 rounded-2xl backdrop-blur-md inline-flex border border-white/10 shadow-2xl"
        >
          <a 
            href="https://21.edu.ar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={ASSETS.logoUES21White} alt="Universidad Siglo 21" className="h-10 w-auto" />
          </a>
          <div className="w-px h-12 bg-white/20"></div>
          <a 
            href="https://abndigital.com.ar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={ASSETS.logoABNWhite} alt="ABN Digital" className="h-10 w-auto" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('programmatic')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="text-ues21-accent w-8 h-8 opacity-75" />
      </motion.div>
    </div>
  );
};