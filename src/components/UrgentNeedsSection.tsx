"use client";

import { useAppSelector } from "@/redux/hooks";
import { transparencyTranslations } from "@/data/sections/transparency";
import {
  Droplet,
  Utensils,
  Pill,
  Home,
  Fuel,
  Wrench,
  Lightbulb,
  Truck,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const NEED_ICON_MAP: Record<string, LucideIcon> = {
  water: Droplet,
  food: Utensils,
  medicine: Pill,
  shelter: Home,
  fuel: Fuel,
  tools: Wrench,
  lighting: Lightbulb,
  transport: Truck,
  connectivity: Wifi,
};

export const UrgentNeedsSection = () => {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = transparencyTranslations[language] || transparencyTranslations.es;

  return (
    <section className="py-6 bg-white">
      <div className="container-page px-4">
        <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-3">
          {t.urgentNeedsTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {t.urgentNeeds.map((need) => {
            const IconComponent = NEED_ICON_MAP[need.id] || Droplet;
            return (
              <span
                key={need.id}
                className="inline-flex items-center gap-1.5 rounded-lg border border-navy/5 bg-[#fcfbf7] px-3 py-1.5 text-sm font-bold text-navy shadow-2xs"
              >
                <IconComponent size={30} className="text-teal" />
                {need.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
