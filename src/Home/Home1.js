"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home1() {
  const [hover, setHover] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // Controlled form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill all fields!", { position: "top-right" });
      return;
    }

    toast.success("Form submitted successfully!", { position: "top-right" });

    setTimeout(() => {
      setOpenModal(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-orange-600">
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-50 px-[4%] py-5 flex justify-between items-center">
        <a
          href="/"
          className="text-[1.8rem] font-extrabold tracking-[1px]
        bg-gradient-to-r from-[#ff6a00] to-[#ee0979]
        bg-clip-text text-transparent"
        >
          Qviple
        </a>

        {/* ENQUIRY BUTTON */}
        <motion.button
          onClick={() => setOpenModal(true)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#ff6a00] to-[#ee0979] cursor-pointer
          text-white px-[1.3rem] py-[0.5rem] rounded-[30px] font-semibold shadow-md"
        >
          Enquiry
        </motion.button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-full">
        {/* Background Video */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-500`}
          style={{ transform: hover ? "scale(1.1)" : "scale(1)" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <video
            className={`w-full h-full object-cover transition-opacity duration-[1.4s] ${
              videoLoaded ? "opacity-100" : "opacity-70"
            }`}
            src="/videos/background.mp4"
            type="video/mp4"
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
          ></video>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Main content */}
        <div className="relative z-20 flex flex-wrap w-full min-h-screen text-white px-[4%] pt-40 pb-48 items-end">
          <div className="flex-1 md:max-w-[50%] flex flex-col justify-end">
            <h2 className="text-[3rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[6.2rem] font-semibold leading-[1.1]">
              <span>One app</span>
              <br />
              <span>for all needs</span>
            </h2>
          </div>

          {/* Right content */}
          <div className="flex flex-col justify-end md:max-w-[25%] mt-10 md:mt-0 md:ml-[20%] mb-14">
            <p className="text-lg md:text-xl font-medium leading-snug">
              Single account for all your payments.
            </p>

            <div className="flex gap-5 mt-8">
              <a
                href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[148px] h-[44px] border border-white/30 rounded-md hover:scale-105 transition-all"
              >
                <img
                  src="/images/app-store-neutral.svg"
                  className="absolute inset-0 w-full h-full"
                />
              </a>

              <Link
                href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
                className="relative w-[148px] h-[44px] border border-white/30 rounded-md hover:scale-105 transition-all"
                target="_blank"
              >
                <img
                  src="/images/google-play-neutral.svg"
                  className="absolute inset-0 w-full h-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenModal(false)}
            />

            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 z-[100] -translate-x-1/2 
              -translate-y-1/2 bg-white w-[90%] sm:w-[450px] rounded-2xl 
              shadow-2xl p-6 sm:p-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#212842]">
                  Enquiry Form
                </h2>
                <button onClick={() => setOpenModal(false)}>
                  <X
                    className="text-gray-500 hover:text-black cursor-pointer"
                    size={24}
                  />
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff6a00]"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ee0979]"
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff6a00]"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ee0979] h-24"
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full cursor-pointer bg-gradient-to-r from-[#ff6a00] to-[#ee0979] 
                  text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
