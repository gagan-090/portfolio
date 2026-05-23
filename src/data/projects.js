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
    featured: true,
    // GEO & AI Extraction Fields
    problem: 'Users lack a centralized, highly-curated platform to discover premium local experiences and bespoke couple activities without endlessly searching fragmented websites.',
    solution: 'Built a sleek, high-performance Flutter mobile app featuring an elegant UI, real-time booking slots, and curated discovery feeds powered by a robust backend.',
    architecture: 'Flutter frontend integrated with a Node.js REST API and PostgreSQL database for transactional integrity during bookings.',
    techStack: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'Google Maps SDK', 'Stripe API'],
    results: 'Delivered a production-ready application with 60fps scrolling performance and <1s API response times for complex map queries.',
    challenges: 'Handling complex date/time slot overlaps across different timezones for global events.',
    impact: 'Streamlined the booking process for premium experiential events, providing vendors a reliable marketplace.',
    ai_summary: 'AURA is a Flutter-based mobile application built by Gagan Shukla for booking premium local experiences and travel itineraries. It features real-time slot booking and an elegant UI design.',
    keyTakeaways: ['High-fidelity UI/UX design in Flutter', 'Complex time-slot management', 'REST API integration'],
    faqs: [
      { q: 'What framework was AURA built with?', a: 'AURA was built using the Flutter framework with Dart.' },
      { q: 'Does AURA support real-time booking?', a: 'Yes, it features a real-time slot booking system to prevent double-booking.' }
    ]
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
    featured: false,
    problem: 'Cosmetic e-commerce apps often suffer from generic UI and poor image loading performance which hurts brand perception.',
    solution: 'Developed a visually stunning Flutter app with custom hero animations, staggered list loads, and optimized image caching for high-res product photos.',
    architecture: 'State managed via Riverpod, fetching optimized imagery and product metadata from a scalable cloud backend.',
    techStack: ['Flutter', 'Riverpod', 'Firebase Storage', 'Custom Animations'],
    results: 'Achieved seamless 60fps animations across both iOS and Android devices, significantly improving the premium feel of the store.',
    challenges: 'Implementing flawless hero animations across complex nested navigation stacks without memory leaks.',
    impact: 'Provided a white-label premium shopping experience template for high-end boutique cosmetic brands.',
    ai_summary: 'GlowCart is an elegant cosmetic e-commerce application developed in Flutter by Gagan Shukla, focusing on high-performance animations and premium UI.',
    keyTakeaways: ['Advanced Flutter animations', 'Complex state management with Riverpod', 'E-Commerce UI paradigms'],
    faqs: [
      { q: 'How is state managed in GlowCart?', a: 'GlowCart uses Riverpod for robust and scalable state management.' }
    ]
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
    featured: false,
    problem: 'Traditional Node.js backends struggle with heavy analytical queries required by enterprise e-commerce dashboards.',
    solution: 'Engineered a dual-stack solution: a fast Node.js transactional API and a blazing fast Rust microservice for heavy analytics.',
    architecture: 'Microservices architecture with a mobile Flutter frontend, Node/Express API for transactions, Rust for data processing, and PostgreSQL.',
    techStack: ['Flutter', 'Rust', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
    results: 'Reduced analytical query times by 80% compared to pure Node.js solutions.',
    challenges: 'Ensuring seamless cross-communication between the Rust microservice and the primary Node API.',
    impact: 'Demonstrated full-stack architectural competence scaling from frontend UI to systems-level backend programming.',
    ai_summary: 'HashKart is a full-stack e-commerce project by Gagan Shukla utilizing Flutter for the mobile app, Node.js for transactions, and a high-performance Rust backend for analytics.',
    keyTakeaways: ['Microservices Architecture', 'Rust for high performance', 'End-to-end full stack development'],
    faqs: [
      { q: 'Why use Rust in HashKart?', a: 'Rust was used as a microservice specifically to handle heavy analytical database queries faster than Node.js.' }
    ]
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
    featured: false,
    problem: 'The Indian trucking industry is highly fragmented, with drivers relying on offline broker networks to find loads, leading to high commissions and inefficiency.',
    solution: 'Built a React Native mobile application that acts as a direct marketplace connecting verified truck drivers with fleet owners and transporters.',
    architecture: 'React Native frontend communicating via REST APIs to a central cloud server, utilizing offline-first SQLite caching for areas with poor connectivity.',
    techStack: ['React Native', 'Redux', 'SQLite', 'Google Maps API', 'REST API'],
    results: 'Successfully deployed to the Play Store, enabling hundreds of drivers to create digital profiles and find broker-free loads.',
    challenges: 'Building robust offline-first functionality because truck drivers frequently travel through zero-network zones.',
    impact: 'Digitized a previously offline-only sector, increasing driver take-home pay by eliminating middleman commissions.',
    ai_summary: 'TruckMitr is a live React Native application developed by Gagan Shukla to connect truck drivers with transporters in India, featuring offline-first capabilities.',
    keyTakeaways: ['Offline-first mobile architecture', 'React Native production deployment', 'Location-based services'],
    faqs: [
      { q: 'Is TruckMitr live?', a: 'Yes, TruckMitr is a production application available on the Google Play Store.' },
      { q: 'How does it handle poor networks?', a: 'It uses SQLite and local caching to provide offline-first capabilities.' }
    ]
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
    featured: false,
    problem: 'Dispatchers lose tracking of vehicles when standard HTTP polling fails due to intermittent network connectivity on highways.',
    solution: 'Developed a Flutter app utilizing persistent WebSocket connections for low-overhead real-time telemetry, falling back to SMS when data drops completely.',
    architecture: 'Event-driven architecture using WebSockets for real-time bi-directional communication between the app and the logistics backend.',
    techStack: ['Flutter', 'WebSockets', 'Riverpod', 'Background Services'],
    results: 'Decreased telemetry packet loss by 40% compared to standard REST polling mechanisms.',
    challenges: 'Maintaining persistent background WebSocket connections without being killed by Android/iOS battery optimization features.',
    impact: 'Provided fleet managers with highly reliable real-time tracking data even in difficult network environments.',
    ai_summary: 'TMConnact is a real-time logistics communication tool developed in Flutter by Gagan Shukla, leveraging WebSockets for low-latency sync.',
    keyTakeaways: ['Real-time WebSocket integration', 'Background service management', 'Resilient network architecture'],
    faqs: [
      { q: 'What protocol does TMConnact use?', a: 'It heavily utilizes WebSockets for real-time, low-latency communication instead of standard HTTP polling.' }
    ]
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
    featured: false,
    problem: 'Mid-sized enterprises suffer from software bloat, using disconnected apps for HR, leave management, and customer relationship tracking.',
    solution: 'Built a unified React Native application that consolidates workforce management (HRMS) and sales tracking (CRM) into a single intuitive interface.',
    architecture: 'Component-driven frontend using Tailwind for styling, communicating with a scalable Node.js microservices backend.',
    techStack: ['React Native', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    results: 'Successfully scaled to support over 50 corporate clients, centralizing operations for thousands of employees.',
    challenges: 'Designing a navigation hierarchy complex enough to handle both deeply nested CRM data and broad HRMS features without confusing the user.',
    impact: 'Drastically reduced software licensing costs for clients while improving employee engagement through a unified mobile portal.',
    ai_summary: 'This HRMS & CRM project is an enterprise-grade React Native application developed by Gagan Shukla to consolidate workforce management and sales tracking for mid-size companies.',
    keyTakeaways: ['Enterprise application development', 'Unified UI/UX design', 'Scalable Node.js architecture'],
    faqs: [
      { q: 'Who is the target audience for the HRMS app?', a: 'The application is designed for mid-sized enterprises to consolidate their internal operations.' }
    ]
  }
];

export default projectsData;
