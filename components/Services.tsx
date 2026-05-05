"use client";

import { motion, useReducedMotion } from "framer-motion";

const CARDS = [
  { icon: "🏙️", title: "City Rides",        desc: "Door-to-door travel within Lahore and major cities." },
  { icon: "🛣️", title: "Intercity Trips",   desc: "Comfortable rides between cities across Pakistan." },
  { icon: "💍", title: "Weddings & Events", desc: "Premium cars for your most important days." },
  { icon: "🏔️", title: "Northern Tours",    desc: "Explore Pakistan's north in a safe, capable vehicle." },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#0A0A1A] px-4 md:px-6 py-20">
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
            What We Offer
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-10 bg-[#F5A623]" />
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
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
