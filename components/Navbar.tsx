"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      <Image
        src="https://sherbrotherpakistan.com/wp-content/uploads/2025/04/sher-brother-dark-logo-1-125x41.webp"
        alt="Sher Brothers Rent a Car"
        width={125}
        height={41}
        priority
      />
      <a
        href="https://wa.me/923005404055"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#F5A623] px-4 py-2 text-sm font-medium text-[#F5A623] transition-colors duration-200 hover:bg-[#F5A623] hover:text-[#0A0A1A]"
      >
        Book via WhatsApp
      </a>
    </nav>
  );
}
