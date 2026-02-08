import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "@/i18n/navigation";

import type { ProjectCard } from "@/types";

interface ProjectCardProps {
  projectData: ProjectCard;
}

export default function ProjectCard({ projectData }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{projectData.name}</CardTitle>
        <CardDescription className="flex flex-row gap-1">
          {projectData.role.map((r) => (
            <p key={r}>{r}</p>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{projectData.description}</p>
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
        <Button>
          <Link href={projectData.repoLink}>Repo</Link>
        </Button>
        {projectData.deploymentLink && (
          <Button>
            <Link href={projectData.deploymentLink}>Live Deployment</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
