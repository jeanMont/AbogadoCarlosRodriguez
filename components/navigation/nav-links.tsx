"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";



const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");

  const handleNavigation = (hash: string) => {
    if (pathname !== `/${locale}`) {
      router.push(`/${locale}/#${hash}`);
    } else {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMenu?.();
  };

  const commonClass = "cursor-pointer text-sm font-bold text-white hover:text-blue-700 transition-colors px-3 py-2";

  return (
    <>
      <Link href={`/${locale}`} onClick={() => closeMenu?.()} className={`${commonClass} text-center`}>
        {t("home")}
      </Link>
      <button onClick={() => handleNavigation("sobre-mi")} className={commonClass}>
        {t("about")}
      </button>
      <button onClick={() => handleNavigation("servicios")} className={commonClass}>
        {t("services")}
      </button>
      <button onClick={() => handleNavigation("por-que-elegirme")} className={commonClass}>
        {t("why")}
      </button>
      <button onClick={() => handleNavigation("testimonios")} className={commonClass}>
        {t("testimonials")}
      </button>
      <button onClick={() => handleNavigation("contacto")} className={commonClass}>
        {t("contact")}
      </button>

      {/* Submenú de idioma */}
      <Popover>
        <PopoverTrigger asChild>
          <button className={commonClass}>🌐 {t("language")}</button>
        </PopoverTrigger>
        <PopoverContent className="bg-white p-2 rounded shadow-lg w-32 text-sm">
          <div className="flex flex-col gap-2">
            <Link href={`/es`} onClick={closeMenu} className="hover:text-blue-700">
              🇨🇴 {t("spanish")}
            </Link>
            <Link href={`/en`} onClick={closeMenu} className="hover:text-blue-700">
              🇺🇸 {t("english")}
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2">
      {/* Desktop */}
      <div className="hidden md:flex w-full">
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-6">
            <NavLinks />
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="https://wa.me/573206164833?text=Hola%2C%20quisiera%20solicitar%20una%20asesor%C3%ADa%20legal."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cursor-pointer bg-[#25D366] hover:bg-blue-800 text-white">
              {t("advice")}
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden ml-auto relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="border-gray-300 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {isOpen && (
          <div className="absolute top-16 right-0 w-64 bg-[#000000] shadow-lg rounded-md border border-gray-200 flex flex-col p-4 gap-2 z-50">
            <NavLinks closeMenu={() => setIsOpen(false)} />
            <a
              href="https://wa.me/573206164833?text=Hola%2C%20quisiera%20solicitar%20una%20asesor%C3%ADa%20legal."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer w-full bg-blue-700 hover:bg-blue-800 text-white mt-2">
                {t("advice")}
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
