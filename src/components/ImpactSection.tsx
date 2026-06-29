"use client";

import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { impactTranslations } from "@/data/sections/impactSection";

export const ImpactSection = () => {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = impactTranslations[language] || impactTranslations.es;

  return (
    <section className="bg-navy text-white py-10">
      <div className="container-page px-4 text-center max-w-3xl mx-auto">
        <p className="text-sm font-medium text-balance leading-relaxed text-white/90">
          {t.quote}
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <Link
            href="https://donate.stripe.com/fZu7sLgkH0yv8QXddq4800a"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-coral px-5 py-2.5 text-xs font-black text-white hover:bg-[#d85f41] transition-colors shadow-lg shadow-coral/10"
          >
            {t.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};
