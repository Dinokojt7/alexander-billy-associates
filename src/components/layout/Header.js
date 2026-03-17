"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import siteData from "@/lib/data/site-data.json";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Header */}
      <header style={{ backgroundColor: "#3D3D3D" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative h-14 w-40 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Alexander Billy and Associates"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* LET'S TALK button */}
            <Link
              href="/#contact"
              className="hidden sm:flex h-10 px-6 items-center border-2 border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#3D3D3D] transition-colors rounded-md"
            >
              LET&apos;S TALK
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 text-white lg:hidden border-2 border-white/40 rounded-md"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Floating GET IN TOUCH tab */}
      <a
        href="/#contact"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
        style={{
          backgroundColor: "#CC2020",
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
          padding: "14px 10px",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
          GET IN&nbsp;&nbsp;TOUCH
        </span>
      </a>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-4/5 max-w-xs z-50 flex flex-col"
              style={{ backgroundColor: "#3D3D3D" }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link href="/" className="relative h-12 w-32" onClick={() => setMenuOpen(false)}>
                  <Image src="/images/logo.png" alt="Alexander Billy and Associates" fill className="object-contain object-left brightness-0 invert" />
                </Link>
                <button onClick={() => setMenuOpen(false)} className="p-2 text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 px-6 py-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-white text-base font-semibold tracking-wide border-b border-white/10 hover:text-[#CC2020] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="px-6 py-5 border-t border-white/10">
                <p className="text-xs text-white/40 mb-2 uppercase tracking-widest">Contact</p>
                <p className="text-sm text-white/70">{siteData.business.phone}</p>
                <p className="text-sm text-white/70 mt-1">{siteData.business.email}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
