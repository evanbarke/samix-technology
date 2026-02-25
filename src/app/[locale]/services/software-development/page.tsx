import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LandingPageTemplate } from "@/components/landing";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("landing");
  return {
    title: t("softwareDev.seo.title"),
    description: t("softwareDev.seo.description"),
    openGraph: {
      title: t("softwareDev.seo.title"),
      description: t("softwareDev.seo.description"),
      type: "website",
    },
  };
}

export default function SoftwareDevLandingPage() {
  return (
    <LandingPageTemplate
      serviceKey="softwareDev"
      serviceValue="software-development"
      benefitKeys={["fullstack", "api", "cloud", "legacy"]}
    />
  );
}
