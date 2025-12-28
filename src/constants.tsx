
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  Code2, 
  Cpu, 
  Figma, 
  Layers, 
  Database,
  Globe,
  Terminal,
  Monitor
} from 'lucide-react';
import { Project, Skill, CreativeItem } from './types';

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/hoangthieu' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
  { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://facebook.com' },
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:hoangthieu@example.com' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Learning Platform',
    description: 'A comprehensive web application for managing online courses and student progress.',
    longDescription: 'This E-Learning Platform is designed to bridge the gap between instructors and students. It offers a seamless experience for creating courses, managing enrollments, and tracking student progress. The platform supports video lectures, quizzes, and interactive assignments.',
    features: [
      'User authentication and role-based access control (Instructor/Student)',
      'Course creation and management with rich text editor',
      'Video streaming integration',
      'Real-time progress tracking and analytics',
      'Interactive quizzes and automated grading'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    githubUrl: '#',
    demoUrl: '#',
    image: 'https://picsum.photos/seed/elearning/800/450'
  },
  {
    id: '2',
    title: 'Smart Home IoT Dashboard',
    description: 'Real-time monitoring and control system for home automation devices using MQTT.',
    longDescription: 'A centralized dashboard for controlling smart home devices. Users can monitor temperature, humidity, and energy consumption in real-time. The system uses MQTT for low-latency communication between devices and the server.',
    features: [
      'Real-time data visualization with Chart.js',
      'Device control (lights, thermostat, locks)',
      'Automated scheduling and routines',
      'Energy consumption reports',
      'MQTT broker integration for device communication'
    ],
    tags: ['TypeScript', 'React', 'Firebase', 'Chart.js'],
    githubUrl: '#',
    image: 'https://picsum.photos/seed/iot/800/450'
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'SaaS application that uses OpenAI API to generate marketing copy and social media posts.',
    longDescription: 'An AI-powered tool that helps marketers and content creators generate high-quality copy in seconds. By leveraging the OpenAI API, users can create blog posts, social media captions, and ad copy tailored to their brand voice.',
    features: [
      'Integration with OpenAI GPT-4 API',
      'Customizable tone and style settings',
      'Template library for various content types',
      'History and favorites management',
      'Subscription management with Stripe'
    ],
    tags: ['Next.js', 'OpenAI', 'Stripe', 'PostgreSQL'],
    githubUrl: '#',
    demoUrl: '#',
    image: 'https://picsum.photos/seed/ai/800/450'
  },
  {
    id: '4',
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency tracking dashboard with price alerts and portfolio analysis.',
    longDescription: 'Keep track of your cryptocurrency investments with this powerful portfolio tracker. It provides real-time price updates, detailed charts, and profit/loss analysis. Users can set custom price alerts to stay ahead of the market.',
    features: [
      'Real-time price data from CoinGecko API',
      'Portfolio performance analysis',
      'Customizable price alerts via email/push notification',
      'Interactive price charts',
      'Multi-currency support'
    ],
    tags: ['React', 'Redux', 'CoinGecko API', 'Chakra UI'],
    githubUrl: '#',
    image: 'https://picsum.photos/seed/crypto/800/450'
  },
  {
    id: '5',
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates, drag-and-drop kanban board.',
    longDescription: 'A Trello-style task management application designed for teams. It features a drag-and-drop Kanban board, real-time collaboration, and task assignment. Perfect for agile development teams and project managers.',
    features: [
      'Drag-and-drop Kanban board',
      'Real-time updates using WebSockets/Firebase',
      'Task assignment and due dates',
      'Comments and file attachments',
      'Team workspace management'
    ],
    tags: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind'],
    githubUrl: '#',
    demoUrl: '#',
    image: 'https://picsum.photos/seed/task/800/450'
  },
  {
    id: '6',
    title: 'Travel Booking System',
    description: 'Full-stack booking platform for flights and hotels with payment gateway integration.',
    longDescription: 'A comprehensive travel booking solution allowing users to search and book flights and hotels. It includes a secure payment gateway, user reviews, and a booking management system for administrators.',
    features: [
      'Flight and hotel search engine',
      'Secure payment processing',
      'User reviews and ratings system',
      'Booking history and cancellation',
      'Admin dashboard for managing inventory'
    ],
    tags: ['Angular', 'NestJS', 'MySQL', 'Docker'],
    githubUrl: '#',
    image: 'https://picsum.photos/seed/travel/800/450'
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', icon: 'Globe', category: 'frontend' },
  { name: 'CSS3', icon: 'Layers', category: 'frontend' },
  { name: 'JavaScript', icon: 'Code2', category: 'frontend' },
  { name: 'React', icon: 'Monitor', category: 'frontend' },
  { name: 'Tailwind', icon: 'Palette', category: 'frontend' },
  { name: 'TypeScript', icon: 'Terminal', category: 'frontend' },
  { name: 'Node.js', icon: 'Cpu', category: 'backend' },
  { name: 'MongoDB', icon: 'Database', category: 'backend' },
  { name: 'Next.js', icon: 'Zap', category: 'frontend' },
  { name: 'PostgreSQL', icon: 'Server', category: 'backend' },
  { name: 'Docker', icon: 'Container', category: 'devops' },
  { name: 'Git', icon: 'GitBranch', category: 'tools' },
  { name: 'Python', icon: 'Hash', category: 'backend' },
  { name: 'AWS', icon: 'Cloud', category: 'devops' },
  { name: 'GraphQL', icon: 'Share2', category: 'backend' },
  { name: 'Linux', icon: 'Command', category: 'tools' }
];

export const CREATIVE_ITEMS: CreativeItem[] = [
  { type: 'image', title: 'Street Photography', thumbnail: 'https://picsum.photos/seed/photo1/400/300' },
  { type: 'video', title: 'Cinematic Travel Vlog', thumbnail: 'https://picsum.photos/seed/video1/400/300' },
  { type: 'audio', title: 'Podcast: Tech Talks', thumbnail: 'https://picsum.photos/seed/audio1/400/300' }
];
