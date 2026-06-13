"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most website and automation projects take between 4–8 weeks depending on complexity, integrations, and client requirements.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer ongoing maintenance, performance monitoring, SEO improvements, and feature enhancements after launch.",
  },
  {
    q: "Can you integrate with our existing tools?",
    a: "Absolutely. We work with CRMs, payment gateways, analytics platforms, marketing tools, and custom APIs.",
  },
  {
    q: "Do you offer AI automation services?",
    a: "Yes. We specialize in AI-powered chatbots, workflow automation, lead qualification, customer support systems, and business process automation.",
  },
  {
    q: "Will my website be SEO optimized?",
    a: "Every project includes technical SEO best practices, optimized performance, metadata, schema markup, and mobile responsiveness.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-indigo-100 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-100 rounded-full blur-[120px] opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
            <HelpCircle size={16} />
            FAQ
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know about our services, process,
            pricing, and support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.q}
                </span>

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50">
                  {open === index ? (
                    <Minus className="text-indigo-600" size={20} />
                  ) : (
                    <Plus className="text-indigo-600" size={20} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="mt-16">

          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-[1px]">
            <div className="rounded-3xl bg-white px-10 py-10 text-center">

              <h3 className="text-2xl font-bold text-slate-900">
                Still Have Questions?
              </h3>

              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Our experts are ready to help. Schedule a free consultation
                and get personalized recommendations for your business.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
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