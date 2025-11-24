"use client";

import { motion } from "framer-motion";
import Navbar from "@/Navbar/Navbar";
import { ChevronDown } from "lucide-react";

const colors = {
  primary: "text-blue-600",
  primaryHover: "hover:text-blue-700",
  bgLight: "bg-gray-50",
  bgDark: "bg-white",
  card: "bg-white",
  textDark: "text-gray-900",
  textMuted: "text-gray-600",
};

export default function PrivacyPage() {
  return (
    <div className="-mt-[1rem]">
      <Navbar />

      <section
        className={` bg-gray-100 min-h-[50vh] md:min-h-[70vh] flex items-center px-6 sm:px-14 md:px-20 relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-[0.28] bg-gradient-to-b from-blue-500/30 to-purple-500/20 blur-2xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          <h1 className="md:text-5xl text-2xl font-extrabold">
            Privacy Policy
          </h1>

          <p className="mt-6 text-black text-lg sm:text-xl max-w-2xl leading-relaxed opacity-90">
            We believe privacy is a fundamental right. You deserve clarity on
            how your data is collected, processed and protected — without hidden
            terms or confusing language.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: Nov 23, 2025
          </p>
        </motion.div>
      </section>

      <main className={`${colors.bgLight} py-24 px-1.5 md:px-6 sm:px-10`}>
        <div className="max-w-6xl mx-auto shadow-xl rounded-3xl p-8 sm:p-16 bg-white border border-gray-100">
          {/* Intro */}
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
              Our Commitment
            </p>

            <h2 className={`text-4xl font-semibold ${colors.textDark} mt-2`}>
              Transparency. Security. Trust.
            </h2>

            <p
              className={`text-lg ${colors.textMuted} mt-4 max-w-3xl leading-relaxed`}
            >
              Our privacy framework reflects international standards and ethical
              data usage. You stay in control — always.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="divide-y divide-gray-100">
            {policySections.map((section, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="group py-6 px-2 rounded-lg transition-all duration-300 open:bg-blue-50/40 cursor-pointer"
              >
                <summary
                  className={`flex justify-between items-center text-[20px] font-medium ${colors.textDark} list-none`}
                >
                  <span className="transition-colors duration-200 group-hover:text-blue-600">
                    {section.title}
                  </span>
                  <ChevronDown
                    size={24}
                    className="text-gray-400 transition duration-300 group-open:rotate-180 group-open:text-blue-600"
                  />
                </summary>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`${colors.textMuted} mt-4 border-l-4 border-blue-300 pl-4 leading-relaxed`}
                >
                  {section.content}
                </motion.p>
              </motion.details>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Need Help or Clarification?
            </h3>

            <p className="text-gray-600 mt-3 text-lg leading-relaxed">
              For account access, personal data requests or privacy-related
              support, reach out to our dedicated team:
            </p>

            <a
              href="mailto:connect@qviple.com"
              className="mt-5 inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-base transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Contact Privacy Support
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

const policySections = [
  {
    title: "Information We Collect",
    content:
      "We collect identifying information such as name, email, phone number, billing details and device data to ensure secure access and improve user experience.",
  },
  {
    title: "How We Use Data",
    content:
      "We use collected information to personalize experience, provide support, maintain platform security, perform analytics, and communicate updates.",
  },
  {
    title: "Third-Party Sharing",
    content:
      "We securely work with third parties like analytics, storage and payment services, without selling or misusing personal user data.",
  },
  {
    title: "Security & Encryption",
    content:
      "All sensitive information is encrypted in transit and at rest. We follow industry-standard data management and certification practices.",
  },
  {
    title: "User Rights",
    content:
      "You can request access, correction, export, or deletion of your data as allowed under applicable law.",
  },
];
