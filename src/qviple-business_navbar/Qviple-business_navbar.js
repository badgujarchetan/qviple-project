"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  GraduationCap,
  Building2,
  HelpCircle,
  Briefcase,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";

export default function QvipleNavbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [loadingRoute, setLoadingRoute] = useState(null);

  // NEW: whether the mobile view is ready to show the mobile menu
  const [isMobileReady, setIsMobileReady] = useState(false);
  const loadTimeoutRef = useRef(null);

  const router = useRouter();

  const handleNav = (href) => {
    setLoadingRoute(href);

    setTimeout(() => {
      router.push(href);
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(!(currentScroll > lastScroll && currentScroll > 80));
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // NEW: manage mobile load state
  useEffect(() => {
    if (!mobileOpen) {
      // ensure mobileReady reset when closed
      setIsMobileReady(false);
      if (loadTimeoutRef.current) {
        window.clearTimeout(loadTimeoutRef.current);
        loadTimeoutRef.current = null;
      }
      return;
    }

    const onLoad = () => {
      setIsMobileReady(true);
      if (loadTimeoutRef.current) {
        window.clearTimeout(loadTimeoutRef.current);
        loadTimeoutRef.current = null;
      }
      window.removeEventListener("load", onLoad);
    };

    if (typeof window !== "undefined" && document.readyState === "complete") {
      // small delay so the overlay is visible briefly (prevents instant flicker)
      loadTimeoutRef.current = window.setTimeout(
        () => setIsMobileReady(true),
        150
      );
    } else {
      window.addEventListener("load", onLoad);

      loadTimeoutRef.current = window.setTimeout(() => {
        setIsMobileReady(true);
        window.removeEventListener("load", onLoad);
        loadTimeoutRef.current = null;
      }, 1500);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      if (loadTimeoutRef.current) {
        window.clearTimeout(loadTimeoutRef.current);
        loadTimeoutRef.current = null;
      }
    };
  }, [mobileOpen]);

  const dropdownAnimation = {
    hidden: { opacity: 0, y: -8, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15 } },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-4 w-full z-[100]"
        >
          <div className="max-w-[1200px] mx-auto px-4">
            <header className="bg-white/90 backdrop-blur-xl h-[4.6rem] rounded-xl shadow-lg flex justify-between items-center px-6 transition-all duration-300">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center active:scale-95 transition"
              >
                <img
                  src="/images/logo-qviple.svg"
                  alt="Qviple"
                  className="h-9"
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-6">
                <ul className="flex gap-5 xl:gap-10 text-[#001741]">
                  {Object.entries(menuItems).map(([key, items]) => (
                    <li
                      key={key}
                      className="relative group"
                      onMouseEnter={() => setActiveMenu(key)}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <button className="group font-semibold text-[1.1rem] hover:text-[#1114b1] transition flex items-center gap-1 active:scale-95">
                        {key === "offer" ? "What we offer" : "Who we are"}
                        <motion.span
                          animate={{ rotate: activeMenu === key ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-[14px]"
                        >
                          ▼
                        </motion.span>
                      </button>

                      <span className="block text-xs text-[#8298c0] mt-1">
                        {key === "offer" ? "Our services" : "Our legacy"}
                      </span>

                      {/* Desktop Dropdown */}
                      <AnimatePresence>
                        {activeMenu === key && (
                          <motion.div
                            variants={dropdownAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-16 left-0 min-w-[25rem] bg-white shadow-xl rounded-xl p-4 grid grid-cols-2 gap-4 border border-gray-100"
                          >
                            {items.map(({ icon: Icon, title, desc, link }) => (
                              <button
                                key={title}
                                onClick={() => handleNav(link)}
                                className="flex gap-3 p-3 rounded-lg hover:bg-[#1114b120] transition transform hover:-translate-y-1 active:scale-95 text-left"
                              >
                                <Icon className="text-[#1114b1] w-[22px]" />
                                <div>
                                  <h4 className="font-semibold text-[1rem]">
                                    {loadingRoute === link
                                      ? "Loading..."
                                      : title}
                                  </h4>
                                  <p className="text-sm text-[#6679a4] mt-1">
                                    {desc}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      handleNav("https://qvipleweb.web.app/#/login")
                    }
                    className="px-5 h-10 flex items-center justify-center border border-[#2e21de33] rounded-lg hover:bg-[#1114b1] hover:text-white transition cursor-pointer active:scale-95"
                  >
                    Login
                  </button>

                  <button className="px-5 h-10 flex items-center justify-center bg-[#1114b1] text-white rounded-lg hover:scale-105 transition shadow-lg cursor-pointer active:scale-95">
                    Create Account
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden active:scale-90"
                onClick={() => {
                  // toggle mobile open; when opening, we will show loading overlay until ready
                  setMobileOpen((s) => !s);
                }}
                aria-expanded={mobileOpen}
                aria-controls="qviple-mobile-menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </header>

          
            <AnimatePresence>
              {mobileOpen && (
             
                <motion.div
                  id="qviple-mobile-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="lg:hidden relative"
                >
                  
                  {!isMobileReady && (
                    <div
                      className="absolute inset-0 z-40 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-6"
                      aria-live="polite"
                    >
                      <div className="flex flex-col items-center gap-3">
                        {/* simple accessible spinner */}
                        <svg
                          className="animate-spin w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          role="img"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        <div className="text-sm font-medium text-[#001741]">
                          Loading mobile view...
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actual mobile menu: only render when ready */}
                  {isMobileReady && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white border border-gray-200 mt-2 rounded-xl shadow-md overflow-hidden z-30"
                    >
                      <ul className="flex flex-col p-4 gap-4">
                        {Object.entries(menuItems).map(([key, items]) => (
                          <li key={key}>
                            <button
                              onClick={() =>
                                setMobileDropdown(
                                  mobileDropdown === key ? null : key
                                )
                              }
                              className="flex justify-between w-full font-semibold text-base md:text-[1.1rem] text-[#001741] active:scale-95"
                            >
                              {key === "offer" ? "What we offer" : "Who we are"}
                              <motion.span
                                animate={{
                                  rotate: mobileDropdown === key ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                ▼
                              </motion.span>
                            </button>

                            <AnimatePresence>
                              {mobileDropdown === key && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="pl-4 mt-3 flex flex-col gap-3"
                                >
                                  {items.map(({ icon: Icon, title, link }) => (
                                    <button
                                      key={title}
                                      onClick={() => handleNav(link)}
                                      className="flex items-center gap-3 py-2 text-[#1114b1] active:scale-95 transition"
                                    >
                                      <Icon size={20} />
                                      {loadingRoute === link
                                        ? "Loading..."
                                        : title}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </li>
                        ))}

                        <button
                          onClick={() =>
                            handleNav("https://qvipleweb.web.app/#/login")
                          }
                          className="font-bold text-black py-2 hover:scale-105 transition active:scale-95"
                        >
                          Login
                        </button>
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

const menuItems = {
  offer: [
    {
      icon: LayoutDashboard,
      title: "Business Banking",
      desc: "Complete banking system",
      link: "/erp-dashbord",
    },
    {
      icon: FileText,
      title: "Multi Currency Account",
      desc: "Account with multiple currencies",
      link: "/multi-currency-account",
    },
    {
      icon: GraduationCap,
      title: "Your Banking Manager",
      desc: "Handle everything easily",
      link: "/your-banking-manger",
    },
    {
      icon: Building2,
      title: "Refer and Earn",
      desc: "Earn rewards",
      link: "/refer-and-earn",
    },
    {
      icon: Building2,
      title: "Dedicated IBAN",
      desc: "Custom IBAN solution",
      link: "/dedicated-iban",
    },
    {
      icon: Building2,
      title: "Virtual Card",
      desc: "Secure online payments",
      link: "/virtual-card",
    },
  ],

  who: [
    {
      icon: Users,
      title: "General Terms",
      desc: "Understand rules",
      link: "/general-terms",
    },
    {
      icon: Briefcase,
      title: "Cookies Policy",
      desc: "We use cookies",
      link: "/cookies-policy",
    },
    {
      icon: HelpCircle,
      title: "Terms of Use",
      desc: "Legal terms",
      link: "/term-of-use",
    },
    {
      icon: PhoneCall,
      title: "Information Security Policy",
      desc: "Security protection",
      link: "/information-security-policy",
    },
  ],
};
