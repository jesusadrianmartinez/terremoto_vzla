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

  // Función interna para parsear de forma limpia fallbacks traducidos
  const formatRawValue = (val: string | undefined, fallback: string) => {
    if (!val) return fallback;
    return rawMap[val] || val;
  };

  const displayStats = [
    { label: t.fundsRaised, value: firstRow?.fundsRaised || "$0,00" },
    { label: t.fundsUsed, value: firstRow?.fundsUsed || "$0,00" },
    { label: t.peopleHelped, value: firstRow?.peopleHelped || "0" },
    { label: t.familiesAssisted, value: firstRow?.familiesAssisted || "0" },
    { label: t.rescuersSupported, value: firstRow?.rescuersSupported || "0" },
    {
      label: t.lastUpdate,
      value: formatRawValue(firstRow?.lastUpdate, rawMap["Pendiente"]),
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
    <div className="lg:col-span-12 bg-white p-4 rounded-2xl border border-navy/10">
      <h3 className="text-xs font-black uppercase tracking-wider text-navy mb-3 text-center lg:text-left">
        {t.title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {displayStats.map((stat) => (
          <div
            key={stat.label}
            className="p-2 rounded-xl bg-[#fcfbf7] border border-navy/5 text-center flex flex-col justify-center min-h-17"
          >
            <p className="text-[9px] font-bold uppercase tracking-wider text-navy/50">
              {stat.label}
            </p>

            {isLoading ? (
              <div className="h-6 w-16 bg-navy/10 rounded animate-pulse mt-1 mx-auto" />
            ) : (
              <p className="mt-1 text-xl font-black text-navy tracking-tight">
                {stat.value}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="text-[10px] text-navy/40 mt-3 text-center italic">
        {isLoading
          ? t.loadingUpdate
          : firstRow?.lastUpdate
            ? `${formatRawValue(firstRow.lastUpdate, "")}`
            : ""}
      </p>
    </div>
  );
};
