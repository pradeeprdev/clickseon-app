"use client";

import { useForm } from "react-hook-form";
import { useToast } from "../components/ToastProvider";
import { sendLead } from "../services/api";
import type { LeadPayload } from "../types";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactCTA() {
  const { show } = useToast();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadPayload>();

  const onSubmit = async (data: LeadPayload) => {
    try {
      setLoading(true);

      await sendLead(data);

      show(
        "Your request has been submitted successfully!",
        "success"
      );

      reset();
    } catch (error: any) {
      show(
        error?.message || "Something went wrong",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-100 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100 rounded-full blur-[120px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
            Free Consultation
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Let's Build Something
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Tell us about your project and our experts will get
            back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 text-white h-full">

              <h3 className="text-3xl font-bold">
                Get In Touch
              </h3>

              <p className="mt-4 text-white/90">
                Ready to grow your business with AI,
                automation, and modern web solutions?
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-start gap-4">
                  <Phone className="mt-1" />
                  <div>
                    <h4 className="font-semibold">
                      Phone
                    </h4>
                    <p className="text-white/80">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1" />
                  <div>
                    <h4 className="font-semibold">
                      Email
                    </h4>
                    <p className="text-white/80">
                      hello@clickgrowai.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1" />
                  <div>
                    <h4 className="font-semibold">
                      Location
                    </h4>
                    <p className="text-white/80">
                      India • Serving Clients Worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/20 pt-8">

                <div className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Free consultation</span>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <CheckCircle size={20} />
                  <span>No obligation quote</span>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <CheckCircle size={20} />
                  <span>Fast response within 24 hours</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-3">

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block mb-2 font-medium text-slate-700">
                      Full Name *
                    </label>

                    <input
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message:
                            "Minimum 3 characters required",
                        },
                      })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-slate-700">
                      Email Address *
                    </label>

                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message:
                            "Enter a valid email",
                        },
                      })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block mb-2 font-medium text-slate-700">
                      Phone Number *
                    </label>

                    <input
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message:
                            "Enter a valid phone number",
                        },
                      })}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-slate-700">
                      Service Interested In
                    </label>

                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">
                        Select Service
                      </option>
                      <option>
                        Website Development
                      </option>
                      <option>
                        SEO Optimization
                      </option>
                      <option>
                        AI Automation
                      </option>
                      <option>
                        E-Commerce Development
                      </option>
                      <option>
                        Digital Marketing
                      </option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Project Details
                  </label>

                  <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={18} />
                      Book Free Consultation
                    </span>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}