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
  | "Google Places API"
  | "JavaScript"
  | "Knex.js"
  | "Next"
  | "next-intl"
  | "PostgreSQL"
  | "React Router"
  | "React"
  | "shadcn/ui"
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
