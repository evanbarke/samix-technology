"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  const services = [
    {
      key: "softwareDev",
      route: "software-development",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      featureKeys: ["fullstack", "api", "cloud", "legacy"],
    },
    {
      key: "dataEng",
      route: "data-engineering",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      featureKeys: ["etl", "warehouse", "realtime", "governance"],
    },
    {
      key: "dba",
      route: "database-administration",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      featureKeys: ["performance", "availability", "backup", "security"],
    },
    {
      key: "consulting",
      route: "technical-consulting",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      featureKeys: ["architecture", "assessment", "augmentation", "optimization"],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">{t("title1")}</span>
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t("subtitle")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.key}
              href={`/${locale}/services/${service.route}`}
              className="glass-card p-8 hover:border-primary-500/30 transition-all duration-300 group block"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-dark-400 mb-4 text-sm leading-relaxed">
                    {t(`${service.key}.description`)}
                  </p>
                  <ul className="space-y-2">
                    {service.featureKeys.map((featureKey) => (
                      <li
                        key={featureKey}
                        className="flex items-center text-sm text-dark-300"
                      >
                        <svg
                          className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {t(`${service.key}.features.${featureKey}`)}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center mt-4 text-sm text-primary-400 group-hover:text-primary-300 transition-colors">
                    {t("learnMore")}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
