"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/lib/fonts";
import rawMenu from "@/data/menu/menuData";
import Menu, { type MenuItem } from "@/components/navigation/Menu";
import contactData from "@/data/contactData";
import socialData from "@/data/socialData";

const menuData: MenuItem[] = Array.isArray(rawMenu) ? rawMenu : [];

type ContactItem = {
  url: string;
  icon: React.ElementType;
  title: string;
  content: string;
};

type SocialItem = {
  url: string;
  icon: React.ElementType;
  title: string;
};

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer id="contacto" className="bg-accent w-full pt-16 pb-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl px-5 mx-auto">
        <div className="flex flex-col w-full md:w-1/2 px-3.5">
          <Link href="/" aria-label="Ir al inicio" className="block">
            <Image
              src="/images/logo_rs2.webp"
              alt="Logo Ospina Servicios"
              width={430}
              height={56}
              priority
              className={`transition-all duration-300 ease-in-out max-w-[430px] w-full h-auto drop-shadow-lg`}
            />
          </Link>
          <p className="text-white text-base md:text-lg lg:text-xl font-bold mt-6 mb-4">
            SÍGUENOS
          </p>
          <ul className="flex gap-4">
            {socialData.map((item: SocialItem, index: number) => (
              <li key={index}>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contacto vía ${item.title}`}
                >
                  <div className="flex items-center">
                    <span className="flex justify-center items-center text-xl text-accent bg-grey hover:bg-surface rounded-full w-14 h-14 transition-all duration-500 ease-in-out">
                      {React.createElement(item.icon, {
                        className: "text-2xl",
                      })}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col text-grey text-xs mt-10 gap-3">
            <p>
              <a
                href="/aviso-legal"
                className={`${poppins.className} text-base md:text-lg lg:text-xs hover:text-surface transition-all duration-300 ease-in-out uppercase`}
              >
                Aviso Legal
              </a>
              <span className="text-xs mx-1 -top-0.5">|</span>
              <a
                href="/politica-de-privacidad"
                className={`${poppins.className} text-base md:text-lg lg:text-xs hover:text-surface transition-all duration-300 ease-in-out uppercase`}
              >
                Política de Privacidad
              </a>
            </p>
            <p>
              Copyright © {year}
              <a
                className={`${poppins.className} hover:text-surface transition-all duration-300 ease-in-out mx-1.5`}
                href="https://neuronadigital.cl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neurona Digital SpA
              </a>
              All Rights Reserved
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full md:w-1/2 md:gap-12 lg:gap-24 px-3.5">
          <div className="flex flex-col w-full md:w-auto md:mx-auto">
            <p className="text-white text-base md:text-lg lg:text-xl text-left font-bold uppercase mt-6 md:mb-2">
              Enlaces
            </p>
            <Menu
              items={menuData}
              orientation="stacked"
              linkClassName={`${poppins.className} block font-heading uppercase text-base text-white hover:text-surface font-medium drop-shadow transition-all duration-300 ease-in-out`}
              prefetch={false}
            />
          </div>
          <div className="flex flex-col w-full md:w-auto md:mx-auto">
            {contactData.map((item: ContactItem, index: number) => (
              <div key={index}>
                <p className="text-white text-base md:text-lg lg:text-xl text-left font-bold uppercase mt-2 md:mt-6 mb-2 md:mb-4">
                  {item.title}
                </p>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contacto vía ${item.title}`}
                >
                  <p
                    className={`${poppins.className} text-white text-base hover:text-surface`}
                  >
                    {item.content}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
