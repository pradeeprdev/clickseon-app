"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import WeatherMini from './WeatherMini';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Why Us",
      href: "#why-us",
    },
    {
      name: "Process",
      href: "#process",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg"
          : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
              CG
            </div>

            <div>
              <h2
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled
                    ? "text-slate-900"
                    : "text-white"
                }`}
              >
                ClickGrow AI
              </h2>

              <p
                className={`text-xs transition-colors duration-300 ${
                  scrolled
                    ? "text-slate-500"
                    : "text-white/70"
                }`}
              >
                AI Digital Agency
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-slate-700 hover:text-indigo-600"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            <WeatherMini />

            {/* Badge */}
            <div
              className={`px-3 py-1 rounded-full flex items-center gap-2 transition-all ${
                scrolled
                  ? "bg-indigo-50 border border-indigo-100"
                  : "bg-white/10 border border-white/20"
              }`}
            >
              <Sparkles
                size={14}
                className={
                  scrolled
                    ? "text-indigo-600"
                    : "text-white"
                }
              />

              <span
                className={`text-xs font-medium ${
                  scrolled
                    ? "text-indigo-600"
                    : "text-white"
                }`}
              >
                AI Powered
              </span>
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300"
            >
              Free Consultation

              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-xl border transition-all ${
              scrolled
                ? "border-slate-200 text-slate-900 bg-white"
                : "border-white/20 text-white bg-white/10"
            }`}
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="lg:hidden bg-white border-t border-slate-200 shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-medium hover:text-indigo-600 transition"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-5 py-3 text-center text-white font-semibold"
              >
                Book Free Consultation
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}