import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export enum BuyingType {
  OPEN = 'Open Auction',
  PMP = 'Private Marketplace',
  PD = 'Preferred Deal',
  PG = 'Programmatic Guaranteed'
}