"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteData from "@/lib/data/site-data.json";

export default function TestimonialsSection() {
  const { testimonials } = siteData;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 px-4 sm:px-8"
      style={{ backgroundColor: "#F4F4F4" }}
    >
      {/* Left arrow — pinned to section edge */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 border-2 rounded-md flex items-center justify-center hover:bg-[#1C2D5A] hover:text-white transition-colors z-10"
        style={{ borderColor: "#1C2D5A", color: "#1C2D5A" }}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Right arrow — pinned to section edge */}
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 border-2 rounded-md flex items-center justify-center hover:bg-[#1C2D5A] hover:text-white transition-colors z-10"
        style={{ borderColor: "#1C2D5A", color: "#1C2D5A" }}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Content */}
      <div className="max-w-2xl mx-auto text-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 80 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Company */}
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-1" style={{ color: "#CC2020" }}>
              {t.companyType}
            </p>
            <p className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2" style={{ color: "#1C2D5A" }}>
              {t.company}
            </p>

            <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: "#CC2020" }} />

            {/* Headline */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight mb-2" style={{ color: "#1C2D5A" }}>
              {t.headline}
            </h3>
            <p className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-8">{t.subheadline}</p>

            {/* Quote */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-sm font-bold" style={{ color: "#1C2D5A" }}>{t.author}</p>
            <p className="text-xs text-gray-400 mt-0.5 mb-10">{t.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots only */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="w-2 h-2 rounded-full transition-all"
              style={{ backgroundColor: i === current ? "#CC2020" : "#d1d5db" }}
            />
          ))}
        </div>

        {/* CTA */}
        <a
          href="/#contact"
          className="inline-flex items-center justify-center h-12 px-8 border-2 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-[#1C2D5A] hover:text-white transition-colors"
          style={{ borderColor: "#1C2D5A", color: "#1C2D5A" }}
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
}
