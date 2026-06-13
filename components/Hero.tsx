"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
ArrowRight,
Sparkles,
TrendingUp,
Users,
Bot,
} from "lucide-react";

export default function Hero() {
return ( <section className="relative overflow-hidden bg-slate-950 text-white min-h-screen flex items-center">

  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute top-32 left-20 h-72 w-72 rounded-full bg-indigo-600/30 blur-[120px]" />
    <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-[120px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 mb-6"
        >
          <Sparkles size={16} />
          <span className="text-sm font-medium">
            AI-Powered Digital Growth Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Grow Your Business With
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI & Modern Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-xl text-slate-300 max-w-2xl"
        >
          We build high-converting websites, automate business operations,
          improve SEO rankings, and help businesses generate more leads
          using AI-driven solutions.
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold shadow-xl hover:scale-105 transition"
          >
            Book Free Consultation

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </Link>

          <Link
            href="#services"
            className="rounded-xl border border-white/20 px-8 py-4 text-lg font-medium hover:bg-white/10 transition"
          >
            Explore Services
          </Link>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-4xl font-bold text-indigo-400">
              500+
            </h3>
            <p className="text-slate-400 mt-2">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-400">
              98%
            </h3>
            <p className="text-slate-400 mt-2">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-purple-400">
              24/7
            </h3>
            <p className="text-slate-400 mt-2">
              Dedicated Support
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">
              50+
            </h3>
            <p className="text-slate-400 mt-2">
              Business Partners
            </p>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">
              Growth Dashboard
            </h3>

            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="rounded-2xl bg-slate-900 p-5">
              <TrendingUp className="text-green-400" />
              <h4 className="text-3xl font-bold mt-3">
                +245%
              </h4>
              <p className="text-slate-400 text-sm">
                Lead Growth
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5">
              <Users className="text-indigo-400" />
              <h4 className="text-3xl font-bold mt-3">
                12K+
              </h4>
              <p className="text-slate-400 text-sm">
                Visitors
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5">
              <Bot className="text-pink-400" />
              <h4 className="text-3xl font-bold mt-3">
                AI
              </h4>
              <p className="text-slate-400 text-sm">
                Automation
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5">
              <TrendingUp className="text-cyan-400" />
              <h4 className="text-3xl font-bold mt-3">
                4.9★
              </h4>
              <p className="text-slate-400 text-sm">
                Client Rating
              </p>
            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5">
            <h4 className="font-bold text-lg">
              Free AI Growth Audit
            </h4>

            <p className="text-white/80 mt-2">
              Discover hidden opportunities to increase leads and automate your business.
            </p>

            <Link
              href="#contact"
              className="inline-block mt-4 rounded-lg bg-white px-5 py-2 text-slate-900 font-semibold"
            >
              Claim Free Audit
            </Link>
          </div>

        </div>

      </motion.div>

    </div>
  </div>
</section>

);
}
