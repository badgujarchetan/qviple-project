import React from "react";
import "../style/Home6.css";
export default function Home3() {
  return (
    <section className="jeton_card-overview">
      <div className="jeton-g-row">
        <div className="jeton-col-section xxl-10">
          <span className="jeton_tag_section" data-tone="orange">
            <div className="jeton-card_outline_section"></div>
            Jeton Card
          </span>
          <h2 className="jeton_card_text_section title-5">
            Contactless payments? Sure. Spending limits? Check. Card freezing?
            Also check.
          </h2>
        </div>
      </div>

      <div className="jeton-g-row jeton_card_video_section">
        <div className="jeton-col-section xxl-10">
          <video
            className="jeton_card_video media_jeton_card"
            src="/videos/jeton-card-rip.mp4"
            type="video/mp4"
            width="1960"
            height="1240"
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
            style={{
              transform: "translate(0px, 0px) rotate(0deg) scale(1)",
            }}
          ></video>
        </div>
      </div>

      <div className="jeton-g-row">
        <div className="jeton-col-section xxl-10">
          <h2 className="jeton_card_text_section2 title-5 ">
            Jeton Card: Your Go-To for Every Purchase
          </h2>
          <span className="jeton_tag_section">
            <div className="jeton-card_outline_section"></div>
            Learn more
          </span>
        </div>
      </div>
    </section>
  );
}
