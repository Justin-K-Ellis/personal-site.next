import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import Title from "@/components/Title";
import { languages } from "@/assests/techStackData";
import TechCard from "@/components/TechCard";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div id="container" className="flex flex-col gap-4">
      <Hero />
      <hr />
      <Title text={t("projects")} />
      <hr />
      <Title text={t("techStack")} />
      {languages.map((language) => {
        return (
          <TechCard
            key={language.name}
            name={language.name}
            Icon={language.icon}
            color={language.color}
          />
        );
      })}
    </div>
  );
}
