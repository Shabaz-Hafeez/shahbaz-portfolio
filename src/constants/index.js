import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  laravel,
  codeigniter,
  yii2,
  apisix,
  kubernetes,
  jenkins,
  jira,
  livewire,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  upwork,
  centangle,
  mtbc,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Microservices",
    icon: web,
  },
  {
    title: "PHP Laravel Developer",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "Wordpress",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Codeigniter",
    icon: codeigniter,
  },
  {
    name: "Yii2",
    icon: yii2,
  },
  {
    name: "APISIX",
    icon: apisix,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "livewire",
    icon: livewire,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "March 2021 - September 2023",
    points: [
      "Developing and maintaining web applications using wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Centangle Interactive",
    icon: centangle,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2024",
    points: [
      "Designed and developed the entire backend architecture using Laravel and Yii2 Advanced",
      "Built and maintained independent backend microservices (authentication, profile, recommendation) using REST APIs and JWT, following domain-driven design for clean separation",
      "Designed optimized MySQL schemas and service-specific data stores with indexes and stored procedures, reducing query latency by 25–35%. Collaborated with the team to improve user experience, resulting in a 20% increase in website traffic.",
      "Collaborated with frontend/integration teams to define API contracts, enabling seamless UX integration and contributing to rapid user adoption and engagement Managing the work log and following the schedule to ensure completion of projects before deadline.",
    ],
  },
  {
    title: "Full Stack Laravel Developer",
    company_name: "MTBC Carecloud",
    icon: mtbc,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Developed custom modules for online admissions, transport, online tests, and fee invoicing.",
      "Implemented secure online payment integrations (EasyPaisa, PayPal). ",
      "Worked in Agile environment Participated in daily stand-ups and sprint planning meetings to ensure timely project delivery. ",
      "Developed and executed unit test cases for project files, ensuring robustness and reliability.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portal BGS",
    description:
      "A comprehensive web-based school management system that handles everything from online admissions and invoicing to transportation management, online examinations, attendance tracking, academic records, and more.",
    tags: [
      {
        name: "Laravel-Livewire",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://bgs.edu.pk/",
  },
  {
    name: "PMYP(Digital Youth Hub)",
    description:
      "The Digital Youth Hub (DYH) is a groundbreaking, AI-powered digital platform established under the Prime Minister’s Youth Programme (PMYP), in collaboration with UNICEF's Generation Unlimited (GenU). Designed as Pakistan’s first-of-its-kind “one-stop shop,” it connects youth nationwide to transformative opportunities across four core pillars: Education, Employment, Engagement, and Environment.",
    tags: [
      {
        name: "Yii2Advanced",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://pmyp.gov.pk/",
  },
  {
    name: "Cyberdise",
    description:
      "Web based AI-powered cybersecurity awareness and training platform offering organizations tools to build phishing and smishing simulation campaigns alongside tailored training for employees",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://cyberdise-awareness.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
