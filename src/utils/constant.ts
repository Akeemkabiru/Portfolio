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
      "Built a responsive landing page and a multi-page dashboard, collaborated with designers and backend engineers to deliver a user-centric and scalable Gamified Savings platform  using React.js, Next.js, and TailwindCSS.",
      "Designed and implemented a secure authentication system, a seamless onboarding process, and dynamic, validated forms with React Hook Form.",
      "Managed state efficiently using Zustand for application state and React Query for remote data fetching, optimizing performance and scalability.",
    ],
  },
  {
    logo: "/haptletech.jpeg",
    role: "Frontend Intern",
    companyName: "Haptle Technologies",
    date: "September 2024 - Present",
    type: "Intern",
    experience: [
      "Developed responsive user interfaces for the event planning platform using React, TypeScript, Next.js, and Tailwind CSS, ensuring seamless cross-device experiences.",
      "Implemented OAuth authentication for secure login and built a dynamic settings page with Next.js routing to allow users to manage preferences.",
      "Integrated APIs and managed global state with Zustand and utilized Formik for form handling and verification.",
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
