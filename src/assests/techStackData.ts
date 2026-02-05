import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { PiDatabase } from "react-icons/pi";
import { Tech } from "@/types";

export const languages: Tech[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-amber-300",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-sky-500",
  },
  {
    name: "SQL",
    icon: PiDatabase,
    color: "text-slate-600",
  },
];

export const frontend: Tech[] = [
  {
    name: "React.js",
    icon: SiReact,
    color: "text-blue-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "text-violet-500",
  },
];
