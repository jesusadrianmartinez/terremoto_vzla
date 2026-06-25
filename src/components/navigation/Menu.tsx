"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isExternal, isHash, buildHref } from "@/lib/nav";

export type MenuItem = { title: string; url: string };

type MenuProps = {
  items: MenuItem[];
  orientation?: "inline" | "stacked"; // inline = fila (desktop), stacked = columna (mobile)
  linkClassName?: string; // estilos externos (p.e., tipografía)
  prefetch?: boolean; // por defecto false para respetar tu código
  onItemClick?: () => void; // útil en mobile para cerrar el menú
};

export default function Menu({
  items,
  orientation = "inline",
  linkClassName = "",
  prefetch = false,
  onItemClick,
}: MenuProps) {
  const pathname = usePathname();

  const Wrap = ({ children }: { children: React.ReactNode }) =>
    orientation === "inline" ? (
      <div className="flex items-center gap-6">{children}</div>
    ) : (
      <div className="space-y-2 my-2.5">{children}</div>
    );

  return (
    <Wrap>
      {items.map((item, i) => {
        const ext = isExternal(item.url);
        const hash = isHash(item.url);
        const href = ext ? item.url : buildHref(pathname, item.url);

        const commonA = {
          "aria-label": `Ir a ${item.title}`,
          className: linkClassName,
          onClick: onItemClick,
        };

        if (ext) {
          return (
            <div
              key={i}
              className={orientation === "stacked" ? "mb-2.5" : undefined}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...commonA}
              >
                {item.title}
              </a>
            </div>
          );
        }

        if (hash) {
          return (
            <div
              key={i}
              className={orientation === "stacked" ? "mb-2.5" : undefined}
            >
              <a href={href} {...commonA}>
                {item.title}
              </a>
            </div>
          );
        }

        return (
          <div
            key={i}
            className={orientation === "stacked" ? "mb-2.5" : undefined}
          >
            <Link
              href={href}
              prefetch={prefetch}
              scroll
              aria-label={`Ir a ${item.title}`}
              className={linkClassName}
              onClick={onItemClick}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </Wrap>
  );
}
