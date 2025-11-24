"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const AnimatedLink = ({ href, children }) => (
    <li className="group">
      <Link
        href={href}
        className="relative inline-block text-sm sm:text-base text-white/90 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-500 group-hover:after:w-full group-hover:text-white"
      >
        {children}
      </Link>
    </li>
  );

  const socialIcons = [
    {
      href: "https://www.instagram.com/qviple/",
      icon: <i className="fa-brands fa-instagram text-lg"></i>,
    },
    {
      href: "https://www.facebook.com/Qviple",
      icon: <i className="fa-brands fa-facebook text-lg"></i>,
    },
    {
      href: "https://x.com/Qviple1r",
      icon: <i className="fa-brands fa-x-twitter text-lg"></i>,
    },
    {
      href: "https://www.linkedin.com/company/qviple/",
      icon: <i className="fa-brands fa-linkedin text-lg"></i>,
    },
    {
      href: "https://www.youtube.com/channel/UCcXbbBOYSMXOFEfyBLDjdyw",
      icon: <i className="fa-brands fa-youtube text-lg"></i>,
    },
  ];

  return (
    <footer className="w-full bg-[#125875] text-white pt-16 pb-10">
      <motion.div
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 sm:px-12"
      >
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
        >
          <div>
            <h3 className="font-semibold text-lg mb-3 opacity-90">
              Get Started
            </h3>
            <ul className="flex flex-col gap-2">
              <AnimatedLink href="/signup">Sign Up</AnimatedLink>
              <AnimatedLink href="/login">Login</AnimatedLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 opacity-90">Discover</h3>
            <ul className="flex flex-col gap-2">
              <AnimatedLink href="/jeton-card">Jeton Card</AnimatedLink>
              <AnimatedLink href="/fees">Fees</AnimatedLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 opacity-90">Company</h3>
            <ul className="flex flex-col gap-2">
              <AnimatedLink href="/about">About Us</AnimatedLink>
              <AnimatedLink href="/newsroom">Newsroom</AnimatedLink>
              <AnimatedLink href="/partnerships">Partnerships</AnimatedLink>
              <AnimatedLink href="/media-assets">Media Kit</AnimatedLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 opacity-90">Legal</h3>
            <ul className="flex flex-col gap-2">
              <AnimatedLink href="/cookie-policy">Cookie Policy</AnimatedLink>
              <AnimatedLink href="/privacy-policy">Privacy Policy</AnimatedLink>
              <AnimatedLink href="/terms-of-use">Terms of Use</AnimatedLink>
              <AnimatedLink href="/disclaimers">Disclaimers</AnimatedLink>
              <AnimatedLink href="/aml-policy">AML Policy</AnimatedLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 opacity-90">Support</h3>
            <ul className="flex flex-col gap-2">
              <AnimatedLink href="/faq">FAQ</AnimatedLink>
              <AnimatedLink href="/support">Contact Support</AnimatedLink>
              <AnimatedLink href="https://admin.qviple.com/">
                Manage Affiliation
              </AnimatedLink>
              <AnimatedLink href="https://developer.qviple.com/">
                Api Documentation
              </AnimatedLink>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-center mt-14 border-t border-white/20 pt-8 gap-6"
        >
          <div className="flex gap-4 flex-wrap">
            <a href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865">
              <img
                src="/images/app-store-neutral.svg"
                className="h-12 hover:opacity-90"
              />
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple">
              <img
                src="/images/google-play-neutral.svg"
                className="h-12 hover:opacity-90"
              />
            </a>
          </div>

          <div className="flex gap-4">
            {socialIcons.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-white/30 transition rounded-full flex items-center justify-center backdrop-blur"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="text-center mt-10 text-white/80 text-sm"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Mithikal Minds Pvt. Ltd
          </span>
          . All Rights Reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
}
