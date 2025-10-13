import Navbar from "@/Navbar/Navbar";
import React from "react";
import "./enquiry.css";

export default function Page() {
  return (
    <>
      {/* Assuming Navbar provides the overall app structure/context */}
      <Navbar />

      <div className="enquiry-container">
        <h2 className="form-title">Submit Your Enquiry</h2>
        <form className="enquiry-form">
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g., Jane Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              placeholder="(+XX) XXXXX-XXXXX"
              pattern="[0-9]{10,15}"
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="subject">
              Enquiry Subject <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Briefly describe your purpose"
              required
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="address">Full Address</label>
            <textarea
              id="address"
              rows="3"
              placeholder="Street, City, Postcode"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
