import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
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
      <section id="tech-stack" className="flex flex-col gap-4 md:gap-8">
        <Title text={t("techStack")} />
        <p className="text-center">{t("whatIcanDo")}</p>
        <article id="programming-languages">
          <SubTitle text="Programming Languages" />
          <div className="flex md:flex-row flex-col gap-2 flex-wrap justify-center">
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
        </article>
        <article id="front-end"></article>
      </section>
    </div>
  );
}
