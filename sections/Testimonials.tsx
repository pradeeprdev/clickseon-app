"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Khan",
    role: "CEO",
    company: "FinTech Solutions",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "ClickGrow AI completely transformed our lead generation process. Within three months, our conversion rate doubled and customer engagement increased significantly.",
  },
  {
    name: "Liam Roberts",
    role: "Marketing Director",
    company: "GrowthHub",
    image: "https://i.pravatar.cc/150?img=15",
    quote:
      "The team delivered beyond expectations. Their communication, technical expertise, and AI-driven strategies helped us scale much faster.",
  },
  {
    name: "Sofia Martinez",
    role: "Founder",
    company: "Smart Ventures",
    image: "https://i.pravatar.cc/150?img=45",
    quote:
      "Their automation systems save our team dozens of hours every month. The ROI was visible almost immediately after implementation.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-100 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100 rounded-full blur-[120px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
            Client Success Stories
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Trusted By
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            See how our digital solutions, automation systems, and growth
            strategies have helped businesses achieve measurable results.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

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
            <h3 className="text-4xl font-bold text-pink-600">4.9★</h3>
            <p className="text-slate-500 mt-2">
              Average Rating
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-600">50+</h3>
            <p className="text-slate-500 mt-2">
              Business Partners
            </p>
          </div>

        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="relative rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={70} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed text-lg">
                "{item.quote}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100"
                />

                <div>
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-indigo-500 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">

          <div className="inline-block rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-[1px]">
            <div className="bg-white rounded-3xl px-10 py-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Ready To Become Our Next Success Story?
              </h3>

              <p className="mt-3 text-slate-600">
                Let's discuss how we can help you generate more leads,
                automate operations, and scale your business.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold hover:scale-105 transition"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}