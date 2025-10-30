import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";
import "./dedicatd-iban.css";
export default function page() {
  return (
    <div className="dedicatd-iban-section">
      <QvipleNavbar />
      <div className="dedicatd-iban-container">
        <img
          alt="Hero Background"
          fetchPriority="high"
          loading="eager"
          width="2560"
          height="640"
          decoding="async"
          data-nimg="1"
          className="private-hero-img"
          style={{ color: "transparent" }}
          src="/images/private-hero-pattern.webp"
        ></img>
        <div className="container">
          <div className="cont-div">
            <div className="padding-top-div">
              <h1 className="cont-h1">
                Get a dedicated SEPA IBAN account for your business
              </h1>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#131E3D"
                    d="M7.5 11h2v2h-2v-2Zm14-5v14c0 1.1-.9 2-2 2h-14a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2Zm-16 2h14V6h-14v2Zm14 12V10h-14v10h14Zm-4-7h2v-2h-2v2Zm-4 0h2v-2h-2v2Z"
                  ></path>
                </svg>
                Schedule Now
              </a>
            </div>
            <picture className="img-right-section">
              <img
                alt="dedicated IBAN"
                loading="eager"
                width="606"
                height="670"
                decoding="async"
                data-nimg="1"
                className="dedicated-hero-img"
                style={{ color: "transparent" }}
                src="/images/dedicated-hero.webp"
              ></img>
            </picture>
          </div>
        </div>
      </div>
      <div className="back-img"></div>
      <div className="container-blue-section">
        <div className="blue-section">
          <div className="text-white-section">
            <h2 className="text-white-h2">
              Get a Euro IBAN for your company’s tradings
            </h2>
            <p className="text-white-p">
              Creating a private IBAN account for your business in an ordinary
              bank may be more difficult and troublesome than you imagine. It is
              both a time consuming and a complex process.
              <br></br>
              This is where we step in as Jetonbank. We offer you the
              opportunity to make your Euro transactions by creating a
              completely secure and unique IBAN account. With your Euro IBAN
              account, which you can get online, you can perform all your
              trading without any problems.
            </p>
          </div>
          <img
            alt="Euro IBAN"
            loading="lazy"
            width="700"
            height="526"
            decoding="async"
            data-nimg="1"
            className="Euro-IBAN-imag"
            style={{ color: "trans'" }}
            src="/images/jtn-ui-2.webp"
          ></img>
        </div>
      </div>
    </div>
  );
}
