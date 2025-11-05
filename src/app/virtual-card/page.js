import React from "react";
import "./virtual-card.css";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
export default function page() {
  return (
    <div className="virtual-card-section">
      <QvipleNavbar />
      <div className="virtual-card-container">
        <div className="virtual-card-main">
          <div className="virtual-card-hero">
            <h1 className="virtual-card-h1">
              Jetonbank <br></br>
              Virtual Card
            </h1>
            <div className="virtual-card-desc">
              Manage your business expenses <br></br> effortlessly with the
              Jetonbank <br></br> Virtual Debit Card.
            </div>
            <div className="virtual-card-sub-desc">
              Make secure online payments, track transactions <br></br>
              in real time, and enjoy global accessibility—all <br></br>
              from one powerful platform.
            </div>
            <div className="virtual-card-actions">
              <a href="/" target="_blank">
                <div className="circle"></div>
                <span>Get Your Virtual Card</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="custome-container">
        <div className="what-is-container">
          <div className="left-section">
            <h2 className="left-h2">
              What is the Jetonbank <br></br> Virtual Card?
            </h2>
            <p className="left-p">
              The <b>Jetonbank Virtual Card</b> is a digital debit card designed
              for businesses, enabling seamless online transactions without the
              need for a physical card.
            </p>
            <br></br>
            <p className="left-p">
              Use it for <b>business purchases, subscriptions, payments, </b>and
              more—while maintaining complete control over your spending.
            </p>
          </div>
          <div className="right-section">
            <img src="/images/virtual-card-what-is.png" alt=""></img>
          </div>
        </div>
      </div>
      <div className="key-benefits-section">
        <div className="key-benefits-container">
          <h2 className="key-benefits-h2">Key Benefits</h2>
          <div className="key-benefits-desc">
            The <b>Jetonbank Virtual Card</b> is a digital debit card designed
            for <br></br> businesses, enabling seamless online transactions
            without the need for a physical card.
          </div>
          <div className="cols-with-phone">
            <div className="cols">
              <div className="col">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.78125"
                    y="0.78125"
                    width="98.4375"
                    height="98.4375"
                    rx="49.2188"
                    stroke="#131E3D"
                    strokeWidth="1.5625"
                  ></rect>
                  <mask id="mask0" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M66.6421 64.0241V76.4916C66.6421 77.8008 66.1069 78.9906 65.2448 79.8527C64.3826 80.7148 63.1929 81.25 61.8844 81.25H38.1156C36.8064 81.25 35.6166 80.7148 34.7545 79.8527C33.8924 78.9906 33.3572 77.8008 33.3572 76.4916V64.0241H29.7865C28.932 64.0241 28.156 63.675 27.5937 63.1127C27.0315 62.5505 26.6823 61.7744 26.6823 60.9199V39.0787C26.6823 38.2242 27.0315 37.4481 27.5937 36.8859C28.156 36.3236 28.932 35.9745 29.7865 35.9745H33.3579V23.5077C33.3579 22.1985 33.8931 21.0094 34.7552 20.1473C35.6173 19.2852 36.8071 18.75 38.1162 18.75H61.8844C63.1936 18.75 64.3833 19.2852 65.2448 20.1473C66.1069 21.0094 66.6421 22.1992 66.6421 23.5077V35.9752H70.2135C71.0679 35.9752 71.844 36.3243 72.4062 36.8866C72.9685 37.4488 73.3177 38.2249 73.3177 39.0794V60.9213C73.3177 61.7758 72.9685 62.5512 72.4062 63.1141C71.844 63.6764 71.0679 64.0255 70.2135 64.0255H66.6421V64.0241Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.6421 64.0241V76.4916C66.6421 77.8008 66.1069 78.9906 65.2448 79.8527C64.3826 80.7148 63.1929 81.25 61.8844 81.25H38.1156C36.8064 81.25 35.6166 80.7148 34.7545 79.8527C33.8924 78.9906 33.3572 77.8008 33.3572 76.4916V64.0241H29.7865C28.932 64.0241 28.156 63.675 27.5937 63.1127C27.0315 62.5505 26.6823 61.7744 26.6823 60.9199V39.0787C26.6823 38.2242 27.0315 37.4481 27.5937 36.8859C28.156 36.3236 28.932 35.9745 29.7865 35.9745H33.3579V23.5077C33.3579 22.1985 33.8931 21.0094 34.7552 20.1473C35.6173 19.2852 36.8071 18.75 38.1162 18.75H61.8844C63.1936 18.75 64.3833 19.2852 65.2448 20.1473C66.1069 21.0094 66.6421 22.1992 66.6421 23.5077V35.9752H70.2135C71.0679 35.9752 71.844 36.3243 72.4062 36.8866C72.9685 37.4488 73.3177 38.2249 73.3177 39.0794V60.9213C73.3177 61.7758 72.9685 62.5512 72.4062 63.1141C71.844 63.6764 71.0679 64.0255 70.2135 64.0255H66.6421V64.0241Z"
                    stroke="black"
                    strokeWidth="3.125"
                    mask="url(#mask0)"
                  />
                </svg>
                <div>
                  <div className="title">Instant Access</div>
                  <p className="get">
                    Get your virtual card within minutes and start making
                    payments immediately.
                  </p>
                </div>
              </div>
              <div className="col">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.78125"
                    y="0.78125"
                    width="98.4375"
                    height="98.4375"
                    rx="49.2188"
                    stroke="#131E3D"
                    strokeWidth="1.5625"
                  ></rect>
                  <mask id="mask0" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M66.6421 64.0241V76.4916C66.6421 77.8008 66.1069 78.9906 65.2448 79.8527C64.3826 80.7148 63.1929 81.25 61.8844 81.25H38.1156C36.8064 81.25 35.6166 80.7148 34.7545 79.8527C33.8924 78.9906 33.3572 77.8008 33.3572 76.4916V64.0241H29.7865C28.932 64.0241 28.156 63.675 27.5937 63.1127C27.0315 62.5505 26.6823 61.7744 26.6823 60.9199V39.0787C26.6823 38.2242 27.0315 37.4481 27.5937 36.8859C28.156 36.3236 28.932 35.9745 29.7865 35.9745H33.3579V23.5077C33.3579 22.1985 33.8931 21.0094 34.7552 20.1473C35.6173 19.2852 36.8071 18.75 38.1162 18.75H61.8844C63.1936 18.75 64.3833 19.2852 65.2448 20.1473C66.1069 21.0094 66.6421 22.1992 66.6421 23.5077V35.9752H70.2135C71.0679 35.9752 71.844 36.3243 72.4062 36.8866C72.9685 37.4488 73.3177 38.2249 73.3177 39.0794V60.9213C73.3177 61.7758 72.9685 62.5512 72.4062 63.1141C71.844 63.6764 71.0679 64.0255 70.2135 64.0255H66.6421V64.0241Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.6421 64.0241V76.4916C66.6421 77.8008 66.1069 78.9906 65.2448 79.8527C64.3826 80.7148 63.1929 81.25 61.8844 81.25H38.1156C36.8064 81.25 35.6166 80.7148 34.7545 79.8527C33.8924 78.9906 33.3572 77.8008 33.3572 76.4916V64.0241H29.7865C28.932 64.0241 28.156 63.675 27.5937 63.1127C27.0315 62.5505 26.6823 61.7744 26.6823 60.9199V39.0787C26.6823 38.2242 27.0315 37.4481 27.5937 36.8859C28.156 36.3236 28.932 35.9745 29.7865 35.9745H33.3579V23.5077C33.3579 22.1985 33.8931 21.0094 34.7552 20.1473C35.6173 19.2852 36.8071 18.75 38.1162 18.75H61.8844C63.1936 18.75 64.3833 19.2852 65.2448 20.1473C66.1069 21.0094 66.6421 22.1992 66.6421 23.5077V35.9752H70.2135C71.0679 35.9752 71.844 36.3243 72.4062 36.8866C72.9685 37.4488 73.3177 38.2249 73.3177 39.0794V60.9213C73.3177 61.7758 72.9685 62.5512 72.4062 63.1141C71.844 63.6764 71.0679 64.0255 70.2135 64.0255H66.6421V64.0241Z"
                    stroke="black"
                    strokeWidth="3.125"
                    mask="url(#mask0)"
                  />
                </svg>
                <div>
                  <div className="title">Instant Access</div>
                  <p className="get">
                    Get your virtual card within minutes and start making
                    payments immediately.
                  </p>
                </div>
              </div>
              <div className="col">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.78125"
                    y="0.78125"
                    width="98.4375"
                    height="98.4375"
                    rx="49.2188"
                    stroke="#131E3D"
                    strokeWidth="1.5625"
                  ></rect>
                  <mask id="mask0" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M66.6421 64.0241V76.4916C66.6421 77.8008 66.1069 78.9906 65.2448 79.8527C64.3826 80.7148 63.1929 81.25 61.8844 81.25H38.1156C36.8064 81.25 35.6166 80.7148 34.7545 79.8527C33.8924 78.9906 33.3572 77.8008 33.3572 76.4916V64.0241H29.7865C28.932 64.0241 28.156 63.675 27.5937 63.1127C27.0315 62.5505 26.6823 61.7744 26.6823 60.9199V39.0787C26.6823 38.2242 27.0315 37.4481 27.5937 36.8859C28.156 36.3236 28.932 35.9745 29.7865 35.9745H33.3579V23.5077C33.3579 22.1985 33.8931 21.0094 34.7552 20.1473C35.6173 19.2852 36.8071 18.75 38.1162 18.75H61.8844C63.1936 18.75 64.3833 19.2852 65.2448 20.1473C66.1069 21.0094 66.6421 22.1992 66.6421 23.5077V35.9752H70.2135C71.0679 35.9752 71.844 36.3243 72.4062 36.8866C72.9685 37.4488 73.3177 38.2249 73.3177 39.0794V60.9213C73.3177 61.7758 72.9685 62.5512 72.4062 63.1141C71.844 63.6764 71.0679 64.0255 70.2135 64.0255H66.6421V64.0241Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.6421 64.0241V76.4916C66.6421 77.8008 66.1069 78.9906 65.2448 79.8527C64.3826 80.7148 63.1929 81.25 61.8844 81.25H38.1156C36.8064 81.25 35.6166 80.7148 34.7545 79.8527C33.8924 78.9906 33.3572 77.8008 33.3572 76.4916V64.0241H29.7865C28.932 64.0241 28.156 63.675 27.5937 63.1127C27.0315 62.5505 26.6823 61.7744 26.6823 60.9199V39.0787C26.6823 38.2242 27.0315 37.4481 27.5937 36.8859C28.156 36.3236 28.932 35.9745 29.7865 35.9745H33.3579V23.5077C33.3579 22.1985 33.8931 21.0094 34.7552 20.1473C35.6173 19.2852 36.8071 18.75 38.1162 18.75H61.8844C63.1936 18.75 64.3833 19.2852 65.2448 20.1473C66.1069 21.0094 66.6421 22.1992 66.6421 23.5077V35.9752H70.2135C71.0679 35.9752 71.844 36.3243 72.4062 36.8866C72.9685 37.4488 73.3177 38.2249 73.3177 39.0794V60.9213C73.3177 61.7758 72.9685 62.5512 72.4062 63.1141C71.844 63.6764 71.0679 64.0255 70.2135 64.0255H66.6421V64.0241Z"
                    stroke="black"
                    strokeWidth="3.125"
                    mask="url(#mask0)"
                  />
                </svg>
                <div>
                  <div className="title">Instant Access</div>
                  <p className="get">
                    Get your virtual card within minutes and start making
                    payments immediately.
                  </p>
                </div>
              </div>
              <div className="col">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.78125"
                    y="0.78125"
                    width="98.4375"
                    height="98.4375"
                    rx="49.2188"
                    stroke="#131E3D"
                    strokeWidth="1.5625"
                  ></rect>
                  <mask id="mask0" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M66.6421 64.0241V76.4916C66.6421 77.8008 66.1069 78.9906 65.2448 79.8527C64.3826 80.7148 63.1929 81.25 61.8844 81.25H38.1156C36.8064 81.25 35.6166 80.7148 34.7545 79.8527C33.8924 78.9906 33.3572 77.8008 33.3572 76.4916V64.0241H29.7865C28.932 64.0241 28.156 63.675 27.5937 63.1127C27.0315 62.5505 26.6823 61.7744 26.6823 60.9199V39.0787C26.6823 38.2242 27.0315 37.4481 27.5937 36.8859C28.156 36.3236 28.932 35.9745 29.7865 35.9745H33.3579V23.5077C33.3579 22.1985 33.8931 21.0094 34.7552 20.1473C35.6173 19.2852 36.8071 18.75 38.1162 18.75H61.8844C63.1936 18.75 64.3833 19.2852 65.2448 20.1473C66.1069 21.0094 66.6421 22.1992 66.6421 23.5077V35.9752H70.2135C71.0679 35.9752 71.844 36.3243 72.4062 36.8866C72.9685 37.4488 73.3177 38.2249 73.3177 39.0794V60.9213C73.3177 61.7758 72.9685 62.5512 72.4062 63.1141C71.844 63.6764 71.0679 64.0255 70.2135 64.0255H66.6421V64.0241Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.6421 64.0241V76.4916C66.6421 77.8008 66.1069 78.9906 65.2448 79.8527C64.3826 80.7148 63.1929 81.25 61.8844 81.25H38.1156C36.8064 81.25 35.6166 80.7148 34.7545 79.8527C33.8924 78.9906 33.3572 77.8008 33.3572 76.4916V64.0241H29.7865C28.932 64.0241 28.156 63.675 27.5937 63.1127C27.0315 62.5505 26.6823 61.7744 26.6823 60.9199V39.0787C26.6823 38.2242 27.0315 37.4481 27.5937 36.8859C28.156 36.3236 28.932 35.9745 29.7865 35.9745H33.3579V23.5077C33.3579 22.1985 33.8931 21.0094 34.7552 20.1473C35.6173 19.2852 36.8071 18.75 38.1162 18.75H61.8844C63.1936 18.75 64.3833 19.2852 65.2448 20.1473C66.1069 21.0094 66.6421 22.1992 66.6421 23.5077V35.9752H70.2135C71.0679 35.9752 71.844 36.3243 72.4062 36.8866C72.9685 37.4488 73.3177 38.2249 73.3177 39.0794V60.9213C73.3177 61.7758 72.9685 62.5512 72.4062 63.1141C71.844 63.6764 71.0679 64.0255 70.2135 64.0255H66.6421V64.0241Z"
                    stroke="black"
                    strokeWidth="3.125"
                    mask="url(#mask0)"
                  />
                </svg>
                <div>
                  <div className="title">Instant Access</div>
                  <p className="get">
                    Get your virtual card within minutes and start making
                    payments immediately.
                  </p>
                </div>
              </div>
            </div>
            <div className="phones">
              <img
                src="/images/virtual-card-key-benefits-phone.png"
                alt="virtual-card-key-benefits-phone.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
