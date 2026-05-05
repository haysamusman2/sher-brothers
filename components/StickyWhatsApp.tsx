"use client";

import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

export default function StickyWhatsApp() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Sonar pulse ring */}
        {!reduce && (
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{ scale: [1, 1.7, 1.7], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <a
          href="https://wa.me/923005404055"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl md:h-12 md:w-12"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
      </div>
    </motion.div>
  );
}
