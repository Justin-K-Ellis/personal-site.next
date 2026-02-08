import { useTranslations } from "next-intl";

import Hero from "@/components/Hero";
import Title from "@/components/Title";
import TechContainer from "@/components/TechContainer";
import ProjectCard from "@/components/ProjectCard";

import { languages, frontend, backend, tools } from "@/assests/techStackData";
import { projects } from "@/assests/projectsData";

export default function Home() {
  const t = useTranslations("HomePage");
  const languageSubtitleMsg = t("languageSubtitle");
  const frontendSubtitleMsg = t("frontendSubtitle");
  const backendSubtitleMsg = t("backendSubtitle");
  const toolsSubtitleMsg = t("toolingSubtitle");

  return (
    <div id="container" className="flex flex-col gap-4">
      <Hero />
      <hr />
      <Title text={t("projects")} />
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.name} projectData={project} />
        ))}
      </div>
      <hr />
      <section id="tech-stack" className="flex flex-col gap-4 md:gap-8">
        <Title text={t("techStack")} />
        <p className="text-center">{t("whatIcanDo")}</p>
        <TechContainer
          htmlId="programming-languages"
          subtitle={languageSubtitleMsg}
          tech={languages}
        />
        <hr />
        <TechContainer
          htmlId="fontend-tech"
          subtitle={frontendSubtitleMsg}
          tech={frontend}
        />
        <hr />
        <TechContainer
          htmlId="backend-tech"
          subtitle={backendSubtitleMsg}
          tech={backend}
        />
        <hr />
        <TechContainer
          htmlId="tool-tech"
          subtitle={toolsSubtitleMsg}
          tech={tools}
        />
      </section>
    </div>
  );
}
