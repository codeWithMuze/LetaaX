
import React from 'react';
import {
  CreditCard,
  FileText,
  UserCheck,
  Briefcase,
  Stamp,
  HelpCircle,
  Search,
  MessageSquare,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Service, Step } from './types';

export const WHATSAPP_LINK = "https://wa.me/918089922373?text=Hi%20LetaaX,%20I’d%20like%20to%20apply%20for%20a%20typing%20service.";

export const SERVICES: Service[] = [
  {
    id: 'visa',
    title: 'Visa Services',
    description: 'Expert processing for residence, tourist, and family visas in Dubai and across the UAE.',
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    id: 'emirates-id',
    title: 'Emirates ID Services',
    description: 'Streamlined application and renewal services for your mandatory national identity card.',
    icon: <CreditCard className="w-8 h-8" />
  },
  {
    id: 'labour',
    title: 'Labour & Work',
    description: 'Facilitating work permits, labour contracts, and company documentation with precision.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    id: 'attestation',
    title: 'Attestation & Legal',
    description: 'Certified legal typing and document attestation for educational and personal papers.',
    icon: <Stamp className="w-8 h-8" />
  },
  {
    id: 'general',
    title: 'General Assistance',
    description: 'Support for various government-related forms and personalized documentation needs.',
    icon: <FileText className="w-8 h-8" />
  }
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: 1,
    title: 'Choose Service',
    description: 'Select the specific typing service or government application you require.',
    icon: <Search className="w-6 h-6" />
  },
  {
    number: 2,
    title: 'Submit Request',
    description: 'Provide basic details through our secure platform to initiate the process.',
    icon: <FileText className="w-6 h-6" />
  },
  {
    number: 3,
    title: 'Connect Center',
    description: 'We match you with a verified typing center for professional processing.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    number: 4,
    title: 'Complete Guidance',
    description: 'Receive full support until your application is successfully completed.',
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];
