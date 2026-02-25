"use client";

import { useTranslations } from "next-intl";

interface LandingProofProps {
  serviceKey: "softwareDev" | "dataEng" | "dba" | "consulting";
}

export default function LandingProof({ serviceKey }: LandingProofProps) {
  const t = useTranslations("landing");

  const stats = [
    { value: t("proof.experienceYears"), label: t("proof.experienceLabel") },
    { value: t("proof.satisfactionValue"), label: t("proof.satisfactionLabel") },
    { value: t("proof.supportValue"), label: t("proof.supportLabel") },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-dark-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial */}
        <div className="glass-card p-8 md:p-12 text-center mb-16">
          <svg
            className="w-10 h-10 text-primary-500/30 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl md:text-2xl text-dark-200 font-medium leading-relaxed mb-6">
            &ldquo;{t(`${serviceKey}.testimonial.quote`)}&rdquo;
          </blockquote>
          <cite className="text-dark-500 text-sm not-italic">
            — {t(`${serviceKey}.testimonial.author`)}
          </cite>
        </div>

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
