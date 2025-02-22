import { ICard } from "@/components/project-card";

export const NAVBAR_ITEMS = [
  { title: "Home", id: "/" },
  { title: "Work", id: "#" },
  { title: "About", id: "#about" },
  { title: "Contact", id: "#contact" },
];

export const SKILLS_ITEM = [
  { skill: "Javascript", icon: "/javascript.svg", bgColor: "" },
  { skill: "Typescript", icon: "/typescript.svg", bgColor: "" },
  { skill: "Reactjs", icon: "/reactjs.svg", bgColor: "" },
  { skill: "Nextjs", icon: "/nextjs.svg", bgColor: "" },
  { skill: "Tailwind css", icon: "/tailwindcss.svg", bgColor: "" },
];

export const PROJECTS: ICard[] = [
  {
    picture: "/stashwise.png",
    title: "Stashwise",
    description:
      "Founded with the vision to redefine savings and investment for the modern generation, with a focus on empowering individuals to achieve their financial goals.",
    stacks: [
      "Nextjs",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "React Query",
      "React Form Hook",
    ],
    gitLink: "",
    link: "https://stashwise.africa/",
  },
  {
    picture: "/haptle.png",
    title: "Haptle Technologies",
    description:
      "Haptle is dedicated to revolutionizing the way events are organized and experienced. The platform connects you with vetted and reliable vendors for all your needs, ensuring that your event is a success.",
    stacks: ["Nextjs", "Typescript", "Tailwind CSS", "Formik", "Zustand"],
    gitLink: "",
    link: "https://www.haptle.com/",
  },
  {
    picture: "/receitas.png",
    title: "AI Powered Recipe App",
    description:
      "Receitas is a cutting-edge recipe recommendation app powered by artificial intelligence. Built using the modern web framework Next.js.An intuitive user interface to help you plan, and cook meals.",
    stacks: ["Nextjs", "Typescript", "Tailwind CSS", "Zustand"],
    gitLink: "https://github.com/Akeemkabiru/personalised-recipe",
    link: "https://personalised-recipe.vercel.app/",
  },
  {
    picture: "/trek.png",
    title: "Globetrek App",
    description:
      "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.",
    stacks: ["Nextjs", "Typescript", "Tailwind CSS", "Zustand"],
    gitLink: "https://github.com/Akeemkabiru/personalised-recipe",
    link: "https://personalised-recipe.vercel.app/",
  },
];

export const EXPERIENCE = [
  {
    logo: "/stashwise.jpeg",
    role: "Frontend Developer",
    companyName: "Stashwise Africa",
    date: "November 2024 - Present",
    type: "Full-time",
    experience: [
      "Built responsive landing pages and dashboards using React.js, Next.js, and TailwindCSS.",
      "Implemented secure authentication, onboarding, and dynamic forms with React Hook Form.",
      "Managed state with Zustand and React Query for optimized performance and scalability.",
    ],
  },
  {
    logo: "/haptletech.jpeg",
    role: "Frontend Intern",
    companyName: "Haptle Technologies",
    date: "September 2024 - Present",
    type: "Intern",
    experience: [
      "Developed responsive UIs for an event platform using React, TypeScript, and Tailwind CSS.",
      "Implemented OAuth authentication and dynamic settings pages with Next.js routing.",
      "Integrated APIs, managed state with Zustand, and handled forms with Formik.",
    ],
  },
];

export const ABOUT = [
  {
    text: "My passion lies in creating robust and intuitive software solutions that empower businesses to grow and thrive. Whether it 's designing a dynamic website to amplify brand visibility or developing efficient software tools to automate processes, I enjoy helping businesses evolve from where they are today to their ultimate goals—and beyond.",
    secondText: [
      "Typescript",
      "Javascript",
      "Reactjs",
      "Nextjs",
      "Redux",
      "RTK",
      "React Query",
      "HTML5",
      "Zustand",
      "Golang",
      "Git & Github",
      "Formik",
      "React Form Hook",
    ],
  },
  {
    text: "With 3 years of experience as a Software Engineer, I specialize in building high-performance applications for web and mobile platforms. My work emphasizes clean, scalable code and seamless functionality, leveraging modern frameworks like React.js, Next.js, and Golang to deliver solutions that are both robust and user-friendly.",
    secondText: [
      "CSS3/SCSS/SASS",
      "Tailwind CSS",
      "Styled Components",
      "Chakra UI",
      "Framer Motion",
      "Bootstrap",
      "ReCharts",
    ],
  },
  {
    text: "Each project I take on brings a unique set of challenges, and I approach every one with a mindset of continuous learning and innovation. By collaborating closely with teams and stakeholders, I ensure that my solutions address real-world business needs while exceeding expectations. My ultimate goal is to deliver software that businesses can confidently rely on—solutions that reflect their vision and resonate with their users.",
  },
];
