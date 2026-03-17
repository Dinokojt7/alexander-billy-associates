"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import siteData from "@/lib/data/site-data.json";

export default function ServicesSection() {
  const { services, stats } = siteData;

  return (
    <section id="services" className="relative w-full py-14 px-4 sm:px-8 lg:px-12 overflow-hidden" style={{ backgroundColor: "#3D3D3D" }}>
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px" style={{ backgroundColor: "#CC2020" }} />
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: "#CC2020" }}>
              What We Do
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05]">
            Comprehensive Services.<br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Built Around Your Needs.</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: service grid */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/10"
          >
            {services.map((svc, i) => (
              <div
                key={i}
                className="p-5 border-b border-white/10"
                style={{ borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <p className="text-xs font-bold tracking-widest uppercase text-white mb-1">{svc.title}</p>
                <p className="text-xs text-white/40 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Right: stats + description + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              We understand that every individual and business has unique financial needs. Our experienced team brings decades of expertise in South African tax law — delivering accuracy, compliance, and strategic insight you can count on.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 border border-white/10 divide-x divide-white/10">
              {stats.map(({ num, label }) => (
                <div key={num} className="px-4 py-5 text-center">
                  <p className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">{num}</p>
                  <p className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 h-11 px-8 text-xs font-bold tracking-widest uppercase text-white hover:opacity-90 transition-opacity rounded-md"
              style={{ backgroundColor: "#CC2020" }}
            >
              GET IN TOUCH
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Office image */}
            <div className="relative w-full h-52 rounded-lg overflow-hidden">
              <Image
                src="/images/services-office.jpg"
                alt="Professional tax advisors at work"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
