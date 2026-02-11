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
import TechBadge from "./TechBadge";
import arrayToString from "@/lib/arrayToString";

interface ProjectCardProps {
  projectData: ProjectCard;
}

export default function ProjectCard({ projectData }: ProjectCardProps) {
  const roles = arrayToString(projectData.role);

  return (
    <Card className="bg-stone-50 md:w-1/3 grow">
      <CardHeader>
        <CardTitle className="text-xl">{projectData.name}</CardTitle>
        <CardDescription className="flex flex-row gap-1">
          <p>{roles}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{projectData.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <div className="flex flex-wrap gap-1">
          {projectData.stack.map((tech) => (
            <TechBadge techBadgeData={tech} key={tech} />
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Link href={projectData.repoLink}>Repo</Link>
          </Button>
          {projectData.deploymentLink && (
            <Button variant="outline">
              <Link href={projectData.deploymentLink}>Live Deployment</Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
