import { IconType } from "react-icons";

interface TechCardProps {
  name: string;
  Icon: IconType;
  color: string;
}

export default function TechCard({ name, Icon, color }: TechCardProps) {
  return (
    <article className="shadow rounded-sm flex gap-2 justify-center items-center p-4">
      <Icon className={`${color} text-2xl`} />
      <p>{name}</p>
    </article>
  );
}
