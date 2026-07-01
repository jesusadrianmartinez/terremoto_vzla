"use client";

import { Check } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { TransparencyTable } from "@/components/TransparencyTable";
import { VolunteersTable } from "@/components/VolunteersTable";
import { HelpMetrics } from "@/components/HelpMetrics";
import { transparencyTranslations } from "@/data/sections/transparency";

export const TransparencySection = () => {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = transparencyTranslations[language] || transparencyTranslations.es;

  return (
    <section id="transparencia" className="py-8 bg-[#fcfbf7]">
      <div className="container-page px-4 grid gap-6 lg:grid-cols-12 items-start">
        <div className="lg:col-span-12 space-y-4">
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-2">
              {t.sectionTitle}
            </h3>
            {t.sectionParagraph.map((paragraph, idx) => (
              <p key={idx} className="text-sm text-navy/80 mb-2">
                {paragraph}
              </p>
            ))}
            <ul className="grid sm:grid-cols-2 gap-2 text-xs font-medium text-navy/80">
              {t.transparencyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Check
                    size={13}
                    className="text-teal mt-0.5 shrink-0"
                    strokeWidth={3}
                  />
                  <span className="leading-tight">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-1">
            <TransparencyTable />
            <VolunteersTable />
          </div>
        </div>
        <HelpMetrics />
      </div>
    </section>
  );
};
