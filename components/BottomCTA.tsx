"use client";

import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

export default function BottomCTA() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-20 text-center"
      style={{ background: "linear-gradient(135deg, #F5A623, #FFD166)" }}
    >
      <h2 className="mb-4 font-playfair text-3xl font-bold text-[#0A0A1A] md:text-4xl">
        Ready When You Are.
      </h2>
      <p className="mx-auto mb-8 max-w-md text-[#0A0A1A]/80">
        Send us your route, date, and car preference — we&apos;ll quote you in minutes.
      </p>
      <motion.a
        href="https://wa.me/923005404055"
        target="_blank"
        rel="noopener noreferrer"
        animate={reduce ? {} : { scale: [1, 1.03, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#128C7E] shadow-lg"
      >
        <WhatsAppIcon />
        Open WhatsApp Now
      </motion.a>
    </motion.section>
  );
}
