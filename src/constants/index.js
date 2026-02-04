import project1 from "../assets/projects/project-1.png";
import project5 from "../assets/projects/project-5.png";
import project8 from "../assets/projects/project-8.png";
import projectAbroadStudies from "../assets/projects/abroad.png";
import projectEducation from "../assets/projects/education.png";
import projectSevernValley from "../assets/projects/homestay.png";
import projectWorkTracker from "../assets/projects/worktracker.png";

export const HERO_TITLE_NAME = `Sarang P Achari`;

export const HERO_ROLE = `Software Developer`;

export const HERO_CONTENT = `I am a Full Stack MERN Developer with 1+ year of professional experience, currently working on building custom web applications. I hold a BCA degree and specialize in developing scalable and user-friendly web solutions using React.js, Node.js, Express.js, and MongoDB.

I also work extensively with modern UI frameworks such as Shadcn UI, Tailwind CSS, focusing on clean architecture, performance optimization, and real-world business applications.`;

export const ABOUT_TEXT = `I am a Full Stack MERN Developer with 1+ year of professional experience, currently working as a Full Stack Developer focused on building custom web applications. I hold a Bachelor of Computer Applications (BCA) degree and am a self-taught developer with a strong interest in creating scalable, secure, and high-performance web solutions.

My core expertise lies in the MERN stack, including React.js for building dynamic user interfaces, Node.js and Express.js for backend development, and MongoDB for database management. I also work extensively with modern UI frameworks and libraries such as Tailwind CSS, Shadcn UI, Flowbite, and Daisy UI to design responsive, accessible, and user-friendly interfaces.

In my current role, I primarily develop custom web applications tailored to business requirements, implement RESTful APIs, handle authentication and authorization, and optimize application performance. I focus on writing clean, maintainable code and following best practices in full stack development.

I am passionate about continuous learning, problem-solving, and staying up to date with modern web technologies. I enjoy taking on challenging projects, improving system architecture, and delivering reliable web applications that provide real value to users and businesses.`;

export const EXPERIENCES = [
  {
    year: "Mar 2025 – Present",
    role: "Full Stack Developer",
    company: "4 Hand Studio",
    description: `Currently working as a Full Stack Developer specializing in custom web application development for businesses. I build end-to-end web solutions using the MERN stack along with PostgreSQL, handling both front-end and back-end development. My work includes developing scalable web applications, designing RESTful APIs, implementing secure authentication systems, and integrating payment gateways such as Razorpay, Stripe, and Cashfree. I focus on delivering reliable, high-performance applications tailored to real-world business requirements.`,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Razorpay",
      "Stripe",
      "Cashfree",
    ],
  },
  {
    year: "Jan 2025 - Mar 2025",
    role: "Junior Full Stack Developer",
    company: "Freelance.",
    description: ` I specialize in freelancing web development projects using the MERN stack. I handle both front-end and back-end development, creating dynamic and responsive applications with MongoDB, Express.js, React.js, and Node.js, ensuring a seamless and integrated web experience for clients.`,
    technologies: ["React.js", "Node.js", "mongoDB", "Express.js"],
  },

];

export const PROJECTS = [
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
  {
    title: "Severn Valley – Homestay Website",
    organization: "Freelance",
    type: "Business Website",
    liveLink: "https://severnvalley.co.in",
    gitLink: "",
    image: projectSevernValley,
    description:
      "Developed a homestay website to simplify bookings and communication with location highlights. Integrated Google Maps API for location display, WhatsApp API for direct inquiries, and implemented a responsive UI with smooth navigation using React Router DOM.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Google Maps API",
      "WhatsApp API",
    ],
  },
  {
    title: "Work Tracker",
    organization: "Freelance",
    type: "Task Management Application",
    liveLink: "https://worktracker.com",
    gitLink: "",
    image: projectWorkTracker,
    description:
      "Built a task management web application to track and organize daily work activities efficiently. Implemented real-time data handling and authentication using Firebase, with a responsive and intuitive user interface.",
    technologies: [
      "React",
      "React-Bootstrap",
      "Firebase",
    ],
  },
  {
    title: "Q-Bucket",
    liveLink: "https://qbucket.mac.edu.in/",
    gitLink: "",
    image: project1,
    description:
      "A fully functional platform built with HTML and Pure CSS for browsing previous Mahatma Gandhi University question papers, featuring a user-friendly interface.",
    technologies: ["HTML", "Pure CSS"],
  },
  {
    title: "Just Home Real Estate UI",
    liveLink: "https://justhomebysarang.netlify.app/#",
    gitLink: "https://github.com/sarangpachari/justhome.git",
    image: project5,
    description:
      "A sleek real estate UI built with HTML and Tailwind CSS for a modern, responsive design.",
    technologies: ["HTML", "Tailwind CSS"],
  },
  {
    title: "Furniture World UI",
    liveLink: "https://sarangpachari.github.io/furnitureworld/",
    gitLink: "https://github.com/sarangpachari/furnitureworld.git",
    image: project8,
    description:
      "Furniture World UI is a sleek and responsive web interface built with HTML and Pure CSS, focused on modern furniture design.",
    technologies: ["HTML", "Pure CSS"],
  },
];

export const CONTACT = {
  address: "Kochi, India ",
  phoneNo: "+91 7012 981 845 ",
  email: "sarangpachari@gmail.com",
};
