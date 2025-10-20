import React from "react";
import "./multi-currency-account.css";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
export default function page() {
  return (
    <div className="multi-currency-main">
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
                Multi Currency <br></br> Account
              </h1>
              <p className="account-p">
                Manage your finances accross multiple currencies
              </p>
              <a
                className="account-a"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
      <picture className="account-picture">
        <img
          alt="Your Digital Partner in Banking"
          className="account-imgss"
          loading="eager"
          width="973"
          height="732"
          src="/images/jtn-ui-2.webp"
        ></img>
      </picture>
    
    </div>
  );
}
