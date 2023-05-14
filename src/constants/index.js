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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  newsapp,
  netflix,
  text,
  fight,
  hand,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Timeline",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Developer",
    icon: backend,
  },
  {
    title: "Internet of Things",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Class 10",
    company_name: "Noel High School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2016 - 2017",
    points: [
      "Completed 10th with the CGPA of 9.4",
      "CBSE Board",
      "Achieved national level rank in National Science Olympiad"
    ],
  },
  {
    title: "Class 12",
    company_name: "Babasaheb Utangale Jr College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Completed 12th with the percentage 72.92",
    ],
  },
  
  {
    title: "BTech in Electronics and Telecommunications",
    company_name: "MIT Academy of Engineering",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2019 - May 2023",
    points: [
      "Currently pursing BTech in Electronics and Telecommunications (8th semester)",
      "CGPA of 8.10",
      "Participated in Datathon event and made it to round 3 in Machine learning domain",
    ],
  },
  
 
  {
    title: "Intern",
    company_name: "PHN Technologies",
    icon: tesla,
    iconBg: "#383E56",
    date: "Feb 2023 - June 2023",
    points: [
      "Developing and maintaining IOT applications using Arduino and Node MCU and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing Electro Mechanical modules to implement Robotic system.",
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
    name: "News App",
    description:
      "A news app that displays latest news from the api. Different category wise news with automatic updation is rendersd. News API is used to fetch the required data which is updated everyday hence the users will get new news every day using this site.",
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
    image: newsapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Text Utils",
    description:
      "A text analyzer that processes the text given by the user, such as calculating number of characters, words, reverse, etc.",
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
    image: text,
    source_code_link: "https://github.com/",
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix clone home page was developed using Front end framework that functions just like the Netflix application that we all have used.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fighting Game",
    description:
      "A basic fighting game with sound effects and simulation mode was developed using vanilla JavaScript",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML 5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fight,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automatic Hand Sanitizer",
    description:
      "Standard sanitizer machine integrated with temperature detection and oxygen sensing. Using IOT and cloud to store the data for the user to access.",
    tags: [
      {
        name: "Embedded Systems",
        color: "blue-text-gradient",
      },
      {
        name: "Sensors",
        color: "green-text-gradient",
      },
      {
        name: "IOT",
        color: "pink-text-gradient",
      },
      {
        name: "Cloud",
        color: "blue-text-gradient",
      },
    ],
    image: hand,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
