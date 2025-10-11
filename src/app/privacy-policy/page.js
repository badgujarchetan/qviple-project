"use client";
import React from "react";
import Link from "next/link";
import "./privacy_policy.css";
import Navbar from "@/Navbar/Navbar";

export default function PrivacyPage() {
  const title = "Privacy Policy";

  return (
    <>
    <Navbar />
    <div className="conted_privacy_page">
      <header className="privacy-section">
        <div className="privacy-bg"></div>

        <div className="privacy-container">
          <div className="privacy-left">
            <h1 className="privacy-title">
              {title.split("").map((char, i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${i * 0.05}s` }}
                  className="fade-in-up"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          <div className="privacy-right fade-in-right">
            <p>
              Please review our{" "}
       
                Privacy policy
             
              to understand how we collect, use, and protect your data at{" "}
              <strong>Qviple</strong>.
            </p>
          </div>
        </div>
      </header>

      <main className="privacy-content">
        <div className="privacy-wrapper">
          <header className="privacy-header">
            <h1>Qviple Privacy Policy</h1>
            <p>
              Qviple (“we,” “our,” or “us”) is committed to protecting your
              privacy. This policy explains how your personal information is
              collected, used, and disclosed by Qviple.
            </p>
          </header>

          <section className="policy-sections">
            <details open>
              <summary>
                <h2>What Information Do We Collect?</h2>
              </summary>
              <p>
                We collect personal data such as your{" "}
                <strong>
                  name, email, phone number, billing address, job title
                </strong>
                , and <strong>device information</strong> to enhance your
                experience and provide secure services.
              </p>
            </details>

            <details open>
              <summary>
                <h2>How Do We Use Your Information?</h2>
              </summary>
              <ul>
                <li>
                  To <strong>personalize your experience</strong> on our
                  platform.
                </li>
                <li>
                  To <strong>improve app and website functionality</strong>.
                </li>
                <li>
                  To <strong>enhance customer service</strong>.
                </li>
                <li>
                  To <strong>process secure transactions</strong>.
                </li>
                <li>
                  To send <strong>updates and promotions</strong>.
                </li>
              </ul>
            </details>

            <details>
              <summary>
                <h2>Data Sharing & Third Parties</h2>
              </summary>
              <p>
                We may share limited data with{" "}
                <strong>trusted third-party partners</strong> such as
                advertisers, payment processors, and analytics providers to
                improve our service.{" "}
                <strong>Your personal data is never sold or misused.</strong>
              </p>
            </details>

            <details>
              <summary>
                <h2>Data Security</h2>
              </summary>
              <p>
                We use <strong>SSL encryption, secure servers,</strong> and{" "}
                <strong>restricted access</strong> to protect your data. While
                we strive for maximum security, no online method is 100% secure.
              </p>
            </details>

            <details>
              <summary>
                <h2>Cookies & Tracking Technologies</h2>
              </summary>
              <p>
                We use <strong>cookies</strong> to improve user experience,
                remember preferences, and enable remarketing. You can{" "}
                <strong>control or disable cookies</strong> through your browser
                settings.
              </p>
            </details>

            <details>
              <summary>
                <h2>Children’s Privacy & Safety</h2>
              </summary>
              <p>
                We comply with POCSO Act & IT Act Sec 67B. Our app uses{" "}
                <strong>AI moderation and reporting</strong>
                to prevent CSAM. Violations are immediately reported to
                authorities.
              </p>
            </details>

            <details>
              <summary>
                <h2>Definitions and Key Terms</h2>
              </summary>
              <ul>
                <li>
                  <strong>Cookie:</strong> Small data stored in your browser for
                  preferences and analytics.
                </li>
                <li>
                  <strong>Company:</strong> Mithkal Minds Pvt. Ltd., H.N.1860,
                  Udyog Bhavan, Sinnar, Nashik-422103.
                </li>
                <li>
                  <strong>Country:</strong> India.
                </li>
                <li>
                  <strong>Device:</strong> Any internet-connected device (phone,
                  tablet, or computer).
                </li>
                <li>
                  <strong>Personal Data:</strong> Information that identifies an
                  individual.
                </li>
              </ul>
            </details>

            <details>
              <summary>
                <h2>International Data Transfers</h2>
              </summary>
              <p>
                Qviple operates globally. Your information may be transferred
                internationally. By using our services, you consent to such
                transfers.
              </p>
            </details>
          </section>

          {/* <hr className="section-divider" /> */}

          <footer className="privacy-footer">
            <h2>Changes to This Policy & Contact</h2>

            <div className="policy-updates">
              <h3>Policy Updates</h3>
              <p>
                We may periodically update our Privacy Policy. Updates will be
                communicated via email or through the app.
              </p>
            </div>

            <div className="contact-us">
              <h3>Contact Us</h3>
              <p>
                If you have questions, reach out at {" "}:{" "}
                <a href="mailto:connect@qviple.com" className="privacy-link">
                  <strong>connect@qviple.com</strong>
                </a>
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
    </>
  );
  
}
