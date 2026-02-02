import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";

export default function Home() {
  const t = useTranslations("HomePage");

  return <Hero />;
}
