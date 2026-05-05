"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(target: number, duration = 1500, enabled = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, enabled]);
  return count;
}

interface StatConfig {
  target: number;
  format: (v: number) => string;
  label: string;
}

function CountUp({ target, format, label, enabled }: StatConfig & { enabled: boolean }) {
  const count = useCountUp(target, 1500, enabled);
  return (
    <div className="text-center">
      <span className="block text-3xl font-bold text-[#F5A623] md:text-4xl">
        {format(count)}
      </span>
      <p className="mt-1 text-sm text-[#A0A0B8]">{label}</p>
    </div>
  );
}

const STATS: StatConfig[] = [
  { target: 2000, format: (v) => `${v.toLocaleString()}+`, label: "Successful Rentals" },
  { target: 7,    format: (v) => `${v} Years`,              label: "In Business" },
  { target: 5,    format: (v) => `⭐ ${v.toFixed(1)}`,      label: "Google Rating" },
];

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnabled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-[#12122A] px-6 py-12"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 min-[380px]:grid-cols-3 gap-6">
        {STATS.map((stat) => (
          <CountUp key={stat.label} {...stat} enabled={enabled} />
        ))}
      </div>
    </motion.section>
  );
}
