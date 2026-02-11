import { Badge } from "@/components/ui/badge";
import { TechBadge as TechBadgeData } from "@/types";

interface TechBadgeProps {
  techBadgeData: TechBadgeData;
}

export default function TechBadge({ techBadgeData }: TechBadgeProps) {
  return <Badge className="font-mono bg-blue-700">{techBadgeData}</Badge>;
}
