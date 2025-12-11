import React from "react";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";

export default function Page() {
  return (
    <div className="-mt-[5rem] mb-[1.3rem]">
      <QvipleNavbar />

      {/* HERO SECTION */}
      <div className="md:h-[900px] h-[600px] bg-[url('/images/virtual-card-hero-bg.png')] bg-top bg-cover">
        <div className="w-[90%] lg:w-[73.125rem] mx-auto py-10 ">
          <div className="pt-28 md:pt-40 text-white flex flex-col gap-6 md:gap-10">
            <h1 className="text-[2.5rem] md:text-[4.75rem] font-semibold leading-tight md:leading-[5rem]">
              Jetonbank <br /> Virtual Card
            </h1>

            <div className="md:max-w-[550px] text-[1.25rem] md:text-[2rem] leading-snug md:leading-[2.5rem]">
              Manage your business expenses effortlessly with the Jetonbank
              Virtual Debit Card
            </div>

            <div className="md:max-w-[600px] text-[1rem] md:text-[1.5rem] leading-relaxed">
              Make secure online payments, track transactions in real time, and
              enjoy global accessibility— all from one platform.
            </div>

            <a
              href="/"
              target="_blank"
              className="mt-4 relative inline-block w-full md:w-[19.6875rem] bg-white text-[#131E3D] font-medium text-[1rem] md:text-[1.125rem] text-center rounded-md py-[0.88rem] overflow-hidden group"
            >
              <div className="circle absolute w-0 h-0 opacity-0 rounded-full bg-[#E3E3E3] top-5 left-1/2 transition-all duration-500 ease-out group-hover:w-[200%] group-hover:h-[500%] group-hover:opacity-100 group-hover:-top-[70px] group-hover:-left-[8.75rem]" />
              <span className="relative z-[1]">Get Your Virtual Card</span>
            </a>
          </div>
        </div>
      </div>

      {/* WHAT IS SECTION */}
      <div className="w-[90%] lg:w-[73.125rem] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 pt-[3rem] lg:pt-[5.25rem]">
          <div className="lg:w-[60%] md:py-[10rem] lg:py-[12rem]">
            <h2 className="text-[2rem] md:text-[3rem] font-semibold leading-tight md:leading-[3.75rem] text-[#181D27] mb-6 md:mb-8">
              What is the Jetonbank <br></br> Virtual Card?
            </h2>
            <p className="text-[1.25rem] md:text-[2rem] leading-[2rem] text-[#535862]">
              The <b>Jetonbank Virtual Card</b> is a digital debit card made for
              businesses.
            </p>
            <br />
            <p className="text-[1.25rem] md:text-[2rem] leading-[2.8rem] text-[#535862]">
              Use it for <b>business purchases, subscriptions, payments,</b> and
              more.
            </p>
          </div>

          <div className="lg:w-[40%] flex justify-center">
            <img
              src="/images/virtual-card-what-is.png"
              alt="virtual-card-what-is.png"
              className="w-[18rem] flex justify-center items-center md:w-[30rem] lg:w-[40rem] [mask-image:linear-gradient(black_25%,transparent_80%)]"
            />
          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="mt-10 bg-[url('/images/virtual-card-key-benefits-bg.png')] bg-cover bg-top bg-no-repeat bg-[#101932] text-white pt-[4rem] md:pt-[6.25rem] pb-[6.25rem]">
        <div className="w-[90%] lg:w-[73.125rem] mx-auto">
          <h2 className="text-center text-[2.2rem] md:text-[3rem] font-bold mb-6 md:mb-[2.5rem]">
            Key Benefits
          </h2>

          <p className="text-center text-[1.2rem] md:text-[2rem] leading-relaxed mb-10 md:mb-[7.5rem]">
            The <b>Jetonbank Virtual Card</b> enables seamless
            transactions—without a physical card.
          </p>

          <div className="flex flex-col lg:flex-row justify-evenly gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-[#F4F6F8] text-[#535862] py-4 md:py-6 px-6 md:px-6 flex flex-col gap-6 w-full"
                >
                  <h3 className="text-[#181D27] text-xl md:text-3xl font-medium">
                    Instant Access
                  </h3>
                  <p className="text-[1rem] md:text-xl leading-7">
                    Get your virtual card instantly and start using it.The
                    Jetonbank Virtual Card is a digital debit card made for
                    businesses.The <b>Jetonbank Virtual Card</b> enables
                    seamless transactions—without a physical card.
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <img
                src="/images/virtual-card-key-benefits-phone.png"
                className="w-[15rem] md:w-[30rem] lg:w-[80rem]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="mt-[2rem] flex justify-center">
        <div className="w-[95%]  lg:w-[60rem] h-auto px-3 py-16 md:py-24 text-white text-center rounded-[1.125rem] bg-[url('/images/virtual-card-get-your-bg.png')] bg-center bg-cover bg-[#131E3D] bg-blend-multiply">
          <h1 className="text-[2rem] md:text-[3.75rem] font-bold md:leading-[4rem] leading-[3rem]">
            Experience Hassle-Free Payments
          </h1>

          <p className="mt-4 text-[1rem] md:text-[1.25rem] leading-relaxed">
            Get your <b>Jetonbank Virtual Card</b> and streamline business
            transactions.
          </p>

          <div className="flex justify-center mt-6 mb-6">
            <a
              href="/"
              target="_blank"
              className="relative  inline-block w-[300px] md:w-[19.6875rem] bg-white text-[#131E3D] text-[1rem] md:text-[1.125rem] font-medium py-[0.88rem] rounded-md overflow-hidden group"
            >
              <div className="absolute w-0 h-0 opacity-0 bg-[#E3E3E3] rounded-full transition-all duration-500 ease-out group-hover:w-[200%] group-hover:h-[500%] group-hover:opacity-100 group-hover:-top-[70px] group-hover:-left-[8.75rem]" />
              <span className="relative z-10 ">Get Your Virtual Card Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
