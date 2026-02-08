import { ProjectCard } from "@/types";

export const projects: ProjectCard[] = [
  {
    name: "Japan Events",
    role: ["Project Lead", "Fullstack Engineer"],
    description:
      "An app that indexes events from around Japan and let's users find them with a rich search interface, save interesting events, and anonymously share them.",
    repoLink: "https://github.com/Event-Curator/event-curator",
    deploymentLink: "https://eventsjp.com/",
    stack: [
      "React",
      "React Router",
      "Express",
      "PostgreSQL",
      "Knex.js",
      "Firebase auth",
      "Tailwind",
    ],
  },
  {
    name: "Recipe Wrangler",
    role: ["Fullstack Engineer"],
    description:
      "Allows users to search for recipes, creates check lists for ingredients and cooking directions. Logged in users can also save recipes and create their own.",
    repoLink: "https://github.com/Justin-K-Ellis/recipe_wrangler_client",
    deploymentLink: "https://recipe-wrangler-client.vercel.app/home",
    stack: [
      "TypeScript",
      "Next",
      "Express",
      "PostgreSQL",
      "Firebase auth",
      "Spoontacular API",
    ],
  },
];
