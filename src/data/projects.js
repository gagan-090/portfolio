import truckmitrHero from '../assets/truckmitr/truckmitr.jpeg';
import hrmsHero from '../assets/HRMS/home.jpeg';
import TMConnactHero from '../assets/tmconnect/tmconnect.jpeg';
import hashkartHero from '../assets/hashkart/hashkart.jpeg';
import auraHero from '../assets/Aura/home.jpeg';
import glowcartHero from '../assets/GlowCart/home.jpeg';

export const projectsData = [
  {
    id: 'aura',
    title: 'AURA',
    type: 'Flutter',
    tags: ['Flutter', 'Experience Booking', 'REST API', 'Maps SDK'],
    description: 'A premium experiential lifestyle platform to discover and book tour destinations, events, and curated couple date ideas.',
    longDescription: 'AURA is a beautifully crafted Flutter application that lets users discover, plan, and book travel destinations, local social events, bespoke couple activities, and curated date itineraries with real-time slot booking.',
    image: auraHero,
    link: '#',
    github: 'https://github.com/gagan-090/aura.git',
    featured: true
  },
  {
    id: 'glowcart',
    title: 'GlowCart',
    type: 'Flutter',
    tags: ['Flutter', 'Cosmetics', 'E-Commerce', 'State Management'],
    description: 'An elegant online Cosmetic and beauty product shopping application built using Flutter.',
    longDescription: 'GlowCart is a custom-built high-performance Flutter mobile application designed to offer an immersive, premium shopping experience for organic skincare, cosmetics, and beauty items, complete with high-resolution galleries and fluid animations.',
    image: glowcartHero,
    link: '#',
    featured: false
  },
  {
    id: 'hashkart',
    title: 'HashKart',
    type: 'Flutter',
    tags: ['Flutter', 'Full-Stack', 'Rust', 'PostgreSQL'],
    description: 'End-to-end e-commerce solution with integrated payment gateways and real-time inventory management.',
    longDescription: 'HashKart features high-resolution image rendering galleries, seamless stripe checkout flows, and a blazing fast Rust-based analytics dashboard.',
    image: hashkartHero,
    link: '#',
    github: 'https://github.com/gagan-090/HashKart_Main.git',
    featured: false
  },
  {
    id: 'truckmitr',
    title: 'TruckMitr',
    type: 'React Native',
    tags: ['React Native', 'Live: Play Store', 'Redux', 'SQLite'],
    description: 'A comprehensive, driver-focused digital platform designed to empower truck drivers and streamline logistics in India.',
    longDescription: 'TruckMitr acts as a revolutionary bridge in the logistics industry, empowering drivers with digital profiles, training, and direct jobs while offering transporters and fleet owners an efficient, broker-free marketplace to find verified operators.',
    image: truckmitrHero,
    link: '#',
    featured: false
  },
  {
    id: 'TMConnact',
    title: 'TMConnact',
    type: 'Flutter',
    tags: ['Flutter', 'Cross-Platform', 'Websockets', 'Riverpod'],
    description: 'A real-time communication bridging tool for logistics networks, focusing on low-latency data sync.',
    longDescription: 'TMConnact solves real-time sync in low connectivity settings for dispatcher networks. It operates over lightweight sockets with full backup sync over SMS channels.',
    image: TMConnactHero,
    link: '#',
    featured: false
  },
  {
    id: 'hrms-crm',
    title: 'HRMS & CRM',
    type: 'React Native',
    tags: ['React Native', 'App Store', 'Tailwind', 'Node.js'],
    description: 'Integrated workforce management and sales tracking system used by mid-size enterprises for operational efficiency.',
    longDescription: 'A bespoke enterprise platform consolidating HR tasks, employee reviews, and customer management into one elegant, modern UI. Scaled to support over 50 corporate clients.',
    image: hrmsHero,
    link: '#',
    github: 'https://github.com/gagan-090/HRMS.git',
    featured: false
  }
];

export default projectsData;
