"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const products = [
  {
    name: "Sphynx",
    key: "sphynx",
    url: "https://get-sphynx.com",
    gradient: "from-purple-500 to-pink-500",
    accentColor: "#a855f7",
    featureKeys: ["ai", "gdpr", "pci", "payment"],
  },
  {
    name: "Burnwood",
    key: "burnwood",
    url: "https://burnwood.app",
    gradient: "from-orange-500 to-red-500",
    accentColor: "#f97316",
    featureKeys: ["mind", "matching", "tables", "events"],
  },
  {
    name: "Helioswarm",
    key: "helioswarm",
    url: "https://helioswarm.samix-technology.com",
    gradient: "from-yellow-500 to-amber-500",
    accentColor: "#eab308",
    featureKeys: ["tops", "solar", "api", "free"],
  },
  {
    name: "NeuroSignal",
    key: "neurosignal",
    url: "https://neurosignal.samix-technology.com",
    gradient: "from-cyan-500 to-blue-500",
    accentColor: "#06b6d4",
    featureKeys: ["ml", "execution", "exchange", "risk"],
  },
];

export default function Products() {
  const t = useTranslations("products");

  return (
    <section id="products" className="py-24 md:py-32 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">{t("title1")}</span>
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t("subtitle")}</p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-2xl bg-dark-900 border border-dark-700/50 hover:border-dark-600 transition-all duration-500"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative p-8 lg:p-10">
                {/* Product Header */}
                <div className="mb-6">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-xs font-medium mb-4`}
                  >
                    {t("liveProduct")}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p
                    className={`text-lg bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent font-medium`}
                  >
                    {t(`${product.key}.tagline`)}
                  </p>
                </div>

                {/* Description */}
                <p className="text-dark-400 mb-6 leading-relaxed">
                  {t(`${product.key}.description`)}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.featureKeys.map((featureKey) => (
                    <li
                      key={featureKey}
                      className="flex items-center text-dark-300"
                    >
                      <svg
                        className={`w-5 h-5 mr-3 flex-shrink-0`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          color: product.accentColor,
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {t(`${product.key}.features.${featureKey}`)}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${product.gradient} text-white font-medium hover:opacity-90 transition-opacity group/btn`}
                >
                  {t("visit")} {product.name}
                  <svg
                    className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
