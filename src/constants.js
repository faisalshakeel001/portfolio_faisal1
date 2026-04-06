
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import canvaLogo from './assets/tech_logo/canva.png'; // Canva or other tools can be added here

// Experience & Education
import clubLogo from "./assets/company_logo/club_logo.png"; 
import ecellLogo from "./assets/company_logo/ecell_logo.png";
import rcplLogo from "./assets/company_logo/rcpl_logo.jpg.jpeg";
import KpsLogo from './assets/education_logo/School_logo.png';
import CocLogo from './assets/education_logo/College_logo.png';
import GecvLogo from './assets/education_logo/Gecv_logo.png';

// Projects
import IGRESLogo from './assets/work_logo/test.jpeg';
import QuizLogo from './assets/work_logo/Quiz.png';
import FaceLogo from './assets/work_logo/Face.png';
import VolumeLogo from './assets/work_logo/Hand.png';
import ConnectLogo from './assets/work_logo/Connect.png';
import LibraryLogo from './assets/work_logo/Library.png';   

/**
 * SKILLS DATA 
 * Refined to match your primary tech stack
 */
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Canva', logo: canvaLogo }, 
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Fullstack Development Intern",
    company: "RCPL IIT Kanpur (ONLINE)",
    date: "May 25 - June 25, 2025",
    desc: "Completed an intensive offline industrial training program. Developed full-stack modules by integrating modern frontend interfaces with efficient PHP/MySQL backend architectures, focusing on scalable web solutions.",
    img: rcplLogo, 
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
  },
  {
    id: 1,
    role: "Coordinator",
    company: "Startup Cell GECV",
    date: "2023 - 2025",
    desc: "Spearheading the Startup Cell to cultivate an entrepreneurial ecosystem. Orchestrated high-impact workshops and pitch competitions while managing cross-functional teams to bridge the gap between ideas and execution.",
    img: ecellLogo,
    skills: ["Teamwork", "Problem-Solving", "Event Management", "Public Speaking"],
  },
  {
    id: 2,
    role: "Active Member",
    company: "Coding Club",
    date: "2024 - Present",
    desc: "Engaged in a collaborative environment to solve complex algorithmic challenges. Contributed to peer-to-peer learning sessions, hackathons, and technical discussions to stay ahead of emerging industry trends.",
    img: clubLogo,
    skills: ["Data Structures", "Algorithms", "Collaborative Coding", "Technical Logic"],
  },
]

/**
 * EDUCATION DATA
 */
export const education = [
  {
    id: 0,
    img: GecvLogo,
    school: "Galgotias University",
    date: "Sept 2024 - June 2028",
    grade: "8 CGPA",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    desc: "Currently pursuing a B.Tech with a focus on software development and computer science fundamentals. Engaged in rigorous coursework and hands-on projects to build a strong foundation in programming, algorithms, and system design.",
  },
  {
    id: 1,
    img: CocLogo,
    school: "Oriental College , Patna City",
    date: "Sept 2020 - Aug 2022",
    grade: "%",
    degree: "Intermediate in Science with Mathematics",
    desc: "Completed higher secondary education with a focus on core sciences and mathematics. Developed analytical thinking and problem-solving skills through rigorous coursework, laying the groundwork for a future in technology and engineering.",
  },
  {
    id: 2,
    img: KpsLogo,
    school: "Krishna Public School, Patna",
    date: "2020",
    grade: "87%",
    degree: "Class X (CBSE)",
    desc: "Completed Matriculation with a strong academic record, demonstrating proficiency in core subjects. Actively participated in extracurricular activities, fostering a well-rounded skill set and a passion for learning that continues to drive my academic and professional pursuits.",
  },
];

/**
 * PROJECTS DATA
 */
export const projects = [
  {
    id: 0,
    title: "IGRES Virtual Chatbot",
    description:
      "A specialized AI-powered chatbot developed for the Smart India Hackathon (SIH). Designed to provide instant support and automate user queries with high accuracy and natural language processing.",
    image: IGRESLogo,
    tags: ["React JS", "Node JS", "AI/ML", "NLP"],
    github: "https://github.com/yourusername",
    webapp: "https://your-demo-link.com",
  },
  {
    id: 1,
    title: "Let's Connect",
    description:
      "A full-stack social networking platform designed for seamless communication. Features include real-time messaging, user profiles, and interactive post sharing.",
    image: ConnectLogo,
    tags: ["MongoDB", "Express", "React", "NodeJS"],
    github: "https://github.com/yourusername",
    webapp: "https://your-demo-link.com",
  },
  {
    id: 3,
    title: "Hand Gesture Volume Control",
    description:
      "A touchless interface project that uses MediaPipe and OpenCV to control system volume through hand gestures, bridging the gap between human action and digital response.",
    image: VolumeLogo,
    tags: ["Python", "OpenCV", "MediaPipe", "Automation"],
    github: "https://github.com/yourusername",
    webapp: "https://your-demo-link.com",
  },
  {
    id: 4,
    title: "Interactive Quiz App",
    description:
      "A dynamic quiz platform featuring category selection, timed questions, and an automated scoring system with a sleek, user-friendly interface.",
    image: QuizLogo,
    tags: ["React JS", "Tailwind CSS", "Firebase"],
    github: "https://github.com/yourusername",
    webapp: "https://your-demo-link.com",
  },
  {
    id: 5,
    title: "Digital Library Management System",
    description:
      "A comprehensive library management system designed to streamline book inventory, user registrations, and borrowing processes with an intuitive interface.",
    image: LibraryLogo,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/yourusername",
    webapp: "https://your-demo-link.com",
  },
];
