import { BsLinkedin } from "react-icons/bs";

export const NAVBAR_ITEMS = [
  { value: "Home", route: "/" },
  { value: "Projects", route: "/about" },
  { value: "About", route: "/experience" },
  { value: "Contact", route: "/contact" },
];

export const SOCIALS: { link: string; icon: any }[] = [
  // { link: "https://github.com/Akeemkabiru", icon: "/github.svg" },
  { link: "https://www.linkedin.com/in/akeemkabiru", icon: BsLinkedin },
  // { link: "https://x.com/kabby_10", icon: "/x.svg" },
  // { link: "https://x.com/kabby_10", icon: "/x.svg" },
];

export const SKILLS_ITEM = [
  { skill: "Javascript", icon: "/javascript.svg", bgColor: "" },
  { skill: "Typescript", icon: "/typescript.svg", bgColor: "" },
  { skill: "Reactjs", icon: "/reactjs.svg", bgColor: "" },
  { skill: "Nextjs", icon: "/nextjs.svg", bgColor: "" },
  { skill: "Tailwind css", icon: "/tailwindcss.svg", bgColor: "" },
];
