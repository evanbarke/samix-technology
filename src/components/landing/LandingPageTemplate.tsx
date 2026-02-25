"use client";

import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import LandingBenefits from "./LandingBenefits";
import LandingProof from "./LandingProof";
import LandingCTA from "./LandingCTA";
import LandingFooter from "./LandingFooter";

interface ServiceConfig {
  serviceKey: "softwareDev" | "dataEng" | "dba" | "consulting";
  serviceValue: string;
  benefitKeys: string[];
}

export default function LandingPageTemplate({
  serviceKey,
  serviceValue,
  benefitKeys,
}: ServiceConfig) {
  return (
    <main className="min-h-screen">
      <LandingHeader />
      <LandingHero serviceKey={serviceKey} />
      <LandingBenefits serviceKey={serviceKey} benefitKeys={benefitKeys} />
      <LandingProof serviceKey={serviceKey} />
      <LandingCTA serviceValue={serviceValue} />
      <LandingFooter />
    </main>
  );
}
