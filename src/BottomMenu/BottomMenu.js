"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Info, ChevronDown } from "lucide-react";
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="_menu"
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.ul
        className="menu-bar"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="menu-item"
            onMouseEnter={() => item.drawer && setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.drawer ? (
              <>
                <button className="_menu-button">
                  {IconMap[item.iconName]}
                  <span>{item.label}</span>
                  <motion.span
                    className="_icon"
                    animate={{ rotate: hoveredIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      className="_menu-drawer"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    >
                      <ul>
                        {item.drawer.map((sub, sIdx) => (
                          <motion.li
                            key={sIdx}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: sIdx * 0.05 }}
                          >
                            <a
                              href={sub.href}
                              className="drawer-link"
                              target={sub.external ? "_blank" : "_self"}
                              rel={sub.external ? "noopener noreferrer" : ""}
                            >
                              <div className="dot" />
                              <div className="label">{sub.label}</div>
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <a
                href={item.href}
                className="_menu-button"
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
              >
                {IconMap[item.iconName]}
                <span>{item.label}</span>
              </a>
            )}
          </li>
        ))}
      </motion.ul>
    </motion.nav>
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
    label: "Personal",
    iconName: "Personal",
    drawer: [
      { label: "Jeton Card", href: "/jeton-card" },
      { label: "Fees", href: "/fees" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    label: "Business",
    iconName: "Business",
    href: "https://www.jetonbank.com",
    external: true,
  },
  {
    label: "Company",
    iconName: "Company",
    drawer: [
      { label: "About", href: "/about" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Partnerships", href: "/partnerships" },
    ],
  },
];
