"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Info, Star } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <motion.nav
      className="modern-navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-inner">
        {/* Brand Name */}
        <a href="/" className="brand-logo">
          Qviple
        </a>

        {/* Enquiry Button */}
        <motion.a
          href="/enquiry"
          className="nav-btn"
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Enquiry
        </motion.a>
      </div>
    </motion.nav>
  );
}
