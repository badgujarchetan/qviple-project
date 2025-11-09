import React from "react";
import "./cookies-policy.css";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
export default function page() {
  return (
    <div className="cookies-section">
      <QvipleNavbar />
      <div className="hero-cookis">
        <div className="hero-container">
          <h1 className="h1">Cookies Policy</h1>
        </div>
      </div>
      <div className="main-conatiner">
        <div className="bg">
          <h3 className="h3">Necessary Cookies</h3>
          <p className="bg-p">
            We need to use these cookies to make our website work. These are all
            necessary for us to function and cannot be switched off in our
            systems. They are for setting responses to actions made by you, such
            as setting your privacy preferences, logging in or filling forms.
          </p>
          <h3 className="jeton-bank-h3">Jeton Bank Limited Cookies Policy</h3>
          <p className="bg-p">
            These cookies allow us to count visits and traffic sources so we can
            measure and improve the performance of our site. All information
            that our cookies collect is aggregated and anonymous.
          </p>
          <p className="bg-p">
            These also allow us to see the pages and links you have visited so
            we can prevent relevant ads. We don't store directly personal
            information but identify your browser and internet device. If you do
            not allow these cookies, you will experience less targeted
            advertising.
          </p>
        </div>
      </div>
    </div>
  );
}
