import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LandingPageTemplate } from "@/components/landing";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("landing");
  return {
    title: t("dba.seo.title"),
    description: t("dba.seo.description"),
    openGraph: {
      title: t("dba.seo.title"),
      description: t("dba.seo.description"),
      type: "website",
    },
  };
}

export default function DBALandingPage() {
  return (
    <LandingPageTemplate
      serviceKey="dba"
      serviceValue="dba"
      benefitKeys={["performance", "availability", "backup", "security"]}
    />
  );
}
