import {
  frontend,
  backend,
  ux,
  graphics,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  php,
  tms,
  lms,
  chefGPT,
  note,
  mysql,
  photoshop,
  illustrator,
  blender,
  coverhunt,
  alx,
  profound,
  hplife,
  aistarter,
  agile,
  dcc,
  kelhel,
  microverse,
  bootstrap,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Graphics Design',
    icon: graphics,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'php',
    icon: php,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
  },
  {
    name: 'photoshop',
    icon: photoshop,
  },
  {
    name: 'illustrator',
    icon: illustrator,
  },
  {
    name: 'blender',
    icon: blender,
  }
];

const experiences = [
  {
    title: 'ALX Professional Foundation',
    company_name: 'ALX Ethiopia',
    icon: alx,
    iconBg: '#333333',
    date: 'Aug 2024 - Oct 2024',
    points: [
      'Developed essential workplace & professional skills such as effective communication, teamwork, time management, problem solving & personal branding.',
      'Gained experience in project-based learning, ethical leadership and using digital tools to work productively in a professional environment.'
    ],
    certificateImage: profound,
    certificateLink: 'https://www.linkedin.com/posts/eyuel-getachew_share-7258002093364416512-dGY5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCjG0QBPqkXH4NBzT-f3NeL8u8RvVr0U0Y',
  },
  {
    title: 'Agile Project Management',
    company_name: 'HP Life',
    icon: hplife,
    iconBg: '#333333',
    date: 'Jan 2025 - Mar 2025',
    points: [
      'Learned the core principles of Agile and how to manage projects using iterative and flexible methods.',
      'Gained skills in planning, prioritizing tasks, and adapting to change during a project lifecycle.',
      'Developed teamwork and communication skills for collaborating effectively in project environments.',
    ],
    certificateImage: agile,
    certificateLink: 'https://www.linkedin.com/posts/eyuel-getachew_agileprojectmanagement-projectmanagement-share-7304443570961235968-3y1b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCjG0QBPqkXH4NBzT-f3NeL8u8RvVr0U0Y',
  },
  {
    title: 'ALX AI Starter Kit',
    company_name: 'ALX Ethiopia',
    icon: alx,
    iconBg: '#333333',
    date: 'Feb 2025 - April 2025',
    points: [
      'Learned the basic concepts of Artificial Intelligence, including how AI systems work and where they are used in real life.',
      'Gained an introduction to machine learning, data, and how models are trained to make predictions or decisions.',
      'Developed awareness of ethical AI use and how to apply AI tools responsibly in problem-solving.',
    ],
    certificateImage: aistarter,
    certificateLink: 'https://www.linkedin.com/posts/eyuel-getachew_ai-artificialintelligence-learningjourney-share-7320075796490993664-D0Qj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCjG0QBPqkXH4NBzT-f3NeL8u8RvVr0U0Y',
  },
];


const projects = [
  {
    id: 'project-1',
    name: 'Tourism Management System',
    description: "Discover ancient Lalibela, trek the Simiens, and experience the heart of Ethiopia.",
    tags: [
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'pink-text-gradient',
      },
    ],
    image: tms,
    repo: 'https://github.com/Eyuel-G/Tourism-Management-System',
    demo: 'https://tourism-management-system.rf.gd/',
  },
  {
    id: 'project-2',
    name: 'Chef-GPT',
    description:
      'An intelligent recipe recommendation system powered by the LLaMA 3.1 large language model deployed via the Hugging Face platform.',
    tags: [
      {
        name: 'React JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Hugging Face',
        color: 'yellow-text-gradient',
      },
    ],
    image: chefGPT,
    repo: 'https://github.com/Eyuel-G/Chef-GPT',
    demo: 'https://chef-gpt-593m.onrender.com/',
  },
  {
    id: 'project-3',
    name: 'Note-Taking App',
    description: 'A lightweight note management system that enables users to CRUD operations through a React.js user interface and a Node.js backend service.',
    tags: [
      {
        name: 'React JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node JS',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'yellow-text-gradient',
      },
    ],
    image: note,
    repo: 'https://github.com/Eyuel-G/Note-Taking-App/tree/main',
    demo: 'https://notes-frontend-tvd1.onrender.com/',
  },
  {
    id: 'project-4',
    name: 'Libaray Management System',
    description: `Library Management system built with Java using JavaFX for UI and apply, have role-based UI for both customer and admin`,
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Java FX',
        color: 'green-text-gradient',
      },
      {
        name: 'SQL',
        color: 'pink-text-gradient',
      },
    ],
    image: lms,
    repo: 'https://github.com/Eyuel-G/Library-Management-System',
    demo: 'https://drive.google.com/drive/folders/1CMDr4dnML75QSQhPeO14shYMlVu3bdK0?usp=drive_link',
  },
];

export { services, technologies, experiences, projects };
