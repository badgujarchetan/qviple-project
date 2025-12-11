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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-50 px-[5%] py-6 flex justify-between items-center max-w-[1500px] mx-auto">
        <a
          href="/"
          className="text-[2.2rem] font-extrabold bg-gradient-to-r from-[#ff6a00] to-[#ee0979] bg-clip-text text-transparent"
        >
          Qviple
        </a>
        {/* <img
          className="h-[50px]] w-[100px]"
          src="/images/logo-qviple.svg "
        ></img> */}

        <motion.button
          onClick={() => setOpenModal(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-[#ff6a00] to-[#ee0979] cursor-pointer
          text-white px-6 py-2.5 rounded-full font-semibold shadow-xl hover:shadow-2xl"
        >
          Enquiry
        </motion.button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-full">
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-700`}
          style={{ transform: hover ? "scale(1.08)" : "scale(1)" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <video
            className={`w-full h-full object-cover transition-opacity duration-[1.4s] ${
              videoLoaded ? "opacity-100" : "opacity-60"
            }`}
            src="/images/animated video.mp4"
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
          ></video>
        </div>

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-20 w-full min-h-screen flex justify-center items-center px-[5%]">
          <div className="max-w-[1500px] w-full flex flex-wrap items-center justify-between text-white gap-10 pt-28 pb-20">
            {/* LEFT CONTENT */}
            <div className="flex-1">
              <h2
                className="font-bold leading-[1.1] tracking-tight
              text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.6rem]"
              >
                One App
                <br />
                for all needs
              </h2>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col gap-6 w-full md:max-w-[320px]">
              <p className="text-lg md:text-xl font-medium">
                Single account for all your payments.
              </p>

              <div className="flex gap-5">
                <a
                  href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865"
                  target="_blank"
                  className="relative w-[148px] h-[44px] border border-white/40 rounded-md hover:scale-105 transition-all"
                >
                  <img
                    src="/images/app-store-neutral.svg"
                    className="absolute inset-0 w-full h-full"
                  />
                </a>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
                  target="_blank"
                  className="relative w-[148px] h-[44px] border border-white/40 rounded-md hover:scale-105 transition-all"
                >
                  <img
                    src="/images/google-play-neutral.svg"
                    className="absolute inset-0 w-full h-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenModal(false)}
            />

            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 
              bg-white w-[90%] sm:w-[450px] rounded-2xl shadow-2xl p-7"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#212842]">
                  Enquiry Form
                </h2>
                <button onClick={() => setOpenModal(false)}>
                  <X
                    size={24}
                    className="text-gray-500 hover:text-black cursor-pointer"
                  />
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-md"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-md"
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-md"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-3 border rounded-md h-24"
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full cursor-pointer bg-gradient-to-r from-[#ff6a00] to-[#ee0979] text-white py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ToastContainer />
    </div>
  );
}
