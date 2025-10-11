import React from 'react'
import {motion} from "framer-motion"
import "./Navbar.css"
export default function Navbar() {
  return (
    <nav
        className={"_navbar"}
        initial={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        }}
        animate={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div className="g-row-full flex items-center justify-between">
          <a
            href="/"
            className="homepage-link relative overflow-hidden"
            aria-label="Homepage"
          >
            <span className="_wordmark" data-tone="neutral">
              <div className="glyphs">
                <div className="glyph">
                  <span className="brand_name">QVIPLE</span>
                </div>
              </div>
              <svg
                className="spacer"
                width="1558"
                height="415"
                aria-hidden="true"
              />
            </span>
          </a>

          <div className="lang-cta-wrapper">
            {/* <div className="_dropdown _language-select">
              <button className=" _button flex items-center justify-center ">
                {/* <span className="_icon"></span> */}
                {/* <span className="ml-1">EN</span> */}
                {/* <span className="_icon chevron">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down-icon lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span> */}
              {/* </button> */}
            {/* </div>  */}

            <div className="ctas ">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                href="/login"
                className="_button"
                data-variant="outline"
              >
                Login
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                href="/signup"
                className="_button"
                data-variant="primary"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
  )
}



