"use client";

import Image from "next/image";
import { CheckCircle2, Rocket, ShieldCheck, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      title: "AI-Powered Solutions",
      description:
        "Leverage artificial intelligence to automate workflows and improve business efficiency.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-600" />,
      title: "Growth Focused",
      description:
        "We build strategies and digital products that drive measurable business growth.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
      title: "Trusted Expertise",
      description:
        "Years of experience delivering scalable and reliable digital solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full blur-[120px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/office.jpg"
                alt="ClickGrow AI Team"
                width={700}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white shadow-xl rounded-2xl p-6 border border-slate-100">
              <h4 className="text-3xl font-bold text-indigo-600">500+</h4>
              <p className="text-slate-600 text-sm">
                Successful Projects Delivered
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
              <span className="text-indigo-600 font-semibold text-sm">
                About ClickGrow AI
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Transforming Businesses With
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                AI & Digital Innovation
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              ClickGrow AI is a modern digital growth agency helping businesses
              scale through powerful websites, AI automation, SEO optimization,
              and conversion-focused marketing strategies.
            </p>

            <p className="mt-4 text-slate-600">
              We combine cutting-edge technology with proven growth strategies
              to help companies generate more leads, improve efficiency, and
              achieve sustainable growth.
            </p>

            {/* Checklist */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "AI Business Automation",
                "SEO & Lead Generation",
                "Custom Web Development",
                "Dedicated Expert Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-indigo-600">98%</h3>
                <p className="text-slate-500 text-sm">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-600">50+</h3>
                <p className="text-slate-500 text-sm">
                  Business Partners
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pink-600">24/7</h3>
                <p className="text-slate-500 text-sm">
                  Support Available
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}