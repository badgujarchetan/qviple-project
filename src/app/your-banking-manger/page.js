import React from "react";
import "./your-banking-manger.css";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
export default function page() {
  return (
    <div className="your-banking-manger-section">
      <QvipleNavbar />
      <div className="account-bg">
        <img
          alt="Hero Background"
          fetchPriority="high"
          loading="eager"
          width="2560"
          height="880"
          decoding="async"
          data-nimg="1"
          className="account-img"
          style={{ color: "transparent" }}
          src="/images/grow-hero-bg.webp"
        ></img>
        <div className="account-container">
          <div className="account-main-contend">
            <div>
              <h1 className="account-h1">
                Your Digital <br></br> Partner in Banking
              </h1>
              <p className="account-p">
                Your Easy payment and tracking system-fast and completely safe!
              </p>
              <a
                className="account-a"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Now
              </a>
             
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
