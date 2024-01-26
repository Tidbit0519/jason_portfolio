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

  spencer,
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
    title: "Front-End Developer Intern",
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
        "Jason displayed a remarkable ability to swiftly master React and related technologies and consistently delivering high-quality work.",
      name: "Spencer Memmott",
      designation: "Full Stack Engineer",
      company: "FamilySearch",
      image: spencer,
    },
    {
      testimonial:
        "I have had the pleasure of working with Jason on the in-house software development project at the EIS department at BYUH. He is very thorough in everything he does and can be depended upon to get the job done.",
      name: "Takeyoshi Nitta",
      designation: "Industry Process Consultant",
      company: "Dassault Systèmes",
      image:
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-1/222579565_2030568587100577_6918724366645412830_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=Qx5mdIhqzpAAX-6PEqE&_nc_ht=scontent-lax3-1.xx&cb_e2o_trans=q&oh=00_AfAe7In-KydyIcQqdGfSDLqFHAUiwBIBTWvoRCa6fy6bsg&oe=65B949EE",
    },
    {
      testimonial:
        "I can attest that Jason is a brilliant problem-solver, multi-tasker, and team player. He is resilient when it comes to overcoming challenges and staying on top of his assignments.",
      name: "Sheryl Tania",
      designation: "Product Engineer",
      company: "Esri",
      image:
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/244548761_4283056571789949_1967614878201690525_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=lY4Ppfkwp6sAX95l4Lb&_nc_ht=scontent-lax3-2.xx&cb_e2o_trans=q&oh=00_AfBU6TwjVouQKlPmePKcGxBpB2LUW5n6LM8kjk_KjoSMDA&oe=65B833F3",
    },
  ]
  
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