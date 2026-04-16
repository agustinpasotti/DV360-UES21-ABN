import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`min-h-screen w-full flex flex-col justify-center px-6 py-20 lg:px-24 ${className}`}>
      {children}
    </section>
  );
};