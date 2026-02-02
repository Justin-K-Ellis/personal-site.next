import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h1 className="md:text-6xl text-4xl font-bold">{t("justin")}</h1>
      <h2 className="md:text-3xl text-xl">{t("description")}</h2>
      <p className="text-justify md:w-7/10">{t("blurb")}</p>
    </section>
  );
}
