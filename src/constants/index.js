import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  keppel,
  inforge,
  fiveSixtyDegree,
  reactNative,
  flutter,
  springBoot,
  mssql,
  postgres,
  aws,
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
    title: "Full Stack Engineer",
    icon: web
  }
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flutter",
    icon: flutter
  },
  {
    name: "Spring Boot",
    icon: springBoot
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Mssql",
    icon: mssql
  },
  {
    name: "AWS",
    icon: aws
  }
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Keppel Corporation Limited",
    country: "Singapore",
    icon: keppel,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Designing and developing scalable web and mobile applications using React.js and React Native.",
      "Creating and consuming REST APIs using Node.js, ensuring efficient backend logic and seamless integration with frontend applications.",
      "Working with MS SQL Server, writing optimized queries, stored procedures, and managing database performance.",
      "Utilizing AWS services such as S3 for storage, API Gateway for routing, and EC2 for deployment.",
      "Implementing responsive and interactive UI/UX designs to enhance user experience across web and mobile platforms."
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Inforge Technologies Pvt Ltd",
    country: "India",
    icon: inforge,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Dec 2022",
    points: [
      "Specialized in Flutter, Node.js, Spring Boot (Java), MySQL, and GraphQL, building scalable and high-performance applications.",
      "Developed a quiz application for a Norwegian client, incorporating interactive features, real-time scoring, and a user-friendly UI.",
      "Built a car import-export application for the Japanese market, integrating secure payment systems, real-time tracking, and business logic automation.",
      "Learned basic Japanese to communicate effectively with clients, ensuring smooth project coordination and requirement gathering.",
      "Worked across the entire development lifecycle, from backend architecture to frontend UI/UX, ensuring robust and efficient software solutions."
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "560 Degree Solutions",
    country: "India",
    icon: fiveSixtyDegree,
    iconBg: "#383E56",
    date: "Nov 2020 - Apr 2021",
    points: [
      "Started my career as a Backend Engineer, gaining hands-on experience in Java Spring MVC, MySQL, and Angular (Basics).",
      "Focused on building robust backend architectures, optimizing database performance, and implementing RESTful APIs.",
      "Dedicated significant time to mastering fundamentals of software development, strengthening problem-solving and debugging skills.",
      "Collaborated with cross-functional teams to integrate frontend and backend systems, ensuring smooth data flow and user interactions.",
      "Gained a strong foundation in software development principles, which became the cornerstone of my growth as a full-stack engineer."
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
