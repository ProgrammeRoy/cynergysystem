import { ReactNode } from 'react';

export enum IndustryType {
  REAL_ESTATE = 'Inmobiliaria',
  TOURISM = 'Turismo',
  MUSEUMS = 'Museos',
  ENTERTAINMENT = 'Entretenimiento',
  EDUCATION = 'Educación'
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: IndustryType;
  imageUrl: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface IndustryFeature {
  type: IndustryType;
  title: string;
  description: string;
  benefits: string[];
  icon: ReactNode;
}