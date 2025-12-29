
import React from 'react';
import { Container, Home, Cpu, Zap, Leaf, Shield, Rocket, Globe } from 'lucide-react';
import { ServiceCardProps, Project, Stat } from './types';

export const COLORS = {
  deepBlue: '#0B192E', // Azul Petrol
  techCyan: '#00909E', // Ciano NYRA
  black: '#1A1C22',    // Grafite
  graphite: '#2D3748',
  white: '#FFFFFF'
};

export const SERVICES: ServiceCardProps[] = [
  {
    icon: <Container className="w-8 h-8" />,
    title: 'Engenharia Modular em Containers',
    description: [
      'Projetos completos com alto padrão estrutural',
      'Obras escaláveis e sustentáveis',
      'Redução de resíduos e menor impacto ambiental',
      'Ideal para comércios, academias e lazer'
    ],
    image: 'https://images.unsplash.com/photo-1590725150739-1ffce81831aa?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Light Steel Frame (LSF)',
    description: [
      'Construção industrializada de alta precisão',
      'Estruturas leves, resistentes e duráveis',
      'Obra limpa, rápida e sustentável',
      'Desempenho térmico e acústico superior'
    ],
    image: 'https://images.unsplash.com/photo-1524230507669-e29a75c602a3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Automação & Tecnologia',
    description: [
      'Automação predial e comercial completa',
      'Monitoramento remoto e sistemas IoT',
      'Controle inteligente de iluminação e clima',
      'Pronto para soluções autônomas'
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Energia Limpa & Eletropontos',
    description: [
      'Sistemas solares integrados à arquitetura',
      'Eletropontos para frotas e condomínios',
      'Gestão inteligente de carga e demanda',
      'Preparação para Smart Cities'
    ],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Hub de Energia NYRA',
    category: 'Energia Solar',
    image: 'https://images.unsplash.com/photo-1509391366360-fe5bb629550d?auto=format&fit=crop&q=80&w=800',
    details: 'Integração de microgrid solar com eletropontos de carga rápida em São Lourenço.'
  },
  {
    id: 2,
    title: 'Residência Modular Black Edition',
    category: 'Containers',
    image: 'https://images.unsplash.com/photo-1590725150739-1ffce81831aa?auto=format&fit=crop&q=80&w=800',
    details: 'Design contemporâneo em containers com deck panorâmico e automação predial.'
  },
  {
    id: 3,
    title: 'Smart Container Gym',
    category: 'Containers',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    details: 'Academia modular com automação completa e painéis solares autossuficientes.'
  },
  {
    id: 4,
    title: 'Estrutura LSF Corporativa',
    category: 'LSF',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    details: 'Fachada industrializada de alto desempenho para escritório de tecnologia em Pouso Alegre.'
  },
  {
    id: 5,
    title: 'Eco-Resort Modular',
    category: 'Containers',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800',
    details: 'Suítes independentes em containers de 40 pés com isolamento térmico avançado.'
  },
  {
    id: 6,
    title: 'Rede de Eletropontos Urbano',
    category: 'Eletropontos',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    details: 'Infraestrutura de carregamento para veículos elétricos integrada a mobiliário urbano.'
  }
];

export const STATS: Stat[] = [
  { label: 'Projetos Entregues', value: '150', suffix: '+' },
  { label: 'Energia Gerada', value: '2.5', suffix: ' GWh' },
  { label: 'Redução de Resíduos', value: '40', suffix: '%' },
  { label: 'Cidades Atendidas', value: '12', suffix: '' }
];

export const CITIES = [
  'São Lourenço', 'Caxambu', 'Baependi', 'Três Corações', 'Poços de Caldas', 
  'Itajubá', 'Pouso Alegre', 'Varginha', 'Passa Quatro', 'Cambuquira', 
  'Lambari', 'Conceição do Rio Verde'
];

export const MISSION_VALUES = {
  mission: 'Desenvolver ecossistemas inteligentes onde obra, energia e tecnologia se integram para um futuro sustentável.',
  vision: 'Construir hoje as soluções modulares e energéticas que o mercado global exigirá amanhã.',
  values: [
    { icon: <Rocket className="w-5 h-5" />, title: 'Inovação Constante', text: 'Pioneirismo em tecnologia e métodos construtivos.' },
    { icon: <Leaf className="w-5 h-5" />, title: 'Sustentabilidade Real', text: 'Foco absoluto na redução de impacto e eficiência energética.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Qualidade Estrutural', text: 'Engenharia de precisão com os melhores materiais do mercado.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Visão Global', text: 'Soluções locais alinhadas com tendências mundiais.' }
  ]
};

export const FAQ_DATA = [
  {
    question: 'Qual o prazo médio para uma construção modular?',
    answer: 'Dependendo da complexidade, projetos modulares em containers ou LSF podem ser entregues em até 50% menos tempo que a construção civil tradicional, variando de 60 a 120 dias.'
  },
  {
    question: 'A NYRA oferece soluções de financiamento?',
    answer: 'Trabalhamos com parcerias bancárias para financiamento de energia solar e construção industrializada, além de parcelamento direto em fases da obra.'
  },
  {
    question: 'Os eletropontos funcionam para qualquer veículo elétrico?',
    answer: 'Sim, instalamos carregadores universais (Tipo 2) compatíveis com a grande maioria dos veículos elétricos e híbridos plug-in vendidos no Brasil.'
  },
  {
    question: 'Como funciona a manutenção de uma casa em container?',
    answer: 'A manutenção é simples e similar a uma casa de alvenaria, exigindo apenas vistorias periódicas na pintura externa e nos pontos de vedação, que são projetados para durar décadas.'
  }
];

export const BLOG_POSTS = [
  {
    date: '15 Mar, 2024',
    title: 'O Futuro da Construção Civil: Por que o Modular está Vencendo?',
    category: 'Engenharia',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: '10 Mar, 2024',
    title: 'Mobilidade Elétrica: Como preparar seu condomínio para os Eletropontos',
    category: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: '05 Mar, 2024',
    title: 'Energia Solar 3.0: Além dos Painéis no Telhado',
    category: 'Energia',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800'
  }
];
