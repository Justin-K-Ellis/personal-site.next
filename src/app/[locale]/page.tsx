import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import Title from "@/components/Title";
import { languages } from "@/assests/techStackData";
import TechContainer from "@/components/TechContainer";

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
        <TechContainer
          htmlId="programming-languages"
          subtitle="Programming Languages"
          tech={languages}
        />
        <hr />
      </section>
    </div>
  );
}
