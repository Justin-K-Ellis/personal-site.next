import { IconType } from "react-icons";

export interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

export interface NavLink {
  url: string;
  text: string;
}

export type TechBadge =
  | "daisyUI"
  | "Express"
  | "Firebase auth"
  | "Google Maps API"
  | "JavaScript"
  | "Knex.js"
  | "Next"
  | "PostgreSQL"
  | "React Router"
  | "React"
  | "shadcb/ui"
  | "Spoontacular API"
  | "Tailwind"
  | "TypeScript"
  | "Vue";
