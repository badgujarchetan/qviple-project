import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[-5rem]">
      <QvipleNavbar />

      <div
        className="h-[500px] bg-[url('/images/pattern.webp')] bg-cover bg-no-repeat pt-[109px] flex items-start justify-center"
      >
        <h1 className="text-[40px] font-semibold text-[#222] mt-14 text-center">
          General Terms
        </h1>
      </div>

      {/* ===== MAIN WHITE CARD ===== */}
      <div className="w-full px-[11%]">
        <div className="bg-white text-[#222] text-lg leading-7 px-24 py-32 rounded-lg -mt-60 shadow-md">
          <p className="leading-[37px] text-lg">
            <strong className="font-bold">Our agreement for the provision of Jeton Bank Services to you.</strong>
            We (Jeton Bank Limited, a company incorporated in the Commonwealth
            of Dominica with company registration number 2022/C0175 and
            registered address at 1st Floor, 43 Great George Street, Roseau,
            Commonwealth of Dominica, <strong>“Jeton Bank”, “We”, “Us”</strong>)
            will provide you (<strong>“Customer”</strong> or{" "}
            <strong>“you”</strong>) with our Services in accordance with the
            terms and conditions of the Jeton Bank Business Agreement (
            <strong>“Agreement”</strong>)
          </p>
        </div>
      </div>

      {/* ===== BLUE CARD SECTION ===== */}
      <div className="w-full px-[12%]">
        <div className="flex flex-col items-center justify-center text-center bg-[#4888fb] rounded-2xl h-[360px] mt-24 px-6">
          <h2 className="text-white font-semibold text-[3rem] leading-[56px] max-w-[650px] mb-10">
            Jetonbank is an entirely new kind of bank.
          </h2>
          <p className="text-white text-xl leading-8 max-w-[450px]">
            We're all-digital, mission driven, and designed for the way you live.
          </p>
        </div>
      </div>
    </div>
  );
}
