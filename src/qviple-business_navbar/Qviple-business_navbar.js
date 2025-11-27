"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

  // Navigation animation logic
  const [navFx, setNavFx] = useState(false);
  const router = useRouter();

  const goTo = (link) => {
    setNavFx(true);
    setTimeout(() => router.push(link), 200);
    setTimeout(() => setNavFx(false), 600);
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
              <Link href="/" className="flex items-center">
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
                      <button className="group font-semibold text-[1.1rem] hover:text-[#1114b1] transition flex items-center gap-1">
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
                                onClick={() => goTo(link)}
                                className={`nav-click flex gap-3 w-full text-left p-3 rounded-lg hover:bg-[#1114b120] transition transform hover:-translate-y-1 ${
                                  navFx ? "page-transition" : ""
                                }`}
                              >
                                <Icon className="text-[#1114b1] w-[22px]" />
                                <div>
                                  <h4 className="font-semibold text-[1rem]">
                                    {title}
                                  </h4>
                                  <p className="text-sm text-[#6679a4] mt-1">
                                    {desc}
                                  </p>
                                </div>

                                {navFx && (
                                  <div className="ml-auto w-3 h-3 border-2 border-[#1114b1] border-t-transparent animate-spin rounded-full"></div>
                                )}
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
                  <a
                    href="https://qvipleweb.web.app/#/login"
                    className="px-5 h-10 flex items-center justify-center border border-[#2e21de33] rounded-lg hover:bg-[#1114b1] hover:text-white transition cursor-pointer"
                  >
                    Login
                  </a>
                  <a className="px-5 h-10 flex items-center justify-center bg-[#1114b1] text-white rounded-lg hover:scale-105 transition shadow-lg cursor-pointer">
                    Create Account
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="lg:hidden bg-white border border-gray-200 mt-2 rounded-xl shadow-md overflow-hidden"
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
                          className="flex justify-between w-full font-semibold text-base md:text-[1.1rem] text-[#001741]"
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
                                  onClick={() => goTo(link)}
                                  className={`nav-click flex items-center gap-3 py-2 w-full text-left text-[#1114b1] ${
                                    navFx ? "page-transition" : ""
                                  }`}
                                >
                                  <Icon size={20} />
                                  {title}

                                  {navFx && (
                                    <span className="ml-auto w-3 h-3 border-2 border-[#1114b1] border-t-transparent animate-spin rounded-full"></span>
                                  )}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
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
      desc: "Complete academic management system",
      link: "/erp-dashbord",
    },
    {
      icon: FileText,
      title: "Multi Currency Account",
      desc: "Streamlined digital admission process",
      link: "/multi-currency-account",
    },
    {
      icon: GraduationCap,
      title: "Your Banking Manager",
      desc: "Track attendance, fees & academics",
      link: "/your-banking-manger",
    },
    {
      icon: Building2,
      title: "Refer and Earn",
      desc: "Automate campus operations efficiently",
      link: "/refer-and-earn",
    },
    {
      icon: Building2,
      title: "Dedicated IBAN",
      desc: "Automate campus operations efficiently",
      link: "/dedicated-iban",
    },
    {
      icon: Building2,
      title: "Virtual Card",
      desc: "Automate campus operations efficiently",
      link: "/virtual-card",
    },
  ],

  who: [
    {
      icon: Users,
      title: "General Terms",
      desc: "Empowering education with technology",
      link: "/general-terms",
    },
    {
      icon: Briefcase,
      title: "Cookies Policy",
      desc: "Join a team shaping the future",
      link: "/cookies-policy",
    },
    {
      icon: HelpCircle,
      title: "Terms of Use",
      desc: "Get help and customer assistance",
      link: "/term-of-use",
    },
    {
      icon: PhoneCall,
      title: "Information Security Policy",
      desc: "We’d love to hear from you",
      link: "/information-security-policy",
    },
  ],
};
