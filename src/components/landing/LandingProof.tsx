"use client";

import { useTranslations } from "next-intl";

interface LandingProofProps {
  serviceKey: "softwareDev" | "dataEng" | "dba" | "consulting";
}

const testimonialCounts: Record<string, number> = {
  softwareDev: 1,
  dataEng: 2,
};

export default function LandingProof({ serviceKey }: LandingProofProps) {
  const t = useTranslations("landing");

  const count = testimonialCounts[serviceKey] || 0;
  const testimonialIndices = Array.from({ length: count }, (_, i) => i);

  const stats = [
    { value: t("proof.experienceYears"), label: t("proof.experienceLabel") },
    { value: t("proof.satisfactionValue"), label: t("proof.satisfactionLabel") },
    { value: t("proof.supportValue"), label: t("proof.supportLabel") },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-dark-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        {count > 0 && (
          <div className={`grid gap-6 mb-16 ${count > 1 ? "md:grid-cols-2" : ""}`}>
            {testimonialIndices.map((i) => (
              <div key={i} className="glass-card p-8 md:p-10 text-center">
                <svg
                  className="w-8 h-8 text-primary-500/30 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-lg md:text-xl text-dark-200 font-medium leading-relaxed mb-4">
                  &ldquo;{t(`${serviceKey}.testimonials.${i}.quote`)}&rdquo;
                </blockquote>
                <cite className="text-dark-500 text-sm not-italic">
                  — {t(`${serviceKey}.testimonials.${i}.author`)}
                </cite>
              </div>
            ))}
          </div>
        )}

        {/* Creator / About Section (DBA) */}
        {serviceKey === "dba" && (
          <div className="glass-card p-8 md:p-12 mb-16">
            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t("dba.creator.heading")}
                </h3>
                <p className="text-dark-300 leading-relaxed mb-3">
                  {t("dba.creator.description")}
                </p>
                <p className="text-primary-400 font-medium">
                  {t("dba.creator.closing")}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Trust Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-dark-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
