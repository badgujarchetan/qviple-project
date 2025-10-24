"use client";
import React, { useState, useEffect } from "react";
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
  Link,
} from "lucide-react";
import "./qviple-business-navbar.css"

export default function QvipleNavbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="main_container"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="custom_container">
            <header className="header">
              <a href="/">
                <img
                  className="qviple_logo"
                  src="/images/logo-qviple.svg"
                  alt="qviple-logo"
                />
              </a>

              <div className="menu_conatiner">
                <ul className="menu_conatiner-ul">
                  {/* What we offer */}
                  <li
                    className="dropdown"
                    onMouseEnter={() => setActiveMenu("offer")}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <a href="#">What we offer</a>
                    <span className="sub-set">Our services</span>

                    <AnimatePresence>
                      {activeMenu === "offer" && (
                        <motion.div
                          className="dropdown-menu glass-bg"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="dropdown-grid">
                            <div className="dropdown-item">
                              <LayoutDashboard className="icon" />
                              <div>
                                <a href="/erp-dashbord">
                                <h4>Business Banking</h4>
                                <p>Complete academic management system</p> </a>
                               
                              </div>
                            </div>
                            <div className="dropdown-item">
                              <FileText className="icon" />
                              <div>
                                <a href="/multi-currency-account">
                                <h4>Multi Currency Account</h4>
                                <p>Streamlined digital admission process</p></a>
                              </div>
                            </div>
                            <div className="dropdown-item">
                              <GraduationCap className="icon" />
                              <div>
                                <h4>Student Panel</h4>
                                <p>Track attendance, fees & academics</p>
                              </div>
                            </div>
                            <div className="dropdown-item">
                              <Building2 className="icon" />
                              <div>
                                <h4>College Management</h4>
                                <p>Automate campus operations efficiently</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Who we are */}
                  <li
                    className="dropdown"
                    onMouseEnter={() => setActiveMenu("who")}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <a href="#">Who we are</a>
                    <span className="sub-set">Our legacy</span>

                    <AnimatePresence>
                      {activeMenu === "who" && (
                        <motion.div
                          className="dropdown-menu glass-bg"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="dropdown-grid">
                            <div className="dropdown-item">
                              <Users className="icon" />
                              <div>
                                <h4>About Us</h4>
                                <p>Empowering education with technology</p>
                              </div>
                            </div>
                            <div className="dropdown-item">
                              <Briefcase className="icon" />
                              <div>
                                <h4>Careers</h4>
                                <p>Join a team shaping the future</p>
                              </div>
                            </div>
                            <div className="dropdown-item">
                              <HelpCircle className="icon" />
                              <div>
                                <h4>Support</h4>
                                <p>Get help and customer assistance</p>
                              </div>
                            </div>
                            <div className="dropdown-item">
                              <PhoneCall className="icon" />
                              <div>
                                <h4>Contact</h4>
                                <p>We’d love to hear from you</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>

                <div className="buttons">
                  <a href="/" className="btn-login">Login</a>
                  <a href="/" className="btn-create">Create Account</a>
                </div>
              </div>
            </header>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
