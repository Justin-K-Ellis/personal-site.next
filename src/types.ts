import { IconType } from "react-icons";

export interface Tech {
  name: string;
  icon: IconType;
  color: string;
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

export interface NavLink {
  url: string;
  text: string;
}

export interface ProjectCard {
  name: string;
  role: ProjectRole[];
  description: string;
  repoLink: string;
  deploymentLink?: string;
  stack: TechBadge[];
}

export type ProjectRole =
  | "Frontend Enginner"
  | "Backend Engineer"
  | "Fullstack Engineer"
  | "Project Lead";
