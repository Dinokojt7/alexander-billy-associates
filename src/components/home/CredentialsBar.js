"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CREDS = [
  { src: "/images/sars.jpg", alt: "SARS — Tax Practitioner", label: "Tax Practitioner" },
  { src: "/images/cigfar.jpg", alt: "CIGFARO", label: "CIGFARO Member" },
  { src: "/images/saipa.jpg", alt: "SAIPA", label: "SAIPA Member" },
];

export default function CredentialsBar() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-8">
          Licenses &amp; Certifications
        </p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200"
        >
          {CREDS.map(({ src, alt, label }) => (
            <div key={alt} className="flex flex-col items-center gap-3 px-12 py-6 sm:py-0">
              <div className="relative h-16 w-28">
                <Image src={src} alt={alt} fill className="object-contain" />
              </div>
              <p className="text-[10px] text-gray-400 tracking-wider uppercase">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
