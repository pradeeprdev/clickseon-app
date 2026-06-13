"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  GitCommitHorizontal,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top CTA */}
        <div className="py-16 border-b border-slate-800">

          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-[1px]">

            <div className="rounded-3xl bg-slate-950 px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

              <div>
                <h2 className="text-3xl font-bold">
                  Ready to Grow Your Business?
                </h2>

                <p className="mt-2 text-slate-400">
                  Let's build a high-converting website and automate
                  your business processes.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-105 transition"
              >
                Book Free Consultation
                <ArrowUpRight size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* Company */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ClickGrow AI
            </h3>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Helping businesses generate more leads, automate
              workflows, and scale faster through AI-powered
              solutions and modern web development.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-indigo-500 transition"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-indigo-500 transition"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-indigo-500 transition"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-indigo-500 transition"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#process"
                  className="text-slate-400 hover:text-white transition"
                >
                  Process
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">
              Services
            </h4>

            <ul className="mt-5 space-y-3">

              <li className="text-slate-400">
                Website Development
              </li>

              <li className="text-slate-400">
                SEO Optimization
              </li>

              <li className="text-slate-400">
                AI Automation
              </li>

              <li className="text-slate-400">
                E-Commerce Solutions
              </li>

              <li className="text-slate-400">
                Digital Marketing
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">
              Contact Us
            </h4>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-indigo-400 mt-1"
                />
                <span className="text-slate-400">
                  hello@clickgrowai.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-indigo-400 mt-1"
                />
                <span className="text-slate-400">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-indigo-400 mt-1"
                />
                <span className="text-slate-400">
                  India • Serving Worldwide
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ClickGrow AI.
            All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="text-slate-500 hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-slate-500 hover:text-white transition"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-slate-500 hover:text-white transition"
            >
              Cookie Policy
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}