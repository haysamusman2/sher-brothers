"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="flex min-h-[100svh] items-center px-4 md:px-6"
      style={{
        background:
          "linear-gradient(135deg, #0A0A1A 0%, #12122A 50%, #0A0A1A 100%), radial-gradient(ellipse at 80% 50%, rgba(245,166,35,0.07) 0%, transparent 60%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 py-24 md:flex-row md:items-center md:gap-16">
        {/* Left column — text content */}
        <div className="flex flex-1 flex-col text-center md:text-left">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A623]"
          >
            Lahore · Intercity · Nationwide
          </motion.p>

          {/* Decorative gold line — desktop only */}
          <div className="hidden md:block h-px w-20 bg-[#F5A623] opacity-40 mb-4" />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 font-playfair font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)" }}
          >
            Need a Car?<br />We&apos;re One Message Away.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8 text-base text-[#A0A0B8] md:text-lg"
          >
            Trusted by thousands of customers across Pakistan. Professional drivers, clean fleet,
            transparent pricing — confirmed in minutes on WhatsApp.
          </motion.p>

          {/* WhatsApp CTA button */}
          <motion.a
            href="https://wa.me/923005404055"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
            whileHover={reduce ? {} : { y: -2, boxShadow: "0 0 28px rgba(37,211,102,0.55)" }}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-[#128C7E] md:w-auto"
          >
            <WhatsAppIcon />
            Chat on WhatsApp →
          </motion.a>

          {/* Phone link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4"
          >
            <a
              href="tel:+923005404055"
              className="text-sm text-[#A0A0B8] transition-colors hover:text-white"
            >
              or call +92 300 5404055
            </a>
          </motion.div>
        </div>

        {/* Right column — car image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="flex flex-1 items-center justify-center md:[transform:perspective(800px)_rotateY(-6deg)]"
          style={{ filter: "drop-shadow(0 8px 40px rgba(245,166,35,0.18))" }}
        >
          <Image
            src="https://sherbrotherpakistan.com/wp-content/uploads/2025/07/why-choose-sher-brothers-rent-a-car-pakistan.webp"
            alt="Sher Brothers premium rental car"
            width={600}
            height={450}
            className="object-contain w-full h-auto max-w-[85vw] md:max-w-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
