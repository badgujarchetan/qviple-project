"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50 bg-[#212842] shadow-lg transition-all duration-300"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#ee0979] font-extrabold text-2xl sm:text-3xl"
        >
          Qviple
        </a>

        {/* Enquiry Button */}
        <motion.a
          href="/enquiry"
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-r from-[#ff6a00] to-[#ee0979] text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl transition-all whitespace-nowrap text-sm sm:text-base"
        >
          Enquiry
        </motion.a>
        
      </div>
    </motion.nav>
  );
}
