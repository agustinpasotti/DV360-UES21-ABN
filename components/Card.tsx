import React from 'react';
import { CardProps } from '../types';
import { motion } from 'motion/react';

export const Card: React.FC<CardProps> = ({ title, children, className = "", icon }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 border-ues21-green transition-all ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-ues21-green">{icon}</div>}
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>
      <div className="text-slate-600 text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};