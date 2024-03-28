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
    carrent,
    jobit,
    threejs,
    java,
    iimun,
    scholist,
    Microsoft ,
    Chat
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About Me",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "resume",
      title: "Resume"
    },
    {
      id: "contact",
      title: "Hire Me",
    }
  ];
  
  const services = [
    {
      title: "MERN stack Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "ML Expert",
      icon: backend,
    },
    {
      title: "JAVA Developer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "docker",
      icon: docker,
    },
    {
      name:"java",
      icon: java,
    },
    {
      name:"figma",
      icon:figma
    }
  ];
  
  const experiences = [
    {
      title: "Campus Ambassador",
      company_name: "Scholist",
      icon: scholist,
      iconBg: "#383E56",
      date: "March 2023 - May 2023",
      points: [
        "Scholist facilitates students in selecting the finest universities in the USA through its educational online platform.",
        "Establishing strong public relations with organizations is a core focus.",
        "Utilizing LinkedIn, we amplify Scholist's visibility by sharing informative newsletters.",
        "Conducting targeted messaging among all students within my college community ensures effective communication.",
      ],
    },
    {
      title: "Campus Ambassador",
      company_name: "IIMUN",
      icon: iimun,
      iconBg: "#E6DEDD",
      date: "March 2023 - April 2023",
      points: [
        "IIMUN(India's International Model United Nations), the world’s largest youth-run organization.",
        "Engaged in organizational activities to enhance awareness and participation.",
        "Collaborated with peers and organizational leaders to ensure successful execution of events and initiatives.",
        "Promoted student conferences in this Delhi Chapter of IIMUN."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Microsoft Cloned",
      description:
        "Inspired by Microsoft it offers a familiar interface",
      tags: [
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "HTML5",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Microsoft,
      source_code_link: "https://github.com/GitMohit123/Microsoft-Cloned",
    },
    {
      name: "Chat Application",
      description:
        "Server-based web chat application utilizes Socket.IO for real-time communication",
      tags: [
        {
          name: "SocketIO",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJs",
          color: "pink-text-gradient",
        },
      ],
      image: Chat,
      source_code_link: "https://github.com/GitMohit123/Chat-application",
    },
  ];
  
  export { services, technologies, experiences,  projects };