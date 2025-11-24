"use client";

import React from "react";
import Navbar from "@/Navbar/Navbar";

export default function Page() {
  return (
    <div className="mt-[-1rem] mb-20">
      <Navbar />

      
      <header className="relative py-32 md:py-40 bg-[#f73b20] text-white overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_bottom,rgba(255,255,255,0.15),transparent_40%)]"></div>

        <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
          <h1 className="text-[clamp(42px,5vw,64px)] font-bold tracking-tight md:pl-20">
            Newsroom
          </h1>

          <p className="max-w-lg text-[18px] leading-relaxed opacity-90 md:pr-20">
            Stay updated with Jeton News! Keep your finger on the pulse of
            industry news, partnerships, and everything Jeton!
          </p>
        </div>
      </header>

      {/* ARTICLES */}
      <main className="px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-7">
          {images.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25"></div>

                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-white text-[#f73b20] px-3 py-1 rounded-md text-sm font-semibold">
                    News
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-[18px] font-semibold text-[#232323] leading-tight line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#747474] mt-1">{item.date}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
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
