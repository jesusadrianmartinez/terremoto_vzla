"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import MenuToggle from "@/components/ui/MenuToggle";
import rawMenu from "@/data/menu/menuData";
import Menu, { type MenuItem } from "@/components/navigation/Menu";

const menuData: MenuItem[] = Array.isArray(rawMenu) ? rawMenu : [];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const consultaLink = process.env.NEXT_PUBLIC_CONSULTA_URL || "#";

  // Sombra/blur al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú en cambio de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const linkClass = `${poppins.className} font-heading uppercase text-base text-white hover:text-surface font-medium drop-shadow transition-all duration-300 ease-in-out`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Principal"
        className={`mx-auto ${
          isMenuOpen ? "h-screen" : "h-auto"
        } px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out bg-accent`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center py-2">
            <Link href="/" aria-label="Ir al inicio" className="block">
              <Image
                src="/images/logo_rs.webp"
                alt="Logo Ospina Servicios"
                width={200}
                height={143}
                priority
                className={`transition-all duration-300 ease-in-out ${
                  scrolled ? "max-w-[100px]" : "max-w-[200px]"
                } w-full h-auto drop-shadow-lg`}
              />
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-6">
            <Menu
              items={menuData}
              orientation="inline"
              linkClassName={linkClass}
              prefetch={false}
            />
            <CTAButton
              className="whatsapp"
              href={consultaLink}
              targetBlank
              variant="v1"
            >
              Contáctanos
            </CTAButton>
          </div>

          {/* Toggle mobile */}
          <MenuToggle
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((v) => !v)}
            ariaControls="mobile-menu"
            color="light"
            size="lg"
            rounded="md"
            mobileOnly
          />
        </div>

        {/* Mobile */}
        <div
          id="mobile-menu"
          aria-hidden={!isMenuOpen}
          className={`md:hidden grid overflow-hidden transition-[grid-template-rows,opacity,transform] duration-300 ease-in-out ${
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100 translate-y-0"
              : "grid-rows-[0fr] opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="min-h-0">
            <Menu
              items={menuData}
              orientation="stacked"
              linkClassName={`${poppins.className} block font-heading uppercase text-base text-white hover:text-surface font-medium drop-shadow py-2 transition-all`}
              prefetch={false}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <CTAButton
              className="whatsapp"
              href={consultaLink}
              targetBlank
              variant="v1"
            >
              Contáctanos
            </CTAButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
