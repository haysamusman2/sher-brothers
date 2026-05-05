"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

const HEADLINE_WORDS = ["Need", "a", "Car?", "We're", "One", "Message", "Away."];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Ken Burns background */}
      <div className="absolute inset-0 ken-burns">
        <Image
          src="https://sherbrotherpakistan.com/wp-content/uploads/2025/12/Rent-a-Car-Pakistan.webp"
          alt="Sher Brothers car fleet in Pakistan"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bottom-heavy dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, #0A0A1A 0%, transparent 60%)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 pt-24 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A623]"
        >
          Lahore · Intercity · Nationwide
        </motion.p>

        {/* Headline — word-by-word stagger */}
        <h1 className="mb-4 font-playfair text-4xl font-bold leading-tight text-white md:text-6xl">
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

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

        {/* Primary CTA — visible within 300ms */}
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

        {/* Secondary phone link */}
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
    </section>
  );
}
