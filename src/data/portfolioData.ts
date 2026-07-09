export interface Skill {
  id: string;
  name: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description?: string;
  verified: boolean;
}

export interface EducationEntry {
  id: string;
  institution: string;
  location: string;
  degree: string;
  detail: string;
  period: string;
}

export interface ProfileLinks {
  github: string;
  linkedin: string;
  instagram: string;
  resume: string;
  email: string;
  phone: string;
  address: string;
}

export const DEFAULT_SKILLS: Skill[] = [
  { id: 's1', name: 'HTML', color: '#f97316' },
  { id: 's2', name: 'CSS', color: '#3b82f6' },
  { id: 's3', name: 'JavaScript', color: '#facc15' },
  { id: 's4', name: 'React JS', color: '#22d3ee' },
  { id: 's5', name: 'Node.js', color: '#16a34a' },
  { id: 's6', name: 'Spring Boot', color: '#65a30d' },
  { id: 's7', name: 'TypeScript', color: '#3b82f6' },
];

export const DEFAULT_SKILL_CATEGORIES: SkillCategory[] = [
  { id: 'c1', title: 'Languages', skills: ['Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
  { id: 'c2', title: 'Frontend', skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  { id: 'c3', title: 'Backend', skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs'] },
  { id: 'c4', title: 'Databases', skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase'] },
  { id: 'c5', title: 'Tools & Testing', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Manual Testing', 'API Testing'] },
  { id: 'c6', title: 'Core Skills', skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'MVC Architecture', 'Full Stack Development', 'Problem Solving'] },
];

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Fire Fencing Management System',
    image: '/lovable-uploads/fence.png',
    description:
      "The main objective of this project is to provide information about stock details and management of 'Fencing Wires' in a website. It keeps track of all stocks, sales and purchases to make the business more profitable.",
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    link: 'https://github.com/Jagappa/wire-fencing-project',
  },
  {
    id: 'p4',
    title: 'City Wise Crime Rate Prediction',
    image: '/lovable-uploads/Crime.png',
    description:
      'CrimeSight is an intelligent crime analytics platform designed to predict, visualize, and analyze cyber crime trends across cities using historical data and advanced machine learning models.',
    tags: ['TypeScript', 'Tailwind CSS', 'Machine Learning', 'Node.js'],
    link: 'https://citywisecrimerateprediction.netlify.app/',
  },
  {
    id: 'p5',
    title: 'Employee Management System',
    image: '/lovable-uploads/employee.png',
    description:
      'The Employee Management System is a full-stack CRUD web application designed to manage employee records efficiently. The frontend is built using React.js with React Router DOM for smooth navigation between components like Dashboard, Add Employee, Update Employee, and a 404 page for unmatched routes. The backend is powered by Spring Boot REST APIs connected to a MySQL database to handle data persistence.',
    tags: ['JavaScript', 'Tailwind CSS', 'SpringBoot', 'Node.js', 'MYSQL', 'React Router DOM'],
    link: 'https://github.com/Jagappa/Java-FullStack-Employee-Management-Project',
  },
];

export const DEFAULT_EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'QA Intern',
    company: 'Scaler AI Labs',
    period: 'JUN 2026 - PRESENT',
    current: true,
    bullets: [
      'Testing AI-powered applications to ensure functionality, usability, and data accuracy.',
      'Performed manual testing, bug reporting, and regression testing across multiple products.',
      'Validated REST APIs using Postman and verified application workflows.',
      'Conducted research on application features, data export capabilities, and AI datasets.',
      'Collaborated with cross-functional teams to improve product quality and user experience.',
    ],
    tech: ['Manual Testing', 'API Testing', 'Postman', 'Bug Reporting', 'QA'],
  },
  {
    id: 'e2',
    role: 'Frontend Developer Intern',
    company: 'Arshith Fresh India Pvt Ltd',
    period: 'APR 2026 - MAY 2026',
    current: false,
    bullets: [
      'Developed and maintained responsive e-commerce web pages using React.js and modern frontend technologies.',
      'Implemented UI enhancements and new features based on business requirements.',
      'Built reusable components to improve code maintainability and development efficiency.',
      'Optimized website performance and resolved UI issues across different devices.',
      'Collaborated with backend developers to integrate REST APIs into the frontend.',
    ],
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs'],
  },
  {
    id: 'e3',
    role: 'Software Engineer Intern',
    company: 'Inventeron Technologies And Business Solutions',
    period: 'DEC 2025 - MAR 2026',
    current: false,
    bullets: [
      'Developed healthcare management modules using React.js, Node.js, Express.js, and MongoDB.',
      'Built and integrated RESTful APIs for appointment scheduling, enquiry, and contact management.',
      'Implemented online slot booking and appointment scheduling features.',
      'Integrated Google Maps and WhatsApp services to improve user experience.',
      'Participated in debugging, testing, deployment, and feature enhancements.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'e4',
    role: 'Java Full Stack Intern',
    company: 'JSpiders',
    period: 'JAN 2024 - JUN 2024',
    current: false,
    bullets: [
      'Developed Java-based applications with a focus on backend development using Spring Boot.',
      'Implemented CRUD operations, RESTful APIs, and SQL queries for database-driven applications.',
      'Gained hands-on experience with Core Java, OOP, JDBC, Servlets, JSP, Spring MVC, and SQL.',
      'Built an Employee Management System as part of practical training.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring MVC', 'JDBC', 'SQL', 'REST APIs'],
  },
];

export const DEFAULT_CERTIFICATES: Certificate[] = [
  {
    id: 'cert1',
    title: 'Certified Java Full Stack Developer',
    issuer: 'JSpiders Institute',
    verified: true,
  },
  {
    id: 'cert2',
    title: 'Published Research Paper',
    issuer: 'Farmonic: A Decision-Driven AI-Integrated Agricultural E-Commerce Ecosystem',
    description:
      'Focused on AI-based crop disease detection, recommendation systems, and smart agricultural commerce.',
    verified: true,
  },
];

export const DEFAULT_EDUCATION: EducationEntry[] = [
  {
    id: 'edu1',
    institution: 'JAIN (Deemed-to-be University)',
    location: 'Bangalore, India',
    degree: 'Master of Computer Applications (AI & ML)',
    detail: 'CGPA: 8.09',
    period: '2024 - 2026',
  },
  {
    id: 'edu2',
    institution: 'JSS Shri Manjunatheshwara Institute of UG and PG Studies',
    location: 'Dharwad, India',
    degree: 'Bachelor of Science in Computer Science',
    detail: 'CGPA: 7.11',
    period: '2020 - 2023',
  },
  {
    id: 'edu3',
    institution: 'Morarji Desai Residential PU Science College',
    location: 'Bevinhalli Cross, Shahapur',
    degree: 'PCMC (Physics, Chemistry, Maths, Computer Science)',
    detail: 'Percentage: 70%',
    period: '2018 - 2020',
  },
];

export const DEFAULT_LINKS: ProfileLinks = {
  github: 'https://github.com/Jagappa',
  linkedin: 'https://www.linkedin.com/in/jagappa-m',
  instagram: 'https://www.instagram.com/jaggu_s_m07',
  resume: '/Jagappa-Resume.pdf',
  email: 'jagappamerigi@gmail.com',
  phone: '+91 7619293345',
  address: 'Vijayanagar, Bangalore 560040',
};
