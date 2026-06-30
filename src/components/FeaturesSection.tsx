"use client";

import { useAppSelector } from "@/redux/hooks";
import { featuresTranslations } from "@/data/sections/features";
import {
  Droplet,
  Utensils,
  Pill,
  Home,
  Truck,
  Fuel,
  Wrench,
  Wifi,
  ThumbsUp,
  FileText,
  Search,
  ShoppingCart,
  Eye,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

const AID_ICON_MAP: Record<string, LucideIcon> = {
  water: Droplet,
  food: Utensils,
  medicine: Pill,
  shelter: Home,
  transport: Truck,
  fuel: Fuel,
  tools: Wrench,
  connectivity: Wifi,
};

const STEP_ICON_MAP: Record<number, LucideIcon> = {
  1: ThumbsUp,
  2: FileText,
  3: Search,
  4: ShoppingCart,
  5: Eye,
  6: RefreshCw,
};

export const FeaturesSection = () => {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = featuresTranslations[language] || featuresTranslations.es;

  return (
    <section className="py-8 bg-white" id="que-hacemos">
      <div className="container-page px-4">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Qué hacemos */}
          <div className="lg:col-span-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-4">
              {t.whatWeDoTitle}
            </h3>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
              {t.aidAreas.map((item) => {
                const IconComponent = AID_ICON_MAP[item.id] || Droplet;
                return (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl border border-navy/5 bg-[#fcfbf7]/60 flex flex-col justify-start min-h-26.25"
                  >
                    <div className="text-teal mb-2">
                      <IconComponent size={30} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">
                        {item.title}
                      </h4>
                      <p className="text-xs text-navy/60 mt-0.5 leading-tight">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cómo funciona */}
          <div className="lg:col-span-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-4">
              {t.howItWorksTitle}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
              {t.steps.map((step) => {
                const StepIcon = STEP_ICON_MAP[step.number] || ThumbsUp;
                return (
                  <div
                    key={step.number}
                    className="p-2 rounded-xl bg-cream/40 border border-navy/5 text-center flex flex-col items-center justify-start min-h-25"
                  >
                    <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal text-xs font-black text-white relative">
                      {step.number}
                    </div>
                    <div className="text-teal/40 mb-1">
                      <StepIcon size={30} strokeWidth={2} />
                    </div>
                    <p className="text-sm font-bold text-navy leading-tight">
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
