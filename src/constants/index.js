import projectAbroadStudies from "../assets/projects/abroad.png";
import projectEducation from "../assets/projects/education.png";

import projectSevernValley from "../assets/projects/homestay.png";
import projectWorkTracker from "../assets/projects/worktracker.png";

export const HERO_TITLE_NAME = `Sarang P Achari`;

export const HERO_ROLE = `React.js Developer | Frontend Developer | Full Stack Developer`;

export const HERO_CONTENT = `I build responsive web applications and business-focused digital solutions using React.js, JavaScript, and modern web technologies. With 2+ years of combined professional and internship experience, I have worked on business applications, e-commerce platforms, learning management systems, and production websites.`;

export const ABOUT_TEXT = `I'm a Software Developer with 2+ years of combined professional and internship experience, specializing in React.js and frontend development.

My experience includes developing business applications, role-based dashboards, learning management systems, HRMS, attendance and payroll workflows, and responsive business websites.

I have worked with React.js, JavaScript, Redux, Tailwind CSS, Node.js, Express.js, MongoDB, and PostgreSQL. Alongside application development, I have hands-on experience with WordPress, Elementor, WooCommerce, website deployment, and production troubleshooting.

Currently, I work as a Web Developer at Bigbee Experience Management Pvt. Ltd., where I develop service pages, campaign landing pages, e-commerce websites, and maintain production websites.

Previously, at 4 Hand Studio, I contributed to multiple full-stack business applications, collaborating on frontend development, API integration, authentication, and application workflows.

I enjoy transforming business requirements into practical, responsive, and reliable digital solutions.`;

export const EXPERIENCES = [
  {
    year: "Aug 2026 – Present",
    role: "Web Developer",
    company: "Bigbee Experience Management Pvt. Ltd.",
    description: `Maintaining and improving four business websites using WordPress, Elementor, HTML, CSS, and JavaScript. Designed and developed 9+ service pages for the main company website and created campaign-specific advertising landing pages. Developed and launched Hoppibite.com, a customized nuts and dry-fruits e-commerce website using WordPress and WooCommerce, including product catalogs, shopping functionality, and payment gateway integration. Integrated Tawk.to live chat for customer enquiries and lead generation. Also handled production website troubleshooting, server overload and PHP configuration issues, website recovery, media optimization, security checks, backups, and performance monitoring.`,
    technologies: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "Payment Gateway Integration",
      "FTP",
      "Website Optimization",
    ],
  },
  {
    year: "Mar 2025 – Jun 2026",
    role: "Full Stack Developer",
    company: "4 Hand Studio Pvt. Ltd.",
    description: `Developed frontend modules for four business applications using React.js, JavaScript, and Tailwind CSS. Built role-specific dashboards and student application workflows for an abroad education platform. Developed learning management interfaces covering courses, assessments, student progress, subscriptions, and certificates. Contributed to HRMS applications involving employee management, attendance, payroll, live attendance, and GPS-based tracking. Also worked on school and college management systems with RFID attendance, WhatsApp notifications, and study material distribution. Built real-time chat functionality using Socket.IO and integrated REST APIs using Axios. Implemented authentication, protected routes, and role-based interfaces using Redux and Context API. Collaborated with backend developers on PostgreSQL, MongoDB, debugging, and Linux/Nginx deployment.`,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Socket.IO",
      "Axios",
      "REST APIs",
      "Linux",
      "Nginx",
    ],
  },
  {
    year: "Jul 2024 – Jan 2025",
    role: "MERN Stack Developer Intern",
    company: "Luminar Technolab",
    description: `Developed responsive web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Gained practical experience in MERN stack application development using MongoDB, Express.js, React.js, and Node.js, including server setup, API integration, database connectivity, debugging, and application deployment using Vercel.`,
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    year: "Jan 2025 – Present",
    role: "Freelance Web Developer",
    company: "Freelance",
    description: `Worked on freelance web development projects, building responsive business websites and web applications. Developed frontend interfaces using React.js, Tailwind CSS, and modern JavaScript, with integrations such as Google Maps API and WhatsApp API. Focused on responsive design, user experience, and practical business requirements.`,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Google Maps API",
      "WhatsApp API",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Work Tracker – Business Management Application",
    organization: "Freelance",
    type: "Full Stack Web Application",
    liveLink: "",
    gitLink: "",
    image: projectWorkTracker,
    description:
      "Developed a business management application with workflows for service request management, employee operations, and business activity tracking. Implemented inventory management, profit and loss tracking, PDF invoice generation, and JWT-based authentication with session management. Also developed GPS-enabled employee attendance, location-based check-ins, and work timeline reporting.",
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT Authentication",
      "GPS Tracking",
      "PDF Generation",
    ],
  },
  {
    title: "Severn Valley – Homestay Website",
    organization: "Freelance",
    type: "Business Website",
    liveLink: "https://severnvalley.co.in",
    gitLink: "",
    image: projectSevernValley,
    description:
      "Developed a responsive homestay website featuring custom carousels, location information, and mobile-friendly layouts. Integrated Google Maps API for location services and WhatsApp API for direct customer enquiries, making it easier for visitors to explore the property and contact the business.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Google Maps API",
      "WhatsApp API",
      "React Router DOM",
    ],
  },
   {
    title: "Abroad Studies – Custom Web Application",
    organization: "4 Hand Studio",
    type: "Custom Business Application",
    liveLink: "",
    gitLink: "",
    image: projectAbroadStudies,
    description:
      "Developed a custom web application to efficiently manage student inquiries, applications, and internal workflows. Built RESTful APIs using Node.js and Express.js, designed MongoDB schemas for application tracking, and implemented secure authentication with role-based access control to ensure data security and scalability.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    title: "Educational Platform – Custom Application",
    organization: "4 Hand Studio",
    type: "Custom Web Application",
    liveLink: "",
    gitLink: "",
    image: projectEducation,
    description:
      "Developed a custom educational web application to manage student data, applications, and workflow processes. Implemented RESTful APIs, structured MongoDB data models, and integrated authentication and role-based access control for secure and scalable application management.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

export const CONTACT = {
  address: "Bengaluru, Karnataka, India",
  phoneNo: "+91 7012981845",
  email: "sarangpachari@gmail.com",
};
