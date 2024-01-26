import { c } from "maath/dist/index-0332b2ed.esm";
import {
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  threejs,

  nodejs,
  csharp,
  aspnetcore,
  mysql,
  
  git,
  unity,
  java,
  python,
  
  familysearch,
  byuhawaii,
  imi,

  carrent,
  jobit,
  tripguide,
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  const services = [
    // {
    //   title: "Front End Web Developer",
    //   icon: web,
    // },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const frontend = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
];
  
const backend = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "ASP.NET Core",
    icon: aspnetcore,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const others = [
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
];
      
  
const experiences = [
  {
    title: "EIS Student Developer/Analyst",
    company_name: "Brigham Young University-Hawaii",
    icon: byuhawaii,
    iconBg: "#383E56",
    date: "May 2022 - Current",
    points: [
      "Developed and maintained APIs using ASP.NET Core to manage test records for a student population of approximately 3000 at BYU-Hawaii's Testing Center App",
      "Assisted full-time developers in maintaining the frontend of 10 web applications using a low-code platform, Mendix.",
      "Created a frontend starter app template and reduced an estimated development time by 20%",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "FamilySearch",
    icon: familysearch,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Developed a React-based transliterator prototype for an ancient Filipino script, Baybayin.",
      "Prototyped dynamic rendering of PDF documents within web pages using react-pdf and the Adobe PDF Embed API.",
      "Adhered to DevOps best practices and achieve 100% code coverage in unit testing.",
      "Collaborated with UX/UI designers to implement culturally-influenced widgets to resonate with target audiences.",
    ],
  },
  {
    title: "Project Manager Intern",
    company_name: "Integrated Micro-Electronics, Inc. (IMI Global)",
    icon: imi,
    iconBg: "#383E56",
    date: "January 2022 - April 2022",
    points: [
      "Pioneered an international internship collaboration between the company and the university in a team of 5 students and achieving a 100% deliverables rate despite a 17-hour timezone difference.",
      "Prototyped a CRUD web application using XAMP stack to audit over 17,000 employees’ training records.",
    ],
  },
]
  
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
  
  export { services, frontend, backend, others, experiences, testimonials, projects };