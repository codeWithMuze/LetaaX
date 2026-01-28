// Adding React import to provide the React namespace for ReactNode types in interface definitions.
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  HowItWorks = 'how-it-works',
  ForCenters = 'for-centers',
  About = 'about'
}