"use client";

import { useAppSelector } from "@/redux/hooks";
import { useGetMetricsDataQuery } from "@/redux/services/tablesApi";
import {
  helpMetricsTranslations,
  rawValueTranslations,
} from "@/data/tables/helpMetrics";

export const HelpMetrics = () => {
  const { data: metrics, isLoading, isError } = useGetMetricsDataQuery(null);
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";

  const t = helpMetricsTranslations[language] || helpMetricsTranslations.es;
  const rawMap = rawValueTranslations[language] || rawValueTranslations.es;

  const firstRow = metrics?.[0];

  const formatRawValue = (val: string | undefined, fallback: string) => {
    if (!val) return fallback;
    return rawMap[val] || val;
  };

  const displayStats = [
    {
      label: t.fundsRaised,
      value: firstRow?.fundsRaised || "$0,00",
      isFullWidthOnMobile: false,
    },
    {
      label: t.fundsUsed,
      value: firstRow?.fundsUsed || "$0,00",
      isFullWidthOnMobile: false,
    },
    {
      label: t.peopleHelped,
      value: firstRow?.peopleHelped || "0",
      isFullWidthOnMobile: false,
    },
    {
      label: t.familiesAssisted,
      value: firstRow?.familiesAssisted || "0",
      isFullWidthOnMobile: false,
    },
    {
      label: t.rescuersSupported,
      value: firstRow?.rescuersSupported || "0",
      isFullWidthOnMobile: false,
    },
    {
      label: t.lastUpdate,
      value: formatRawValue(firstRow?.lastUpdate, rawMap["Pendiente"]),
      // Marcamos esta métrica para que se estire por completo en pantallas pequeñas
      isFullWidthOnMobile: true,
    },
  ];

  if (isError) {
    return (
      <div className="lg:col-span-12 bg-white p-4 rounded-2xl border border-red-200 text-center text-xs text-red-600">
        {t.errorMsg}
      </div>
    );
  }

  return (
    <div className="lg:col-span-12 bg-white p-4 rounded-2xl border border-navy/10 shadow-xs">
      <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-navy mb-4 text-center lg:text-left">
        {t.title}
      </h3>

      {/* Grid adaptativo: grid-cols-2 en móvil, sube a sm:grid-cols-3 y lg:grid-cols-6 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {displayStats.map((stat) => (
          <div
            key={stat.label}
            /* col-span-2 hace que la fecha ocupe ambas columnas en móvil. En sm+ vuelve a col-span-1 de forma nativa */
            className={`p-3 rounded-xl bg-[#fcfbf7] border border-navy/5 text-center flex flex-col justify-start min-h-19 transition-all col-span-1 sm:col-span-2`}
          >
            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-navy/50 leading-tight">
              {stat.label}
            </p>

            {isLoading ? (
              <div className="h-5 w-16 bg-navy/10 rounded animate-pulse mt-1.5 mx-auto" />
            ) : (
              <p className="mt-1 text-lg font-black text-navy tracking-tight wrap-break-word">
                {stat.value}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm text-navy/80 my-2">{t.paragraph}</p>
    </div>
  );
};
