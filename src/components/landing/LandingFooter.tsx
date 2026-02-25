"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function LandingFooter() {
  const t = useTranslations("landing");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
          <Link
            href={`/${locale}`}
            className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
          >
            {t("footer.backToSite")} &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
