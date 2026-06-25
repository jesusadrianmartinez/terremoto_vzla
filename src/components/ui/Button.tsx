"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

const isExternal = (url?: string) =>
  !!url && (/^https?:\/\//i.test(url) || /^mailto:|^tel:/i.test(url));

type BaseProps = {
  children?: React.ReactNode;
  href?: string;
  ariaLabel?: string;
  variant?: "primary" | "accent" | "link" | "unstyled";
  size?: "sm" | "md" | "lg" | "none";
  shape?: "square" | "rounded" | "oval" | "circle";
  fontClassName?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  targetBlank?: boolean;
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const baseStructure =
  "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: cn(
    baseStructure,
    "bg-primary text-white hover:bg-brand-light focus-visible:ring-primary hover:scale-[1.02] active:scale-[0.98]",
  ),
  accent: cn(
    baseStructure,
    "bg-accent text-heading hover:bg-accent/90 focus-visible:ring-accent hover:scale-[1.02] active:scale-[0.98]",
  ),
  link: "inline-flex items-center justify-center gap-1 bg-transparent text-primary hover:text-brand-light font-bold underline transition-colors cursor-pointer",
  unstyled: "",
};

const sizes = {
  none: "",
  sm: "text-xs py-2 px-4",
  md: "text-sm py-3 px-6",
  lg: "text-base py-4 px-8",
};

const shapes = {
  square: "rounded-none",
  rounded: "rounded-xl",
  oval: "rounded-full",
  circle: "rounded-full p-0 aspect-square",
};

export default function Button({
  children,
  href,
  ariaLabel,
  variant = "primary",
  size = "md",
  shape = "rounded",
  fontClassName,
  iconLeft,
  iconRight,
  className,
  targetBlank,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const isLinkVariant = variant === "link" || variant === "unstyled";

  const cls = cn(
    fontClassName,
    variants[variant],
    !isLinkVariant && sizes[size],
    !isLinkVariant && shapes[shape],
    className,
  );

  const defaultAriaLabel =
    ariaLabel || (typeof children === "string" ? children : "Botón");

  const buttonContent = (
    <>
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    const external = isExternal(href);
    const target = targetBlank || external ? "_blank" : undefined;
    const rel = target ? "noopener noreferrer" : undefined;

    if (external) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          aria-label={defaultAriaLabel}
          className={cls}
          onClick={onClick}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={defaultAriaLabel}
        className={cls}
        onClick={onClick}
        {...(rest as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">)}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={defaultAriaLabel}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {buttonContent}
    </button>
  );
}
