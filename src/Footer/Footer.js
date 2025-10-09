"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import "./Footer.css"
export default function Footer() {
  const AnimatedLink = ({ href, children }) => (
    <li className="group">
      <Link
        href={href}
        className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#f73b20] after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full"
      >
        {children}
      </Link>
    </li>
  );

  return (
    <footer className="foter_section">
      <ul className="footer-grid-section">
        <li>
          <h3 className="commonopacity">Get Started</h3>
          <ul className="space">
            {/* Use the new AnimatedLink component */}
            <AnimatedLink href="/signup">Sign up</AnimatedLink>
            <AnimatedLink href="/login">Login</AnimatedLink>
          </ul>
        </li>

        {/* Discover */}
        <li>
          <h3 className="commonopacity">Discover</h3>
          <ul className="space">
            <AnimatedLink href="/jeton-card">Jeton Card</AnimatedLink>
            <AnimatedLink href="/fees">Fees</AnimatedLink>
          </ul>
        </li>

        {/* Company */}
        <li>
          <h3 className="commonopacity">Company</h3>
          <ul className="space">
            <AnimatedLink href="/about">About</AnimatedLink>
            <AnimatedLink href="/newsroom">Newsroom</AnimatedLink>
            <AnimatedLink href="/partnerships">Partnerships</AnimatedLink>
            <AnimatedLink href="/media-assets">Media Assets</AnimatedLink>
          </ul>
        </li>

        {/* Legal */}
        <li>
          <h3 className="commonopacity">Legal</h3>
          <ul className="space">
            <AnimatedLink href="/cookie-policy">Cookie Policy</AnimatedLink>
            <AnimatedLink href="/privacy-policy">Privacy Policy</AnimatedLink>
            <AnimatedLink href="/terms">Terms and Conditions</AnimatedLink>
            <AnimatedLink href="/disclaimers">Disclaimers</AnimatedLink>
            <AnimatedLink href="/aml-policy">AML Policy</AnimatedLink>
          </ul>
        </li>

        {/* Help */}
        <li>
          <h3 className="commonopacity">Help</h3>
          <ul className="space">
            <AnimatedLink href="/developers">Developers</AnimatedLink>
            <AnimatedLink href="/faq">FAQ</AnimatedLink>
            <AnimatedLink href="/support">Support</AnimatedLink>
            <AnimatedLink href="/release-notes">Release Notes</AnimatedLink>
          </ul>
        </li>
      </ul>

      <div className="footer_middle">
        <div className="store_buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
            target="_blank"
          >
            <img src="/google-play-orange.svg" alt="Google Play" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
            target="_blank"
          >
            <img src="/google-play-orange.svg" alt="Google Play" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
            target="_blank"
          >
            <img src="/google-play-orange.svg" alt="Google Play" />
          </a>
          <a
            href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865"
            target="_blank"
          >
            <img src="/app-store-orange.svg" alt="App Store" />
          </a>
        </div>
        <div className="social_icons">
          {svgIcons.map((item, i) => (
            <a key={i} href={item.href} target="_blank" className="social_link">
              <span className="social_bg"></span>
              <span className="social_icon">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
      <hr className="footer_divider" />
      <div className="footer_credit">
        <h2>
          ©{new Date().getFullYear()} All Rights Reserved by Mithikal Minds Pvt.
          Ltd.
        </h2>
      </div>

      <div className="wordmark">
        <span className="_wordmark">
          <div className="glyphs">
            <div className="name">
              <svg
                width="230"
                height="415"
                viewBox="0 0 230 415"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M117.963 329.079H0.951172V408.049H130.336C140.174 408.293 149.958 406.528 159.09 402.862C168.222 399.196 176.51 393.706 183.448 386.728C190.467 379.688 195.978 371.291 199.644 362.05C203.309 352.81 205.053 342.919 204.769 332.981V0H122.722V324.32C122.722 325.582 122.22 326.792 121.328 327.685C120.435 328.577 119.225 329.079 117.963 329.079Z"></path>
              </svg>
            </div>
            <div className="name">
              <svg
                width="359"
                height="415"
                viewBox="0 0 359 415"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M266.473 98.8964C242.531 85.2262 215.39 78.1536 187.821 78.4004C165.902 78.1669 144.158 82.3118 123.863 90.592C103.567 98.8723 85.1291 111.121 69.6296 126.621C54.1302 142.12 41.8812 160.558 33.601 180.854C25.3207 201.149 21.1758 222.893 21.4093 244.812C21.0118 274.508 28.4997 303.778 43.1089 329.636C57.7181 355.493 78.9256 377.012 104.567 391.996C130.205 406.923 159.393 414.661 189.058 414.396C222.213 414.396 251.879 408.05 277.261 395.93C302.643 383.81 321.68 366.138 333.704 344.056L335.164 341.391L272.724 303.793L271.137 306.681C263.721 319.367 252.545 329.434 239.156 335.489C223.959 342.879 207.257 346.647 190.359 346.499C165.802 346.499 145.02 339.36 128.617 325.241C113.039 311.821 102.854 293.228 98.2854 269.94H340.018L340.526 267.37C342.492 255.844 343.373 244.16 343.159 232.47C343.519 205.368 336.588 178.669 323.092 155.164C309.595 131.66 290.029 112.215 266.442 98.8647L266.473 98.8964ZM130.806 160.575C146.103 149.129 164.821 143.191 183.918 143.728C203.103 143.192 221.874 149.363 236.998 161.178C250.153 171.506 259.477 185.934 263.491 202.17H102.061C107.161 185.69 117.194 171.172 130.806 160.575V160.575Z"></path>
              </svg>
            </div>
            <div className="name">
              <svg
                width="286"
                height="415"
                viewBox="0 0 286 415"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M160.342 0H81.4674V84.8714H14.8394V159.875H81.4674V332.886C81.1904 342.858 82.9718 352.78 86.7002 362.033C90.4286 371.286 96.0241 379.671 103.137 386.665C110.144 393.634 118.484 399.119 127.659 402.794C136.833 406.468 146.654 408.255 156.535 408.049H268.629V332.95H165.101C163.839 332.95 162.629 332.448 161.736 331.556C160.844 330.663 160.342 329.453 160.342 328.19V159.875H268.629V84.8714H160.342V0Z"></path>
              </svg>
            </div>
            <div className="name">
              <svg
                width="366"
                height="415"
                viewBox="0 0 366 415"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M178.61 78.4005C145.352 78.4005 112.84 88.2627 85.187 106.74C57.5338 125.217 35.9809 151.48 23.2536 182.206C10.5262 212.933 7.1961 246.743 13.6844 279.363C20.1728 311.982 36.1882 341.944 59.7053 365.461C83.2224 388.979 113.185 404.994 145.804 411.482C178.423 417.971 212.234 414.641 242.961 401.913C273.687 389.186 299.949 367.633 318.427 339.98C336.904 312.326 346.766 279.815 346.766 246.557C346.766 201.959 329.05 159.188 297.514 127.652C265.979 96.117 223.208 78.4005 178.61 78.4005V78.4005ZM178.61 335.394C161.001 335.426 143.779 330.233 129.123 320.473C114.467 310.713 103.035 296.825 96.2752 280.566C89.515 264.307 87.7298 246.407 91.1458 229.133C94.5618 211.859 103.025 195.987 115.465 183.525C127.905 171.063 143.763 162.571 161.03 159.124C178.298 155.677 196.201 157.43 212.472 164.162C228.743 170.893 242.652 182.3 252.438 196.938C262.224 211.577 267.447 228.79 267.447 246.398C267.456 269.979 258.105 292.6 241.448 309.292C224.792 325.985 202.191 335.384 178.61 335.426V335.394Z"></path>
              </svg>
            </div>
            <div className="name">
              <svg
                width="318"
                height="415"
                viewBox="0 0 318 415"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M296.298 106.192C289.258 99.173 280.861 93.6625 271.62 89.9967C262.38 86.331 252.489 84.587 242.551 84.871H24.3287V408.049H102.569V164.634C102.569 163.372 103.071 162.161 103.963 161.269C104.856 160.376 106.066 159.875 107.328 159.875H233.985C235.247 159.875 236.458 160.376 237.35 161.269C238.243 162.161 238.744 163.372 238.744 164.634V408.049H317.619V159.938C317.903 150.001 316.159 140.11 312.493 130.87C308.827 121.629 303.317 113.232 296.298 106.192V106.192Z"></path>
              </svg>
            </div>
          </div>
        </span>
      </div>
      <p className="footer-paragraph">
        © 2025 | www.jeton.com is owned and operated by LA Orange CY Limited
        (Gladstonos, 116 M. Kyprianou House, 3&4th Floor, 3032, Limassol,
        Cyprus.) LA Orange CY Limited trading as Jeton, is authorised by the
        Central Bank of Cyprus under the Electronic Money Law of 2012 and 2018
        (Law 81(I)/2012) for distributing or redeeming electronic money
        (e-money), with Licence No: 115.1.3.66. LA Orange CY Limited has been
        incorporated in the Republic of Cyprus under the provisions of the
        Companies Law (Cap 113) with registration number HE 424807, with its
        registered office address at Gladstonos, 116 M. Kyprianou House, 3&4th
        Floor, 3032, Limassol, Cyprus. <br></br> <br></br>
        LA Orange Limited, trading as Jeton, is authorised by the Financial
        Conduct Authority under the Electronic Money Regulations 2011 for
        distributing or redeeming electronic money (e-money) and providing
        certain payment services on behalf of an e-money institution, with FCA
        registration number 902088. Company Name: LA ORANGE LIMITED, LEI code:
        8945009645M8PD0AD211, BIC Value: ORAGGB22 (Swift Code). LA Orange
        Limited is registered in England and Wales, Company Number 11535714,
        with its registered office address at The Shard Floor 24/25, 32 London
        Bridge Street, London, SE1 9SG, United Kingdom.<br></br>
        <br></br>
        The Jeton Card Account and Card are issued by Financial House Limited,
        which is authorised and regulated by the Financial Conduct Authority as
        an Electronic Money Institution under Firm Reference Number 902039.
      </p>
      <div className="footer-bottom-card" data-count="2">
        <div className="partnership-card">
          <img
            className="background"
            src="/images/footer1_image.jpg"
            alt="West ham background"
          />
          <div className="gradient"></div>
          <img
            className="badge"
            src="/images/footer1_image-absolute.png"
            alt="West ham badge"
          />
        </div>

        <div className="partnership-card">
          <img
            className="background"
            src="/images/footer2_image.jpg"
            alt="Brand ambassadors"
          />
          <div className="gradient"></div>
          <img
            className="badge"
            src="/images/footer2_image_absolute.png"
            alt="Brand ambassadors badge"
          />
        </div>
      </div>
    </footer>
  );
}

const imges = [
  { src: "/ukas-mangement-system.png", alt: "ukas system management" },
  { src: "/cyber-certified-plus.png", alt: "cyber certified" },
  { src: "/iso-company.png", alt: "iso company" },
  { src: "/euro-banking-association.png", alt: "euro banking association" },
  { src: "/fastest-growing-companies.png", alt: "fastesig companies" },
  { src: "/cyber-certified-plus.png", alt: "cyber certified" },
];

const svgIcons = [
  {
    href: "/instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "/facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "/twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    href: "/twitter",
    icon: (
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
        className="lucide lucide-linkedin-icon lucide-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "/twitter",
    icon: (
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
        className="lucide lucide-youtube-icon lucide-youtube"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
];
