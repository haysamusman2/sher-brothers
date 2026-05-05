"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface StatConfig {
  from: number;
  to: number;
  format: (v: number) => string;
  label: string;
}

const STATS: StatConfig[] = [
  { from: 0, to: 2000, format: (v) => `${Math.round(v).toLocaleString()}+`, label: "Successful Rentals" },
  { from: 0, to: 7,    format: (v) => `${Math.round(v)} Years`,             label: "In Business" },
  { from: 0, to: 5,    format: (v) => `⭐ ${v.toFixed(1)}`,                  label: "Google Rating" },
];

function CountUp({ from, to, format, label }: StatConfig) {
  const count = useMotionValue(from);
  const display = useTransform(count, format);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [inView, count, to]);

  return (
    <div ref={ref} className="text-center">
      <motion.span className="block text-3xl font-bold text-[#F5A623] md:text-4xl">
        {display}
      </motion.span>
      <p className="mt-1 text-sm text-[#A0A0B8]">{label}</p>
    </div>
  );
}

export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-[#12122A] px-6 py-12"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6">
        {STATS.map((stat) => (
          <CountUp key={stat.label} {...stat} />
        ))}
      </div>
    </motion.section>
  );
}
