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
import arrayToString from "@/lib/arrayToString";

interface ProjectCardProps {
  projectData: ProjectCard;
}

export default function ProjectCard({ projectData }: ProjectCardProps) {
  const roles = arrayToString(projectData.role);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{projectData.name}</CardTitle>
        <CardDescription className="flex flex-row gap-1">
          <p>{roles}</p>
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
