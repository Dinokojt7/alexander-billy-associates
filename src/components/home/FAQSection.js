"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import siteData from "@/lib/data/site-data.json";

export default function FAQSection() {
  const { faqs } = siteData;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-16">
          {/* Left label */}
          <div className="md:pt-2">
            <h2 className="text-5xl sm:text-6xl font-black uppercase leading-none relative inline-block" style={{ color: "#3D3D3D" }}>
              FAQ&apos;S
              <span className="absolute left-0 -bottom-2 h-1.5 w-16" style={{ backgroundColor: "#CC2020" }} />
            </h2>
          </div>

          {/* Right: accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-dashed border-gray-300">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="text-sm sm:text-base font-black uppercase leading-snug" style={{ color: "#3D3D3D" }}>
                    {faq.question}
                  </span>
                  <span className="shrink-0 mt-0.5" style={{ color: "#3D3D3D" }}>
                    {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-500 leading-relaxed pb-6">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
