"use client";

import ServiceCard from "../components/ServiceCard";
import {
  Code2,
  Search,
  Cpu,
  ShoppingCart,
  Megaphone,
  Layers3,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "High-performance websites and web applications built with modern technologies.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Increase visibility, rankings, and organic traffic with proven SEO strategies.",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description:
      "Automate repetitive tasks and improve efficiency using AI-powered workflows.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores optimized for conversions and customer experience.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that generate leads and grow your brand presence.",
  },
  {
    icon: Layers3,
    title: "Custom Software",
    description:
      "Tailored software solutions designed specifically for your business needs.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Solutions Designed To
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Accelerate Growth
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            From websites and SEO to AI automation and software development,
            we provide everything your business needs to grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              number={index + 1}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}