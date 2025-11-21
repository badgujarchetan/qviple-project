"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            <header className="bg-white/90 backdrop-blur-xl h-[4.6rem] rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.1)] flex justify-between items-center px-6 transition-all duration-300">
              
              {/* Logo */}
              <a href="/" className="flex items-center">
                <img src="/images/logo-qviple.svg" alt="Qviple" className="h-9" />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6">
                <ul className="flex gap-10 text-[#001741]">
                  {Object.entries(menuItems).map(([key, items]) => (
                    <li
                      key={key}
                      className="relative group"
                      onMouseEnter={() => setActiveMenu(key)}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <button className="font-semibold text-[1.1rem] hover:text-[#1114b1] transition">
                        {key === "offer" ? "What we offer" : "Who we are"}
                      </button>
                      <span className="block text-xs text-[#8298c0] mt-1">
                        {key === "offer" ? "Our services" : "Our legacy"}
                      </span>

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
                              <a
                                key={title}
                                href={link}
                                className="flex gap-3 p-3 rounded-lg hover:bg-[#1114b120] transition transform hover:-translate-y-1"
                              >
                                <Icon className="text-[#1114b1] w-[22px]" />
                                <div>
                                  <h4 className="font-semibold text-[1rem]">{title}</h4>
                                  <p className="text-sm text-[#6679a4] mt-1">{desc}</p>
                                </div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a className="px-5 h-10 flex items-center justify-center border border-[#2e21de33] rounded-lg hover:bg-[#1114b1] hover:text-white transition cursor-pointer">
                    Login
                  </a>
                  <a className="px-5 h-10 flex items-center justify-center bg-[#1114b1] text-white rounded-lg hover:scale-105 transition shadow-[0_6px_18px_rgba(17,22,177,0.3)] cursor-pointer">
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

            {/* Mobile Dropdown Panel */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden bg-white border border-gray-200 mt-2 rounded-xl shadow-md overflow-hidden"
                >
                  <ul className="flex flex-col p-4 gap-4">
                    {Object.entries(menuItems).map(([key, items]) => (
                      <li key={key}>
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
                          className="flex justify-between w-full font-semibold text-[1.1rem] text-[#001741]"
                        >
                          {key === "offer" ? "What we offer" : "Who we are"}
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
                                <a key={title} href={link} className="flex items-center gap-3 py-2 text-[#1114b1]">
                                  <Icon size={20} />
                                  {title}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}

                    <div className="flex flex-col gap-3 mt-4">
                      <button className="w-full border border-[#2e21de33] py-3 rounded-lg hover:bg-[#1114b1] hover:text-white transition">
                        Login
                      </button>
                      <button className="w-full bg-[#1114b1] text-white py-3 rounded-lg hover:scale-105 transition">
                        Create Account
                      </button>
                    </div>
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
      { icon: LayoutDashboard, title: "Business Banking", desc: "Complete academic management system", link: "/erp-dashbord" },
      { icon: FileText, title: "Multi Currency Account", desc: "Streamlined digital admission process", link: "/multi-currency-account" },
      { icon: GraduationCap, title: "Your Banking Manager", desc: "Track attendance, fees & academics", link: "/your-banking-manger" },
      { icon: Building2, title: "Refer and Earn", desc: "Automate campus operations efficiently", link: "/refer-and-earn" },
      { icon: Building2, title: "Dedicated IBAN", desc: "Automate campus operations efficiently", link: "/dedicated-iban" },
      { icon: Building2, title: "Virtual Card", desc: "Automate campus operations efficiently", link: "/virtual-card" },
    ],

    who: [
      { icon: Users, title: "General Terms", desc: "Empowering education with technology", link: "/general-terms" },
      { icon: Briefcase, title: "Cookies Policy", desc: "Join a team shaping the future", link: "/cookies-policy" },
      { icon: HelpCircle, title: "Terms of Use", desc: "Get help and customer assistance", link: "/term-of-use" },
      { icon: PhoneCall, title: "Information Security Policy", desc: "We’d love to hear from you", link: "/information-security-policy" },
    ]
  };