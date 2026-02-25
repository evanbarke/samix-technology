import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LandingPageTemplate } from "@/components/landing";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("landing");
  return {
    title: t("dataEng.seo.title"),
    description: t("dataEng.seo.description"),
    openGraph: {
      title: t("dataEng.seo.title"),
      description: t("dataEng.seo.description"),
      type: "website",
    },
  };
}

export default function DataEngineeringLandingPage() {
  return (
    <LandingPageTemplate
      serviceKey="dataEng"
      serviceValue="data-engineering"
      benefitKeys={["etl", "warehouse", "realtime", "governance"]}
    />
  );
}
