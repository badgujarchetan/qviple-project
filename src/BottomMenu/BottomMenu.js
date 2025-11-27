"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Info, ChevronDown } from "lucide-react";
import Link from "next/link";
import "./BottomMenu.css";
export default function BottomMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        className="fixed bottom-8 w-full flex justify-center z-50 pointer-events-none"
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.ul
          className="menu-bar flex items-center gap-5 px-6 py-2 h-14 bg-[#191970] border border-white/25 backdrop-blur-xl rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.25),0_0_20px_rgba(30,58,138,0.5)] pointer-events-auto transition-all"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
        >
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative flex items-center justify-center text-center"
              onMouseEnter={() => item.drawer && setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.drawer ? (
                <>
                  <button
                    className="flex items-center gap-2 px-2 py-1 rounded-full text-sm font-medium text-white bg-transparent hover:bg-gradient-to-br hover:from-[#1e3a8a] hover:to-[#2563eb] hover:shadow-[0_0_12px_rgba(37,99,235,0.8)] transform-gpu hover:-translate-y-0.5 active:scale-95 transition-all pointer-events-auto"
                    aria-haspopup="menu"
                    aria-expanded={hoveredIndex === idx}
                    type="button"
                  >
                    <span className="inline-flex">
                      {IconMap[item.iconName]}
                    </span>
                    <span className="whitespace-nowrap">{item.label}</span>

                    {/* <motion.span
                      className="inline-flex items-center"
                      animate={{ rotate: hoveredIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span> */}
                  </button>

                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.div
                        className="menu-drawer absolute bottom-14 left-1/2 -translate-x-1/2 bg-gradient-to-b from-white to-[#e0f0ff] rounded-lg shadow-2xl p-3 min-w-[180px] z-50 backdrop-blur-md pointer-events-auto transform-origin-bottom "
                        style={{}}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 22,
                        }}
                      >
                        <ul className="m-0 p-0 list-none">
                          {item.drawer.map((sub, sIdx) => (
                            <motion.li
                              key={sIdx}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: sIdx * 0.05 }}
                              className="my-2"
                            >
                              {sub.external ? (
                                <Link
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="drawer-link flex items-center gap-3 text-[#0a192f] no-underline font-medium text-sm hover:text-[#2563eb] transform-gpu hover:translate-x-1 transition-all"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] transition-colors" />
                                  <span>{sub.label}</span>
                                </Link>
                              ) : (
                                <Link
                                  href={sub.href}
                                  className="drawer-link flex items-center gap-3 text-[#0a192f] no-underline font-medium text-sm hover:text-[#2563eb] transform-gpu hover:translate-x-1 transition-all"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] transition-colors" />
                                  <span>{sub.label}</span>
                                </Link>
                              )}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <>
                  {item.external ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-2 py-1 rounded-full text-sm font-medium text-white bg-transparent hover:bg-gradient-to-br hover:from-[#1e3a8a] hover:to-[#2563eb] hover:shadow-[0_0_12px_rgba(37,99,235,0.8)] transform-gpu hover:-translate-y-0.5 active:scale-95 transition-all pointer-events-auto no-underline"
                    >
                      <span className="inline-flex">
                        {IconMap[item.iconName]}
                      </span>
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-2 py-1 rounded-full text-sm font-medium text-white bg-transparent hover:bg-gradient-to-br hover:from-[#1e3a8a] hover:to-[#2563eb] hover:shadow-[0_0_12px_rgba(37,99,235,0.8)] transform-gpu hover:-translate-y-0.5 active:scale-95 transition-all pointer-events-auto no-underline"
                    >
                      <span className="inline-flex">
                        {IconMap[item.iconName]}
                      </span>
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  )}
                </>
              )}
            </li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
}

const IconMap = {
  Home: <Home size={18} />,
  Personal: <User size={18} />,
  Business: <Briefcase size={18} />,
  Company: <Info size={18} />,
};

const menuItems = [
  { label: "Home", href: "/", iconName: "Home" },
  {
    label: "Company",
    iconName: "Company",
    drawer: [
      { label: "About", href: "/about" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
  {
    label: "Partnerships",
    iconName: "Business",
    href: "/qviple-business",
    external: true,
  },
];
