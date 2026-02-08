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
];
