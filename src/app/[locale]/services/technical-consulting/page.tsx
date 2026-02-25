import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LandingPageTemplate } from "@/components/landing";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("landing");
  return {
    title: t("consulting.seo.title"),
    description: t("consulting.seo.description"),
    openGraph: {
      title: t("consulting.seo.title"),
      description: t("consulting.seo.description"),
      type: "website",
    },
  };
}

export default function ConsultingLandingPage() {
  return (
    <LandingPageTemplate
      serviceKey="consulting"
      serviceValue="consulting"
      benefitKeys={["architecture", "assessment", "augmentation", "optimization"]}
    />
  );
}
