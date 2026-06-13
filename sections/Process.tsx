"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code2,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We analyze your business goals, audience, competitors, and current digital presence.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    desc: "A customized roadmap is created to maximize growth, leads, and automation opportunities.",
  },
  {
    icon: Code2,
    title: "Build & Launch",
    desc: "We develop your website, integrate AI tools, optimize SEO, and launch the solution.",
  },
  {
    icon: TrendingUp,
    title: "Optimize & Scale",
    desc: "Continuous monitoring, improvements, and growth strategies help maximize results.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-indigo-100 blur-[120px] rounded-full opacity-40" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-100 blur-[120px] rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Simple Process,
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A proven framework that helps businesses generate more leads,
            automate workflows, and achieve sustainable growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group">

                    {/* Step Number */}
                    <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mt-4 w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg">
                      <Icon size={30} />
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Hover Accent */}
                    <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 group-hover:w-24 transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">

          <div className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-[1px] rounded-3xl">
            <div className="bg-white rounded-3xl px-10 py-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Ready to Grow Your Business?
              </h3>

              <p className="mt-3 text-slate-600">
                Let's discuss how AI, automation, and digital growth strategies
                can help your business scale faster.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold hover:scale-105 transition"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}