import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return <div>Hello, my name is {t("justin")}</div>;
}
