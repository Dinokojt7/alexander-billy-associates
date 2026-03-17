"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto rounded-2xl py-14 px-8 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-8" style={{ backgroundColor: "#CC2020" }}>
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white leading-[1.0] mb-3">
            GET IN{" "}
            <span className="relative inline-block">
              TOUCH
              <span className="absolute left-0 -bottom-1 h-1 w-full bg-[#1C2D5A]" />
            </span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm mt-4">
            Count on us to handle your tax and finances.<br />
            Get in touch today for a no-obligation consultation.
          </p>
        </motion.div>

        {/* Center: chevrons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="hidden md:flex items-center gap-1 self-center"
          style={{ color: "#1C2D5A" }}
          aria-hidden="true"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 32" fill="none" className="w-5 h-8" style={{ opacity: 0.4 + i * 0.075 }}>
              <path d="M2 2L18 16L2 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </motion.div>

        {/* Right: button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="self-center"
        >
          <Link
            href="mailto:mrmasungwini@gmail.com"
            className="inline-flex items-center justify-center h-12 px-8 border-2 rounded-md text-xs font-black tracking-widest uppercase hover:bg-[#1C2D5A] hover:border-[#1C2D5A] hover:text-white transition-colors"
            style={{ borderColor: "#1C2D5A", color: "#1C2D5A" }}
          >
            LET&apos;S TALK
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
