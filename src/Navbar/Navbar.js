"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="_navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Brand / Logo */}
        <a href="/" className="brand-name">
          QVIPLE
        </a>

        {/* Desktop Buttons */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {/* <a href="#about" className="nav-item">
            About
          </a>
          <a href="#features" className="nav-item">
            Features
          </a>
          <a href="#contact" className="nav-item">
            Contact
          </a> */}
          <motion.a
            href="/enquiry"
            className="enquiry-btn"
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Enquiry
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </motion.nav>
  );
}
