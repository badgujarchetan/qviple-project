"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill all fields!", { position: "top-right" });
      return;
    }

    toast.success("Form Submitted Successfully ", { position: "top-right" });

    // Reset Form and Close Popup
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setOpenModal(false), 1200);
  };

  return (
    <>
      <ToastContainer />

      {/* NAVBAR */}
      <motion.nav
        className="w-full fixed top-0 left-0 z-50 bg-[#212842] shadow-md"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#ee0979] font-extrabold text-2xl sm:text-3xl"
          >
            Qviple
          </a>

          <motion.button
            onClick={() => setOpenModal(true)}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className=" cursor-pointer bg-gradient-to-r from-[#ff6a00] to-[#ee0979] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition-all text-sm sm:text-base"
          >
            Enquiry
          </motion.button>
        </div>
      </motion.nav>

      {/* MODAL */}
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
                  //  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-sm "
                  // focus:ring-2 focus:ring-[#ff6a00]
                />

                <input
                  type="email"
                  name="email"
                  //  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-sm"
                />

                <input
                  type="tel"
                  name="phone"
                  //  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-sm"
                />

                <textarea
                  name="message"
                  //  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-3 border rounded-sm h-24"
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
    </>
  );
}
