import { ComponentPropsWithoutRef } from "react";

// 1. Tipado limpio, seguro y extendible
export interface SectionTitleProps extends ComponentPropsWithoutRef<"div"> {
  eyebrow?: string;
  title: string;
  text?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  text,
  className = "",
  ...props
}: SectionTitleProps) {
  return (
    <div className={`mb-10 max-w-3xl ${className}`} {...props}>
      {/* Etiqueta superior (Eyebrow) */}
      {eyebrow && (
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#1FA6A8] md:text-sm">
          {eyebrow}
        </p>
      )}

      {/* Título Principal con balanceo automático de texto */}
      <h2 className="text-3xl font-black tracking-tight text-[#0B3A53] text-balance md:text-4xl">
        {title}
      </h2>

      {/* Texto Descriptivo */}
      {text && (
        <p className="mt-3 text-base leading-relaxed text-[#0B3A53]/75 md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}
