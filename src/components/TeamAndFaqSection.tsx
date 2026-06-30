"use client";

import { useAppSelector } from "@/redux/hooks";
import {
  sectionLabels,
  teamData,
  principlesData,
  faqsData,
} from "@/data/sections/footerAndFaq";

export const TeamAndFaqSection = () => {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const labels = sectionLabels[language] || sectionLabels.es;

  return (
    <section className="py-8 bg-white" id="preguntas">
      <div className="container-page px-4 grid gap-6 lg:grid-cols-12 items-start">
        {/* Equipo y Principios */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#fcfbf7] p-4 rounded-2xl border border-navy/10">
            <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-2">
              {labels.teamTitle}
            </h3>
            <div className="text-xs text-navy/80 space-y-1">
              <p>
                <strong>{labels.coordinationLabel}:</strong>{" "}
                {teamData.coordination[language] || teamData.coordination["es"]}
              </p>
              <p className="text-xs leading-tight">
                <strong>{labels.venezuelaLabel}:</strong>{" "}
                {teamData.venezuela[language] || teamData.venezuela["es"]}
              </p>
            </div>
          </div>

          <div className="bg-[#fcfbf7] p-4 rounded-2xl border border-navy/10">
            <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-2">
              {labels.principlesTitle}
            </h3>
            <ul className="grid grid-cols-2 gap-1.5 text-xs font-medium text-navy/80">
              {principlesData.map((p, index) => {
                const IconComponent = p.icon;
                const textTranslation = p.text[language] || p.text["es"];
                return (
                  <li key={index} className="flex items-center gap-1.5">
                    <IconComponent size={12} className="text-coral shrink-0" />
                    <span className="truncate" title={textTranslation}>
                      {textTranslation}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* FAQs Acordeón */}
        <div className="lg:col-span-6">
          <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-3">
            {labels.faqTitle}
          </h3>
          <div className="space-y-1.5">
            {faqsData.slice(0, 5).map((faq, index) => {
              const questionText = faq.question[language] || faq.question["es"];
              const answerText = faq.answer[language] || faq.answer["es"];

              return (
                <details
                  key={index}
                  className="group rounded-xl border border-navy/10 bg-[#fcfbf7] p-3 list-none [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-bold text-navy outline-none list-none">
                    <span>{questionText}</span>
                    <span className="text-teal text-sm group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-xs leading-relaxed text-navy/70 border-t border-navy/5 pt-1.5">
                    {answerText}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
