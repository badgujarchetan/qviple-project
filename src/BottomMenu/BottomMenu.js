// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Menu } from "lucide-react";

// export default function BottomMenu() {
//   const [open, setOpen] = useState(false);

//   const menuSections = [
//     {
//       title: "Main",
//       items: [
//         { label: "Homepage", img: "/menu/home.png", href: "/" },
//       ],
//     },
//     {
//       title: "Personal",
//       items: [
//         { label: "Jeton Card", img: "/menu/card.png", href: "/jeton-card" },
//         { label: "Fees", img: "/menu/fees.png", href: "/fees" },
//         { label: "Business", img: "/menu/business.png", href: "/business" },
//       ],
//     },
//     {
//       title: "Company",
//       items: [
//         { label: "About", img: "/menu/about.png", href: "/about" },
//         { label: "Newsroom", img: "/menu/newsroom.png", href: "/newsroom" },
//         { label: "Partnerships", img: "/menu/partner.png", href: "/partnerships" },
//         { label: "Media Assets", img: "/menu/media.png", href: "/media" },
//         { label: "Release Notes", img: "/menu/notes.png", href: "/release-notes" },
//       ],
//     },
//   ];

//   return (
//     <>
//       {/* Floating Menu Button */}
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setOpen(true)}
//         className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#FF5733] to-[#FF764A] rounded-full shadow-lg flex items-center gap-2"
//       >
//         <Menu size={16} /> Menu
//       </motion.button>

//       {/* Drawer */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-gradient-to-b from-[#FF5733] to-[#FF764A] text-white z-50 flex flex-col overflow-y-auto"
//           >
//             <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
//               <h2 className="text-lg font-semibold">Menu</h2>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <div className="flex flex-col gap-6 px-6 py-4">
//               {menuSections.map((section, idx) => (
//                 <div key={idx}>
//                   <h3 className="text-sm uppercase font-semibold text-white/70 mb-2">
//                     {section.title}
//                   </h3>
//                   <ul className="flex flex-col gap-2">
//                     {section.items.map((item, i) => (
//                       <motion.li
//                         key={i}
//                         whileHover={{ scale: 1.03, x: 4 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         <a
//                           href={item.href}
//                           className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
//                         >
//                           <div className="w-10 h-10 bg-white/20 rounded-xl overflow-hidden flex items-center justify-center">
//                             {/* Placeholder image */}
//                             <img
//                               src={item.img}
//                               alt={item.label}
//                               className="w-full h-full object-cover"
//                               onError={(e) =>
//                                 (e.target.src =
//                                   "https://via.placeholder.com/40x40.png?text=•")
//                               }
//                             />
//                           </div>
//                           <span className="font-medium">{item.label}</span>
//                         </a>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* Bottom Button */}
//             <div className="px-6 py-4 border-t border-white/20 text-center">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="mx-auto bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm font-medium transition"
//               >
//                 Close Menu
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

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
      transition={{ duration: 0.8, ease: "easeInOut" }}
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
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 22,
                      }}
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
    href: "/qviple-business",
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