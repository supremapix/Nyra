
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'Containers' | 'LSF' | 'Energia Solar' | 'Eletropontos';
  image: string;
  details: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}