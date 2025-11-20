import React from "react";
import "./newsrooms.css";
import Navbar from "@/Navbar/Navbar";

export default function Page() {
  return (
    <div className="newsrooms-section">
      <Navbar />

      
      <header className="common-newsroom">
        <div className="bg-newsroom"></div>

        <div className="g-row main-row color-white">
          <div className="left">
            <h1 className="title-main">Newsroom</h1>
          </div>

          <div className="right">
            <p className="subtext">
              Stay updated with Jeton News! Keep your finger on the pulse of
              industry news, partnerships, and everything Jeton!
            </p>
          </div>
        </div>
      </header>

      {/* Articles Section */}
      <main>
        <section className="_article-list">
          <div className="container">
            <h2 className="section-title">Latest Articles</h2>

            <ul className="card-grid">
              {images.map((item, i) => (
                <li key={i} className="card">
                  <a className="article-card" href={item.link}>
                    <div className="media">
                      <img src={item.img} alt={item.title} />
                      <div className="overlay"></div>
                      <span className="badge">News</span>
                    </div>

                    <div className="content">
                      <p className="card-title">{item.title}</p>
                      <p className="date">{item.date}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

const images = [
  {
    img: "/images/map-images.jpg",
    title: "Jeton and West Ham United Extend Partnership",
    date: "May 19, 2025",
    link: "/",
  },
  {
    img: "/images/map-images.jpg",
    title: "Jeton Secures New Award for Best Payment Design",
    date: "Jul 09, 2025",
    link: "/",
  },
  {
    img: "/images/map-images.jpg",
    title: "Financial Times Recognizes Jeton as Top Startup",
    date: "Mar 04, 2025",
    link: "/",
  },
  {
    img: "/images/map-images.jpg",
    title: "Jeton Becomes Official Sponsor of Tech Event",
    date: "Jul 25, 2024",
    link: "/",
  },
  {
    img: "/images/map-images.jpg",
    title: "Jeton Welcomes New Brand Ambassador",
    date: "Oct 13, 2025",
    link: "/",
  },
  {
    img: "/images/map-images.jpg",
    title: "Jeton Halloween Cashback Offer Announced",
    date: "Oct 20, 2025",
    link: "/",
  },
  {
    img: "/images/map-images.jpg",
    title: "Jeton Launches New Feature for Crypto Transfers",
    date: "Nov 01, 2025",
    link: "/",
  },
  {
    img: "/images/map-images.jpg",
    title: "CEO Interview: The Future of Digital Wallets",
    date: "Dec 15, 2025",
    link: "/",
  },
];
