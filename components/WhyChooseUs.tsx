"use client";

import { motion, useReducedMotion } from "framer-motion";

const CARDS = [
  { icon: "🏷️", title: "Transparent Pricing", desc: "No hidden charges — the price you hear is the price you pay." },
  { icon: "🚗", title: "Premium Fleet",        desc: "Clean, serviced vehicles. Every time, no exceptions." },
  { icon: "🕐", title: "Flexible Booking",     desc: "Book for an hour or a week. We work around your schedule." },
  { icon: "💬", title: "Reply in Minutes",     desc: "Real humans on WhatsApp — not a call center queue." },
];

export default function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#0A0A1A] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-playfair text-3xl font-bold text-white md:text-4xl">
            Why Thousands Choose Us
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-10 bg-[#F5A623]" />
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={{
                hidden:  { opacity: 0, y: reduce ? 0 : 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={reduce ? {} : { y: -4 }}
              className="rounded-2xl border border-transparent bg-[#12122A] p-6 transition-colors duration-200 hover:border-[#F5A623]"
            >
              <span className="mb-3 block text-[32px]" aria-hidden="true">{card.icon}</span>
              <h3 className="mb-2 font-bold text-white">{card.title}</h3>
              <p className="text-sm text-[#A0A0B8]">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
