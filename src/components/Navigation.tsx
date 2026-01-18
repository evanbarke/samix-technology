"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Navigation() {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t("services"), href: "#services" },
    { name: t("products"), href: "#products" },
    { name: t("about"), href: "#about" },
    { name: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50"
          : "bg-transparent"
      }`}
    >
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

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-dark-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-dark-700 pl-4">
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

            <Link href="#contact" className="btn-primary text-sm">
              {t("getInTouch")}
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-800/50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-dark-300 hover:text-white transition-colors duration-200 text-sm font-medium px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-4 px-2 py-2 border-t border-dark-800/50 mt-2 pt-4">
                <button
                  onClick={() => {
                    switchLocale("en");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    locale === "en"
                      ? "bg-primary-500/20 text-primary-400 font-medium"
                      : "text-dark-400 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    switchLocale("fr");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    locale === "fr"
                      ? "bg-primary-500/20 text-primary-400 font-medium"
                      : "text-dark-400 hover:text-white"
                  }`}
                >
                  Francais
                </button>
              </div>

              <Link
                href="#contact"
                className="btn-primary text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("getInTouch")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
