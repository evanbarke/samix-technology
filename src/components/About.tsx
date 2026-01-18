"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const values = [
    {
      key: "quality",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      key: "innovation",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      key: "partnership",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const technologies = [
    "TypeScript",
    "Python",
    "Go",
    "React",
    "Node.js",
    "SQL Server",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div>
            <h2 className="section-title text-left mb-6">
              <span className="text-white">{t("title1")}</span>
              <span className="gradient-text">{t("title2")}</span>
            </h2>

            <div className="space-y-6 text-dark-400">
              <p className="text-lg leading-relaxed">
                {t("paragraph1")}{" "}
                <span className="text-primary-400 font-medium">
                  {t("sphynxSasu")}
                </span>
                {t("paragraph1End")}
              </p>

              <p className="leading-relaxed">
                {t("paragraph2Start")}{" "}
                <span className="text-white font-medium">
                  {t("samixConsulting")}
                </span>
                {t("paragraph2End")}
              </p>

              <p className="leading-relaxed">
                {t("paragraph3Start")}{" "}
                <span className="text-purple-400 font-medium">{t("sphynx")}</span>
                {t("paragraph3Mid")}{" "}
                <span className="text-orange-400 font-medium">
                  {t("burnwood")}
                </span>
                {t("paragraph3End")}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-10">
              <h3 className="text-sm uppercase tracking-wider text-dark-500 mb-4">
                {t("techTitle")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-800/50 border border-dark-700/50 rounded-full text-sm text-dark-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            {values.map((value) => (
              <div
                key={value.key}
                className="glass-card p-6 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t(`values.${value.key}.title`)}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      {t(`values.${value.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Legal Entity Info */}
            <div className="glass-card p-6 border-primary-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">SPHYNX SASU</p>
                  <p className="text-sm text-dark-500">{t("legalEntity")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
