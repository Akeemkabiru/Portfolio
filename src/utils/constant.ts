import { ICard } from "@/components/project-card";

export const NAVBAR_ITEMS = [
  { value: "Home", route: "/" },
  { value: "Projects", route: "/about" },
  { value: "About", route: "/experience" },
  { value: "Contact", route: "/contact" },
];

export const SKILLS_ITEM = [
  { skill: "Javascript", icon: "/javascript.svg", bgColor: "" },
  { skill: "Typescript", icon: "/typescript.svg", bgColor: "" },
  { skill: "Reactjs", icon: "/reactjs.svg", bgColor: "" },
  { skill: "Nextjs", icon: "/nextjs.svg", bgColor: "" },
  { skill: "Tailwind css", icon: "/tailwindcss.svg", bgColor: "" },
];

export const EXPERIENCE: ICard[] = [
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
];
