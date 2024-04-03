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
  
  hidelivery,
  favcolor,
  ezvending,
  imiproject,
  
  gladiadog,
  battleship,
  
  spencer,
  takeyoshi,
  sheryl
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
    image: takeyoshi,
  },
  {
    testimonial:
      "I can attest that Jason is a brilliant problem-solver, multi-tasker, and team player. He is resilient when it comes to overcoming challenges and staying on top of his assignments.",
    name: "Sheryl Tania",
    designation: "Product Engineer",
    company: "Esri",
    image: sheryl,
  },
]

const webProjects = [
  {
    name: "HI Delivery",
    description: "A demo front-end web application that allows users to put their grocery orders online and have them delivered to their homes in North Shore, Oahu. This demo was showcased at BYU-Hawaii's Empower Your Dreams 2024 semifinals.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Google Maps API",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe API",
        color: "orange-text-gradient",
      },
    ],
    image: hidelivery,
    link_type: "external",
    source_code_link: "https://hidelivery.app/",
  },
  {
    name: "Favorite Color Website",
    description:
      "A simple fullstack web app created using BYU's Nuxt template that adds, deletes, and edits the information of a person's favorite color.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Terraform",
        color: "orange-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "yellow-text-gradient",
      },
    ],
    image: favcolor,
    link_type: "github",
    source_code_link: "https://github.com/Tidbit0519/jtbt2-fav-color-ui",
  },
  {
    name: "EZ Vending",
    description:
      "A console program that helps BYU users to locate the nearest vending machines to their current building locations, and also recommend snacks based on their desired vending category and budget, and stores their favorite snacks along with purchase dates which they can retrieve to view or delete later.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Oracle DB",
        color: "orange-text-gradient",
      },
    ],
    image: ezvending,
    link_type: "github",
    source_code_link: "https://github.com/Tidbit0519/EzVending",
  },
  {
    name: "IMI Training Records Automation",
    description:
      "A prototype web application using XAMP stack that can create, read, update, and delete training records of IMI employees.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "yellow-text-gradient",
      },
    ],
    image: imiproject,
    link_type: "external",
    source_code_link:
      "https://www.global-imi.com/index.php/news/imi-and-byu-hawaii-collaborate-first-campus-online-internship-program",
  },
]

const gameProjects = [
  {
    name: "Battleship",
    description:
      "A simple 2D android mobile game where user control a battleship on the center of the screen and shoots any incoming airplanes and submarines to get the highest possible score within the time limit.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
    ],
    image: battleship,
    link_type: "github",
    source_code_link: "https://github.com/Tidbit0519/battleship-game",
  },
  {
    name: "Gladiadog",
    description:
      "An action arcade game where the player controls a dog swordsman and defeats a giant slime in a gladiator arena! There a re a total of 3 rounds, and only the best time is saved! The game is developed as part of my college's Unity game project, and it is still a prototype. Feel free to leave a feedback!",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
    ],
    image: gladiadog,
    link_type: "external",
    source_code_link: "https://tibit0519.itch.io/gladiadog",
  },
]
  
export {
  frontend,
  backend,
  others,
  experiences,
  webProjects,
  gameProjects,
  testimonials,
}