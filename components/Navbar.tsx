"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BASE = "https://sherbrotherpakistan.com";

interface NavChild { label: string; href: string }
interface NavItem  { label: string; href: string; children?: NavChild[] }

const NAV_ITEMS: NavItem[] = [
  { label: "Rent a Car Pakistan", href: `${BASE}/` },
  {
    label: "Locations",
    href: `${BASE}/rent-a-car-lahore/`,
    children: [
      { label: "Rent a Car Lahore", href: `${BASE}/rent-a-car-lahore/` },
      { label: "DHA",               href: `${BASE}/rent-a-car-lahore/dha/` },
      { label: "Gulberg",           href: `${BASE}/rent-a-car-lahore/gulberg/` },
      { label: "Johar Town",        href: `${BASE}/rent-a-car-lahore/johar-town/` },
      { label: "Airport Transfers", href: `${BASE}/rent-a-car-lahore/airport/` },
      { label: "Islamabad",         href: `${BASE}/rent-a-car-islamabad/` },
      { label: "Multan",            href: `${BASE}/rent-a-car-multan/` },
      { label: "Faisalabad",        href: `${BASE}/rent-a-car-faisalabad/` },
      { label: "Sialkot",           href: `${BASE}/rent-a-car-sialkot/` },
      { label: "Wazirabad",         href: `${BASE}/rent-a-car-in-wazirabad/` },
      { label: "Gujrat",            href: `${BASE}/rent-a-car-gujrat/` },
      { label: "Karachi",           href: `${BASE}/rent-a-car-karachi/` },
    ],
  },
  {
    label: "Services",
    href: `${BASE}/intercity-car-service/`,
    children: [
      { label: "Limo Service",          href: `${BASE}/rent-a-limousine/` },
      { label: "Wedding Limo",          href: `${BASE}/rent-a-limousine/wedding-limo-service/` },
      { label: "Intercity Car Service", href: `${BASE}/intercity-car-service/` },
      { label: "Lahore to Islamabad",   href: `${BASE}/rent-a-car-lahore-to-islamabad/` },
      { label: "Islamabad to Lahore",   href: `${BASE}/rent-a-car-islamabad-to-lahore/` },
      { label: "Lahore to Multan",      href: `${BASE}/rent-a-car-lahore-to-multan/` },
      { label: "Wedding Car Rental",    href: `${BASE}/wedding-car-rental/` },
      { label: "Tour",                  href: `${BASE}/rent-a-tour-vehicle/` },
    ],
  },
  {
    label: "Our Fleet",
    href: `${BASE}/shop/`,
    children: [
      { label: "Cars",         href: `${BASE}/product-category/rental/car/` },
      { label: "SUVs",         href: `${BASE}/product-category/rental/suv/` },
      { label: "Limousines",   href: `${BASE}/product-category/rental/limousine/` },
      { label: "Buses & Vans", href: `${BASE}/product-category/rental/bus-coaster-hiace-7-seater/` },
    ],
  },
];

function Chevron() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="inline-block ml-1 opacity-60">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-[13px] text-[#A0A0B8] hover:text-white transition-colors whitespace-nowrap py-2 px-2"
      >
        {item.label}
        <Chevron />
      </a>
      {open && (
        <div
          className="absolute top-full left-0 mt-1 bg-[#12122A] border border-white/10 rounded-xl shadow-2xl min-w-[210px] py-2 z-50"
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          {item.children!.map((child) => (
            <a
              key={child.label}
              href={child.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-[7px] text-[13px] text-[#A0A0B8] hover:text-white hover:bg-white/5 transition-colors"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label));

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-[#0A0A1A] pt-[72px] overflow-y-auto">
      <div className="px-4 py-4 space-y-1">
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <div key={item.label}>
              <button
                onClick={() => toggle(item.label)}
                className="flex w-full items-center justify-between px-3 py-3 text-[15px] text-[#A0A0B8] hover:text-white transition-colors"
              >
                {item.label}
                <Chevron />
              </button>
              {expanded === item.label && (
                <div className="pl-4 space-y-1 pb-2">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="block px-3 py-2 text-[14px] text-[#A0A0B8] hover:text-white transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block px-3 py-3 text-[15px] text-[#A0A0B8] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          )
        )}
        <div className="pt-4 border-t border-white/10">
          <a
            href="https://wa.me/923005404055"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block w-full rounded-full py-3 text-center text-[15px] font-medium text-[#F5A623]"
            style={{ border: "1.5px solid #F5A623" }}
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen ? "bg-[#0A0A1A] backdrop-blur-[12px]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <a href={`${BASE}/`} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <Image
              src="https://sherbrotherpakistan.com/wp-content/uploads/2025/04/sher-brother-dark-logo-1-125x41.webp"
              alt="Sher Brothers Rent a Car"
              width={125}
              height={41}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DropdownItem key={item.label} item={item} />
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 text-[13px] text-[#A0A0B8] hover:text-white transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Right: WhatsApp button + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/923005404055"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex rounded-full px-[18px] py-[6px] text-[13px] font-medium text-[#F5A623] bg-transparent transition-colors duration-200 hover:bg-[#F5A623] hover:text-[#0A0A1A] whitespace-nowrap"
              style={{ border: "1.5px solid #F5A623" }}
            >
              Book via WhatsApp
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            >
              <span className={`block h-[2px] bg-white transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] bg-white transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] bg-white transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
