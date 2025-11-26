"use client";
import { useState } from "react";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="text-gray-900 -mt-[5rem]">
      <QvipleNavbar />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative pb-16 pt-24 md:pt-32 overflow-hidden">
        <img
          src="/images/private-hero-pattern.webp"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-100"
          alt="BG"
        />

        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="space-y-5 text-center md:text-left max-w-xl">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Get a dedicated SEPA IBAN account for your business
            </h1>

            <a
              href="/"
              className="inline-block bg-white text-gray-900 font-semibold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all hover:bg-gray-200"
            >
              Schedule Now
            </a>
          </div>

          <img
            src="/images/dedicated-hero.webp"
            className="w-[85%] sm:w-[60%] md:w-full max-w-sm md:max-w-lg drop-shadow-xl"
            alt="IBAN"
          />
        </div>
      </section>

      {/* ---------------- BLUE CARD SECTION ---------------- */}
      <section className="bg-[url('/images/chain-bg.png')] bg-cover bg-center py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="bg-[#4888FB] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
            <div className="text-white space-y-5 lg:max-w-lg text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                Get a Euro IBAN for Your Company
              </h2>
              <p className="text-base sm:text-lg opacity-90 leading-relaxed">
                Opening a private IBAN is difficult at traditional banks.
                Jetonbank makes it fast, secure and seamless for registered
                businesses.
              </p>
            </div>

            <img
              src="/images/jtn-ui-2.webp"
              className="w-[90%] sm:w-[75%] md:w-full max-w-lg rounded-xl shadow-lg hover:scale-105 transition"
              alt="Euro IBAN"
            />
          </div>
        </div>
      </section>

      {/* ---------------- INFO ROW ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 md:py-20">
        <p className="text-center text-[#4888FB] font-semibold tracking-wide">
          START SMALL, SCALE BIG
        </p>

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-10 md:mb-16">
          Modern banking tailored for businesses
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="space-y-4 text-center lg:text-left max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4888FB]">
              Low-fee Euro IBAN{" "}
              <span className="text-gray-800">for Verified Users</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Access scalable IBAN services with lower fees, fully optimized for
              European transfers.
            </p>
          </div>

          <img
            src="/images/euro-iban.webp"
            className="w-[85%] sm:w-[70%] md:w-full max-w-lg rounded-xl shadow hover:scale-105 transition"
            alt="IBAN"
          />
        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-20 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-14">
            Our Core Banking Services
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
            {services.map((item, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <img src={item.image} className="rounded-xl shadow-md mb-6" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggle(index)}
              className="w-full py-5 flex justify-between items-center text-left text-lg font-medium"
            >
              {item.question}
              <span
                className={`text-2xl transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all overflow-hidden ${
                openIndex === index
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-base pb-5 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="relative bg-[url('/images/chain-bg.png')] bg-cover bg-center py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-3xl bg-[url('/images/light-blue-bg.webp')] bg-cover bg-center text-white shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-10 sm:p-12 md:p-14 lg:p-20">
              {/* Text Content */}
              <div className="space-y-6 text-center lg:text-left max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                  Grow your business with Jetonbank
                </h2>

                <p className="text-base sm:text-lg opacity-90">
                  Experience fast, secure and flexible financial management for
                  your business.
                </p>

                <button className="bg-[#131E3D] hover:bg-[#344c89] px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  SIGN UP NOW →
                </button>
              </div>

              {/* Laptop Image */}
              <div className="w-full flex justify-center lg:justify-end">
                <img
                  src="/images/jtn-laptop.webp"
                  alt="Jetonbank UI"
                  className="w-[80%] sm:w-[65%] md:w-[55%] lg:w-[350px] xl:w-[420px] drop-shadow-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    image: "/images/sepa.webp",
    title: "Transfers with EU SEPA",
    desc: "Instant Eurozone transfers with full compliance and reliability.",
  },
  {
    image: "/images/worldwide.webp",
    title: "SWIFT Transfers Worldwide",
    desc: "Safely send money globally using the SWIFT network.",
  },
];

const faqs = [
  {
    question: "Which currencies are supported?",
    answer:
      "You can hold and transact in multiple supported global currencies.",
  },
  {
    question: "Who can open an account?",
    answer: "Verified businesses, individuals, and remote teams.",
  },
  {
    question: "Are exchange rates competitive?",
    answer: "Yes, our FX module fetches real-time market rates.",
  },
  {
    question: "Can I receive payments globally?",
    answer: "Yes. The account enables cross-border payments with low fees.",
  },
  {
    question: "Any conversion fees?",
    answer: "Yes, depending on the currency pair & exchange rate timing.",
  },
];
