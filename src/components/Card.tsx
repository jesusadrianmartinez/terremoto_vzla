import { ComponentPropsWithoutRef } from "react";

// Extendemos las propiedades nativas de un elemento 'div'
export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-[#0B3A53]/10 bg-white p-6 shadow-sm shadow-[#0B3A53]/5 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
