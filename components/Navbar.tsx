"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "https://sherbrotherpakistan.com/" },
  { label: "Fleet", href: "https://sherbrotherpakistan.com/shop/" },
  { label: "Services", href: "https://sherbrotherpakistan.com/intercity-car-service/" },
  { label: "Locations", href: "https://sherbrotherpakistan.com/rent-a-car-lahore/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A1A] backdrop-blur-[12px]" : "bg-transparent"
      }`}
    >
      {/* Left — Logo */}
      <div className="flex-shrink-0">
        <Image
          src="https://sherbrotherpakistan.com/wp-content/uploads/2025/04/sher-brother-dark-logo-1-125x41.webp"
          alt="Sher Brothers Rent a Car"
          width={125}
          height={41}
          priority
        />
      </div>

      {/* Center — External navigation links */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-6 overflow-x-auto">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] sm:text-[14px] text-[#A0A0B8] hover:text-white transition-colors whitespace-nowrap"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right — Book via WhatsApp */}
      <div className="flex-shrink-0">
        <a
          href="https://wa.me/923005404055"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-[18px] py-[6px] text-[14px] font-medium text-[#F5A623] bg-transparent transition-colors duration-200 hover:bg-[#F5A623] hover:text-[#0A0A1A] whitespace-nowrap"
          style={{ border: "1.5px solid #F5A623" }}
        >
          Book via WhatsApp
        </a>
      </div>
    </nav>
  );
}
