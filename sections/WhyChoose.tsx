"use client";

import { motion } from "framer-motion";
import {
  Users,
  BrainCircuit,
  MessageSquare,
  Zap,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our team brings years of expertise in web development, SEO, automation, and digital growth.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Solutions",
    description:
      "Leverage modern AI tools and automation to save time and increase business efficiency.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Stay informed with regular updates, clear timelines, and complete project visibility.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile workflows ensure faster project completion without compromising quality.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description:
      "Premium services at competitive pricing designed to maximize ROI.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our experts are available whenever you need assistance, guidance, or updates.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full blur-[120px] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Why Businesses Trust
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              ClickGrow AI
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We combine technology, creativity, and strategy to deliver
            measurable business growth and exceptional digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Number */}
                <div className="absolute top-5 right-5 text-5xl font-bold text-slate-100">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
                  <Icon size={30} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
            <p className="text-slate-500 mt-2">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-purple-600">98%</h3>
            <p className="text-slate-500 mt-2">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-600">24/7</h3>
            <p className="text-slate-500 mt-2">
              Expert Support
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-600">50+</h3>
            <p className="text-slate-500 mt-2">
              Business Partners
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}