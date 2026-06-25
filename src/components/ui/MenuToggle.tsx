"use client";

import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg";
type ColorVariant = "primary" | "accent" | "surface" | "transparent";

export type MenuToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
  ariaControls?: string;
  labels?: { open: string; close: string };
  size?: Size;
  variant?: ColorVariant;
  mobileOnly?: boolean;
  rounded?: "md" | "lg" | "full";
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label" | "onClick"
>;

const sizeMap: Record<Size, { button: string; icon: string }> = {
  sm: { button: "w-9 h-9", icon: "w-5 h-5" },
  md: { button: "w-11 h-11", icon: "w-6 h-6" },
  lg: { button: "w-13 h-13", icon: "w-7 h-7" },
};

const variants: Record<ColorVariant, string> = {
  primary:
    "text-primary hover:bg-surface border border-primary/10 focus-visible:ring-primary",
  accent:
    "text-accent hover:bg-accent/10 border border-accent/20 focus-visible:ring-accent",
  surface:
    "text-paragraph bg-surface hover:bg-primary/5 focus-visible:ring-primary",
  transparent: "text-heading hover:bg-surface focus-visible:ring-primary",
};

const shapes = {
  md: "rounded-md",
  lg: "rounded-xl",
  full: "rounded-full",
};

export default function MenuToggle({
  isOpen,
  onToggle,
  ariaControls = "mobile-menu",
  labels = { open: "Cerrar menú", close: "Abrir menú" },
  size = "md",
  variant = "primary",
  className,
  mobileOnly = true,
  rounded = "lg",
  ...rest
}: MenuToggleProps) {
  const { button, icon } = sizeMap[size];

  return (
    <button
      type="button"
      aria-controls={ariaControls}
      aria-expanded={isOpen}
      aria-pressed={isOpen}
      aria-label={isOpen ? labels.open : labels.close}
      onClick={onToggle}
      className={cn(
        mobileOnly && "md:hidden",
        "inline-flex items-center justify-center cursor-pointer transition-all duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95",
        button,
        variants[variant],
        shapes[rounded],
        className,
      )}
      {...rest}
    >
      <div className={cn("relative flex items-center justify-center", icon)}>
        <span
          className={cn(
            "absolute h-0.5 w-full bg-currentColor transform transition-all duration-300 ease-in-out",
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-2",
          )}
        />
        <span
          className={cn(
            "absolute h-0.5 w-full bg-currentColor transition-all duration-300 ease-in-out",
            isOpen ? "opacity-0 translate-x-3" : "opacity-100",
          )}
        />
        <span
          className={cn(
            "absolute h-0.5 w-full bg-currentColor transform transition-all duration-300 ease-in-out",
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-2",
          )}
        />
      </div>
    </button>
  );
}
