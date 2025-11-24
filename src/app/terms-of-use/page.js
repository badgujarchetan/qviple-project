"use client";

import { motion } from "framer-motion";
import Navbar from "@/Navbar/Navbar";
import { ChevronDown } from "lucide-react";

const colors = {
  primary: "text-blue-600",
  primaryHover: "hover:text-blue-700",
  bgLight: "bg-gray-50",
  bgDark: "bg-white",
  textDark: "text-gray-900",
  textMuted: "text-gray-600",
};

export default function TermsOfUse() {
  return (
    <div className="-mt-[1rem]">
      <Navbar />

      {/* -------- HERO -------- */}
      <section className="md:min-h-[75vh]bmin-h-[50vh] flex items-center px-6 sm:px-14 md:px-20 relative overflow-hidden bg-gray-100 md:-mt-1">
        <div className="absolute inset-0 opacity-[0.28] bg-gradient-to-b from-blue-500/30 to-purple-500/20 blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative max-w-5xl mx-auto py-16"
        >
          <h1 className=" text-2xl md:text-5xl font-extrabold">Terms of Use</h1>

          <p className="mt-6 text-lg max-w-2xl opacity-90 text-gray-700">
            These Terms govern how you access and use Qviple. By continuing to
            use our platform, you agree to the rights, responsibilities, and
            compliance rules outlined in this document.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: Nov 23, 2025
          </p>
        </motion.div>
      </section>

      {/* -------- CONTENT -------- */}
      <main className={`${colors.bgLight} py-24 md:px-6 px-1.5 sm:px-10`}>
        <div className="max-w-6xl mx-auto shadow-xl rounded-3xl p-8 sm:p-16 bg-white border border-gray-100">
          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="mb-16 pb-6 border-b border-gray-100"
          >
            <p
              className={`uppercase text-sm font-medium tracking-wide ${colors.primary}`}
            >
              PLEASE READ CAREFULLY
            </p>

            <h2 className={`text-4xl font-semibold ${colors.textDark} mt-2`}>
              Your Access Comes With Responsibility.
            </h2>

            <p
              className={`text-lg ${colors.textMuted} mt-4 max-w-3xl leading-relaxed`}
            >
              These Terms apply to all website visitors, registered users,
              institutions and application users. Using Qviple means you accept
              and agree to follow them.
            </p>
          </motion.div>

          {/* -------- ACCORDION -------- */}
          <div className="divide-y divide-gray-100">
            {termsSections.map((section, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="group py-6 px-2 rounded-lg transition-all duration-300 open:bg-blue-50/40 cursor-pointer"
              >
                <summary className="flex justify-between items-center text-[20px] font-medium text-gray-900 list-none">
                  <span className="transition-colors group-hover:text-blue-600">
                    {section.title}
                  </span>
                  <ChevronDown
                    size={24}
                    className="text-gray-400 transition group-open:rotate-180 group-open:text-blue-600"
                  />
                </summary>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="mt-4"
                >
                  {Array.isArray(section.content) ? (
                    section.content.map((p, i) => (
                      <p
                        key={i}
                        className={`${colors.textMuted} mb-4 leading-relaxed border-l-4 border-blue-300 pl-4`}
                      >
                        {p}
                      </p>
                    ))
                  ) : (
                    <p
                      className={`${colors.textMuted} leading-relaxed border-l-4 border-blue-300 pl-4`}
                    >
                      {section.content}
                    </p>
                  )}
                </motion.div>
              </motion.details>
            ))}
          </div>

          {/* -------- CONTACT CTA -------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Have Questions or Need Support?
            </h3>

            <p className="text-gray-600 mt-3 text-lg max-w-2xl leading-relaxed">
              You may request clarification, policy rights, or account-related
              support by contacting us.
            </p>

            <a
              href="mailto:connect@qviple.com"
              className="mt-5 inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-base transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Contact Qviple Support
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

/* -------- YOUR ACTUAL TERMS CONTENT INSERTED -------- */
const termsSections = [
  {
    title: "General Terms",
    content: [
      "By accessing and placing an order with Qviple, you confirm that you are in agreement with and bound by these Terms.",
      "These agreements apply to the entire website and any email or communication between you and Qviple.",
      "Under no circumstances will Qviple be liable for direct or indirect damages including loss of data or profit.",
      "Pricing, features, and product access may be updated.",
    ],
  },
  {
    title: "License",
    content:
      "Qviple grants you a revocable, non-exclusive, non-transferable limited license to use the platform strictly under these Terms.",
  },
  {
    title: "Restrictions",
    content: [
      "Users may not modify, reverse-engineer, resell or distribute the Service.",
      "Users may not remove or alter copyright or legal notices.",
      "You may not impersonate identity of another organization or user.",
    ],
  },
  {
    title: "Refund & Payment Policy",
    content: [
      "Refunds are possible only within 48 hours depending on transaction type.",
      "Institute fees are non-refundable from Qviple; user must contact the institution.",
    ],
  },
  {
    title: "User Conduct",
    content: [
      "You must be at least 13+ or legal age in your country.",
      "You are prohibited from illegal, abusive, fraudulent or misleading activity.",
      "You must not store, copy or share unlawful content.",
    ],
  },
  {
    title: "Termination",
    content:
      "We may suspend or terminate your access for violation of Terms, fraudulent activity or required compliance reasons.",
  },
  {
    title: "Intellectual Property",
    content:
      "All trademarks, logos, and platform content belong to Qviple or its licensors and cannot be reused without permission.",
  },
  {
    title: "Contact Details",
    content: [
      "Email: connect@qviple.com",
      "Operational Address: H.N. 1860, Sinnar, Nashik, Maharashtra, India",
      "Support: +91 7276147751",
    ],
  },
];
