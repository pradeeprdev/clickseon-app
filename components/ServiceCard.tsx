"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  number: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  number,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Service Number */}
      <div className="absolute top-6 right-6 text-5xl font-bold text-slate-100">
        {String(number).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
        <Icon size={30} />
      </div>

      {/* Content */}
      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-600">
          Growth
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-600">
          Scalable
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-pink-50 text-pink-600">
          Modern Tech
        </span>
      </div>

      {/* CTA */}
      <Link
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 text-indigo-600 font-semibold"
      >
        Learn More

        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition"
        />
      </Link>

      {/* Hover Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
      </div>
    </motion.div>
  );
}