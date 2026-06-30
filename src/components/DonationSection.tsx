"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { BankDonations } from "@/components/BankDonations";
import { Form } from "@/components/Form";
import { ofrecerAyudaFields } from "@/data/form/formFields";
import { donationTranslations } from "@/data/sections/donationSection";

export const DonationSection = () => {
  // Extrae dinámicamente el idioma del estado global (es | en | fr)
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";
  const t = donationTranslations[language] || donationTranslations.es;

  return (
    <section id="donar" className="py-8 bg-[#fcfbf7]">
      <div className="container-page px-4 grid gap-6 lg:grid-cols-12 items-start">
        {/* Métodos de Donación */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Tarjeta / Stripe QR */}
            <div className="bg-white p-4 rounded-2xl border border-navy/10 flex flex-col justify-between items-center text-center">
              <div className="w-full">
                <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-1">
                  {t.creditCardTitle}
                </h3>
                <p className="text-xs text-navy/50 font-medium mb-3">
                  {t.creditCardSubtitle}
                </p>
              </div>
              <div className="relative w-50 h-50 overflow-hidden rounded-lg bg-white border border-navy/10 mb-2">
                <Image
                  src="/qr-stripe.jpg"
                  alt="QR Stripe"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <Link
                href="https://donate.stripe.com/fZu7sLgkH0yv8QXddq4800a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-coral hover:underline"
              >
                {t.directLink}
              </Link>
            </div>

            {/* Cripto / Binance QR */}
            <div className="bg-white p-4 rounded-2xl border border-navy/10 flex flex-col justify-between items-center text-center">
              <div className="w-full">
                <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-1">
                  {t.cryptoTitle}
                </h3>
                <p className="text-xs text-navy/50 font-medium mb-3">
                  {t.cryptoSubtitle}
                </p>
              </div>
              <div className="relative w-50 h-50 overflow-hidden rounded-lg bg-white border border-navy/10 mb-2">
                <Image
                  src="/qr-binance.jpg"
                  alt="QR Binance"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xs font-mono font-bold text-navy/60">
                UID: 136521900
              </span>
            </div>
          </div>

          <BankDonations />
        </div>

        {/* Formulario Ofrecer */}
        <div
          className="lg:col-span-6 bg-white p-4 rounded-2xl border border-navy/10"
          id="ofrecer"
        >
          <h3 className="text-sm font-black uppercase tracking-wider text-navy">
            {t.formTitle}
          </h3>
          <p className="text-xs text-navy/60 mb-3">{t.formSubtitle}</p>
          <Form
            fields={ofrecerAyudaFields}
            button={t.formButton}
            formType="ofrecer_ayuda"
          />
        </div>
      </div>
    </section>
  );
};
