import { SiJavascript, SiTypescript, SiPython } from "react-icons/si";
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
