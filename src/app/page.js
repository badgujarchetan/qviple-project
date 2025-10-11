// import Footer from "@/Footer/Footer";
import React from "react";
// import BottomMenu from "@/BottomMenu/BottomMenu";

import Home1 from "@/Home/Home1";
import Home2 from "@/Home/Home2";
import Home3 from "@/Home/Home3";
// import Home4 from "@/Home/Home4";
import Home5 from "@/Home/Home5";
import Home6 from "@/Home/Home6";

export default function page() {
  return (
    <div className="-mt-[5rem]">
      <Home1 />
      <Home2 />
      <Home6 />
      <Home3 />
      {/* <Home4 /> */}
      <Home5 />
      {/* <Footer /> */}
      {/* <BottomMenu /> */}
    </div>
  );
}
