import React from "react";
import "../style/Home7.css";

export default function Home7() {
  return (
    <section className="extra-bold-hero">
      {/* Main Users Section */}
      <div className="users">
        <h2 className="title">1 million users,<br></br> plus you.</h2>
        <p className="subhead-2">It only takes few seconds to get started.</p>
        <div className="millions">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="_app-button"
            data-button=""
            data-tone="orange"
            data-variant="outline"
            aria-label="go to mobile app"
          >
            <div data-button-background=""></div>
            <div className="outline"></div>
            <img
              className="imgess"
              src="/app-store-orange.svg"
              alt="App Store icon"
            />
          </a>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="_app-button"
            data-button=""
            data-tone="orange"
            data-variant="outline"
            aria-label="go to mobile app"
          >
            <div data-button-background=""></div>
            <div className="outline"></div>
            <img
              className="imgess"
              src="/google-play-orange.svg"
              alt="Google Play icon"
            />
          </a>
        </div>
      </div>

      {/* Decorative Users Section */}
      <div
        aria-hidden="true"
        className="users"
        // inert=""
        style={{
          clipPath: "polygon(0% -1%, 100% -1%, 100% 0%, 50% 1%, 50% 1%, 0% 0%)",
        }}
      >
        <div className="title">1 million users, plus you.</div>
        <div className="subhead-2">
          It only takes few seconds to get started.
        </div>
        <div className="millions">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="_app-button"
            data-button=""
            data-tone="orange"
            data-variant="outline"
            aria-label="go to mobile app"
          >
            <div data-button-background=""></div>
            <div className="outline"></div>
            <img
              className="imgess"
              src="/app-store-orange.svg"
              alt="App Store icon"
            />
          </a>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="_app-button"
            data-button=""
            data-tone="orange"
            data-variant="outline"
            aria-label="go to mobile app"
          >
            <div data-button-background=""></div>
            <div className="outline"></div>
            <img
              className="imgess"
              src="/google-play-orange.svg"
              alt="Google Play icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
