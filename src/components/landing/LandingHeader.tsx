"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LandingHeader() {
  const t = useTranslations("landing");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-white">
              Samix<span className="text-primary-400">Technology</span>
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => switchLocale("en")}
                className={`px-2 py-1 text-sm rounded transition-colors ${
                  locale === "en"
                    ? "text-primary-400 font-medium"
                    : "text-dark-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-dark-600">|</span>
              <button
                onClick={() => switchLocale("fr")}
                className={`px-2 py-1 text-sm rounded transition-colors ${
                  locale === "fr"
                    ? "text-primary-400 font-medium"
                    : "text-dark-400 hover:text-white"
                }`}
              >
                FR
              </button>
            </div>

            <Link href="#contact-form" className="btn-primary text-sm">
              {t("header.cta")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
