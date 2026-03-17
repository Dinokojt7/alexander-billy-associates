"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-[1.05] tracking-tight mb-8" style={{ color: "#1C2D5A" }}>
            TAX IS MORE THAN<br />
            COMPLIANCE. IT IS THE<br />
            FOUNDATION OF YOUR{" "}
            <span className="relative inline-block">
              FUTURE
              <span className="absolute left-0 -bottom-1 h-1 w-full" style={{ backgroundColor: "#CC2020" }} />
            </span>
            .
          </h2>

          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              At Alexander Billy and Associates, we do the heavy lifting so you&apos;re free to focus on what matters most — building your life and your business. Our personalised approach means every client receives tailored advice, not off-the-shelf solutions.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              With over 25 years of experience serving individuals and businesses across KwaZulu-Natal, we have built lasting relationships based on trust, integrity, and results. From tax returns to financial reports and payroll, we are your partner every step of the way.
            </p>
          </div>
        </motion.div>

        {/* Right column — image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full aspect-4/5 rounded-xl overflow-hidden"
        >
          <Image
            src="/images/about-team.jpg"
            alt="Alexander Billy and Associates team"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
