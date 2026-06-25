"use client";

import * as React from "react";
import { createPortal } from "react-dom";

type ModalSize = "sm" | "md" | "lg" | "xl";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
  closeOnOverlay?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
  className?: string; // clases extra para el panel
};

// Tope de ancho progresivo por breakpoint, según el size elegido (aplica en ≥sm)
const SIZE: Record<ModalSize, string> = {
  sm: "sm:max-w-sm md:max-w-md lg:max-w-lg",
  md: "sm:max-w-md md:max-w-lg lg:max-w-xl",
  lg: "sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl",
  xl: "sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl",
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  size = "lg",
  closeOnOverlay = true,
  initialFocusRef,
  className = "",
}: ModalProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = React.useState(false);
  const isVisible = open || exiting;
  const titleId = React.useId();

  // Bloquear scroll del documento mientras el modal esté abierto
  React.useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = prev;
    };
  }, [open]);

  // Animación de salida antes de desmontar
  React.useEffect(() => {
    if (!open && isVisible) {
      setExiting(true);
      const t = setTimeout(() => setExiting(false), 200); // coincide con duration-200
      return () => clearTimeout(t);
    }
  }, [open, isVisible]);

  // Enfocar contenido al abrir
  React.useEffect(() => {
    if (!open) return;
    const toFocus =
      initialFocusRef?.current ??
      panelRef.current?.querySelector<HTMLElement>(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
    toFocus?.focus();
  }, [open, initialFocusRef]);

  // Focus trap + ESC
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key === "Tab") {
      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      if (!nodes || nodes.length === 0) return;
      const focusables = Array.from(nodes).filter(
        (el) => !el.hasAttribute("disabled")
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && active === last) {
        first.focus();
        e.preventDefault();
      }
    }
  };

  if (!isVisible) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onMouseDown={(e) => {
        if (closeOnOverlay && e.target === e.currentTarget) onClose();
      }}
      onKeyDown={onKeyDown}
      className={`fixed inset-0 z-50 grid place-items-center px-0 sm:px-6 bg-black/75 transition-all ease-in-out duration-300 ${
        open ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        className={`overflow-auto w-screen max-w-none sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] ${
          SIZE[size]
        } max-h-[100svh] sm:max-h-[85vh] rounded-none sm:rounded-[20px] md:rounded-[24px] bg-white border-4 border-accent mx-auto shadow-xl outline-none transition-all ease-in-out duration-300 ${
          open ? "translate-y-0 scale-100 " : "translate-y-2 scale-95 "
        } ${className}
        `}
      >
        <div className="flex flex-col bg-white w-full h-full overflow-auto overscroll-auto rounded-none sm:rounded-[20px] md:rounded-[24px]">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
