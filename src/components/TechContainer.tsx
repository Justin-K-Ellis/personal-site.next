import type { Tech } from "@/types";
import SubTitle from "./SubTitle";
import TechCard from "./TechCard";

interface TechContainerProps {
  htmlId: string;
  subtitle: string;
  tech: Tech[];
}

export default function TechContainer(props: TechContainerProps) {
  return (
    <article id={props.htmlId}>
      <SubTitle text={props.subtitle} />
      <div className="flex md:flex-row flex-col gap-2 flex-wrap justify-center">
        {props.tech.map((t) => {
          return (
            <TechCard
              key={t.name}
              name={t.name}
              Icon={t.icon}
              color={t.color}
            />
          );
        })}
      </div>
    </article>
  );
}
