"use client";

import { useAppSelector } from "@/redux/hooks";
import { transparencyTranslations } from "@/data/sections/transparency";
import {
  KeyRound,
  Bed,
  Utensils,
  HeartPulse,
  Truck,
  Milestone,
  Wrench,
  MessageSquare,
  Droplet,
  LucideIcon,
} from "lucide-react";

export const NEED_ICON_MAP: Record<string, LucideIcon> = {
  KeyRound: KeyRound,
  Bed: Bed,
  Utensils: Utensils,
  HeartPulse: HeartPulse,
  Truck: Truck,
  Milestone: Milestone,
  Wrench: Wrench,
  MessageSquare: MessageSquare,
  Droplet: Droplet,
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
            const IconComponent = NEED_ICON_MAP[need.id] || null;
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
