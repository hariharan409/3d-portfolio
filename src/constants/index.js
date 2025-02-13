import {
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  keppel,
  inforge,
  fiveSixtyDegree,
  reactNative,
  flutter,
  springBoot,
  mssql,
  aws,
  introductionToTypescript,
  learningAWSLambda,
  learningGit,
  learningReduxToolkit,
  nodejsEssentialTraining,
  gitIntermediateTechnique,
  jsDeepLearning,
  jsEssentialTraining,
  jsForLogicalThinking,
  jsProfessionalCertificate,
  learnJS,
  problemSolvingCertificate,
  reactJSCodeChallenge,
  typescriptForJSDevelopers,
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

const certifications = [
  {
    name: "Introduction To Typescript",
    description:
      "The Introduction to TypeScript course from Great Learning covers key concepts like strong typing, classes, interfaces, and OOP, helping developers write scalable, maintainable code for modern web apps.",
    specialization: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: introductionToTypescript,
    certificateLink: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-typescript?utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin_certificate_share&utm_source_page=public_certificate_view",
  },
  {
    name: "AWS Lambda",
    description: "The Learning Amazon Web Services Lambda course covers AWS Lambda's core concepts, event-driven architecture, deployment, and integration with AWS services, helping build scalable, serverless applications efficiently.",
    specialization: [
      {
        name: "aws lambda",
        color: "blue-text-gradient",
      },
    ],
    image: learningAWSLambda,
    certificateLink: "https://www.linkedin.com/learning/certificates/0a6ae7aa42ec45e93c335fa1e798e02744066bf327a8995abb876e5d2f197609?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bc5SxWybrTCqXsoqpleqFAg%3D%3D",
  },
  {
    name: "Git and Github",
    description: "The Learning Git and GitHub course covers version control basics, branching, merging, pull requests, and collaboration using Git and GitHub, enabling efficient code management and teamwork in software development.",
    specialization: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
    ],
    image: learningGit,
    certificateLink: "https://www.linkedin.com/learning/certificates/f1ba474f9035cdc068efc2a8d3db98fd0ad951a7f5da7caef93802f727b58365?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bc5SxWybrTCqXsoqpleqFAg%3D%3D",
  },
  {
    name: "Learning Redux Toolkit",
    description: "The Learning Redux Toolkit course covers state management, reducers, slices, async operations, and best practices, helping developers efficiently manage application state in React using Redux Toolkit.",
    specialization: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux.js",
        color: "green-text-gradient",
      },
    ],
    image: learningReduxToolkit,
    certificateLink: "https://www.linkedin.com/learning/certificates/52aae58554d124ae2d06cb030b7ea41b11e5831b5f3fa36dab9972ea72b79f63?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bc5SxWybrTCqXsoqpleqFAg%3D%3D",
  },
  {
    name: "Node.js Essential Training",
    description: "The Node.js Essential Training course covers core Node.js concepts, including asynchronous programming, modules, REST APIs, and database integration, helping developers build scalable and efficient server-side applications.",
    specialization: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: nodejsEssentialTraining,
    certificateLink: "https://www.linkedin.com/learning/certificates/59c524b6355ec7e787291b7095581b8ed8c688accb556c161c002cc770021dda?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bc5SxWybrTCqXsoqpleqFAg%3D%3D",
  },

  {
    name: "TypeScript for Developers",
    description: "TypeScript for JavaScript Developers is a course designed to help JavaScript programmers learn TypeScript, covering types, interfaces, generics, and advanced features to build scalable, maintainable code.",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: typescriptForJSDevelopers,
    certificateLink: "https://www.linkedin.com/learning/certificates/e460c0c3d314198f94e5b50f6a7e3de791258064599c51c4e3c28913a2880821?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "Hacker Rank Problem Solving",
    description: "HackerRank Problem Solving enhances algorithmic thinking and coding skills through challenges on data structures sorting graph theory and more helping developers improve efficiency and logic.",
    specialization: [
      {
        name: "data structure",
        color: "blue-text-gradient",
      },
      {
        name: "algorithm",
        color: "green-text-gradient",
      },
    ],
    image: problemSolvingCertificate,
    certificateLink: "https://www.hackerrank.com/certificates/156401efb2da",
  },

  {
    name: "React.js Code Challenges",
    description: "React.js Code Challenges helps developers improve their React skills through hands-on coding exercises covering components state props hooks and advanced patterns to build efficient and scalable applications.",
    specialization: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
    ],
    image: reactJSCodeChallenge,
    certificateLink: "https://www.linkedin.com/learning/certificates/ed6566487f988f70e8d9cd7bdf82c565edf3013e8c0670a390e3f3f1b6224036?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "Git Intermediate Techniques",
    description: "Git Intermediate Techniques covers branching merging rebasing stash interactive rebase and advanced commit management helping developers enhance their version control skills for efficient collaboration",
    specialization: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "version control",
        color: "green-text-gradient",
      },
    ],
    image: gitIntermediateTechnique,
    certificateLink: "https://www.linkedin.com/learning/certificates/84e6ec7b8b39fcb84bbcb71fb42f260221e3dd18ea1861c29cf0326e65d449f4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "JavaScript Essential Training",
    description: "JavaScript Essential Training covers core concepts like variables functions objects DOM manipulation and asynchronous programming helping developers build dynamic and interactive web applications efficiently",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: jsEssentialTraining,
    certificateLink: "https://www.linkedin.com/learning/certificates/7ed5c5ae26231c4bfa02e5dbb42c3cffe3c0ab76a2b15b8069288cd42bca5a34?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "JavaScript Certificate by Mozilla",
    description: "JavaScript Foundations Professional Certificate by Mozilla covers fundamental JavaScript concepts including variables functions objects and event handling helping developers build interactive and dynamic web applications",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "web development",
        color: "green-text-gradient",
      },
    ],
    image: jsProfessionalCertificate,
    certificateLink: "https://www.linkedin.com/learning/certificates/129bfced981d20a863c24db6356ca597e7b965ea234ae81957c31a7c796ac28d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "JavaScript: Under the Hood",
    description: "JavaScript: Under the Hood explores the inner workings of JavaScript including how the engine interprets code memory management event loops and the call stack empowering developers to write more efficient and optimized code.",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: jsDeepLearning,
    certificateLink: "https://www.linkedin.com/learning/certificates/1a254590562fdd8da474de477723f5a0ca5d45a0e283e0f3aa6461be8a35ea95?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },
  {
    name: "Javascript for Logical Thinking",
    description: "JavaScript for Logical Thinking and Problem Solving focuses on using JavaScript to develop strong problem-solving skills by covering algorithms, data structures, and logic-based challenges to enhance coding efficiency and clarity.",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "problem solving",
        color: "green-text-gradient",
      },
    ],
    image: jsForLogicalThinking,
    certificateLink: "https://www.udemy.com/certificate/UC-afa7d773-7f7b-4b45-a3e5-ee95c3e1497a/",
  },
  {
    name: "Learning the JavaScript Language",
    description: "Learning the JavaScript Language covers the fundamentals of JavaScript, including syntax, variables, data types, functions, and control structures, helping developers build a strong foundation for web development.",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: learnJS,
    certificateLink: "https://www.linkedin.com/learning/certificates/2a56ed354117b8632e6f60da58051ac62d3a9f79bf534ffb072301bd5e9b7649?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },
];

export { services, technologies, experiences, testimonials, certifications };
