import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";
import "./about-us.css";
export default function page() {
  return (
    <div className="about-us-section">
      <QvipleNavbar />
      <div className="about-main-container">
        <div className="container-text">
          <h1 className="container-text-h1">General Terms</h1>
        </div>
      </div>
      <div className="container">
        <div className="bg-container">
          <p className="container-p">
            <strong>
              Our agreement for the provision of Jeton Bank Services to you.
            </strong>
            We (Jeton Bank Limited, a company incorporated in the Commonwealth of Dominica with company registration number 2022/C0175 and registered address at 1st Floor, 43 Great George Street, Roseau, Commonwealth of Dominica, <strong>“Jeton Bank”, “We”, “Us”</strong>) will provide you ( <strong>“Customer”</strong> or <strong>“you”</strong>) with our Services in accordance with the terms and conditions of the Jeton Bank Business Agreement ( <strong>“Agreement”</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
