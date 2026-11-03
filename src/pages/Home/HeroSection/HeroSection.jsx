import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="relative flex md:items-center items-end  lg:h-[80vh] h-[90vh] md:h-[50vh] mt-19 md:mt-19 lg:mt-0">
      <picture className="absolute inset-0">
        {/* Large screen (md and up) */}
        <source srcSet="./HeroSection/desktop_bg.jpg" media="(min-width: 768px)" />
        {/* Default (small screens) */}
        <img
          src="./HeroSection/mobile_bg.jpg"
          alt="HeroSection_Mobile"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Background Overlay */}
      {/* <div className="absolute inset-y-0 left-0 md:w-2/5 bg-gradient-to-r from-black/65 to-transparent"></div> */}
      <div
        className="
        absolute 
        bg-gradient-to-t from-black/65 to-transparent 
        inset-x-0 bottom-0 h-2/5   /* default: small screens, bottom overlay */
        md:inset-y-0 md:left-0 md:w-2/5 md:h-full md:bg-gradient-to-r"
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="relative flex flex-col justify-center gap-4 md:gap-6 md:px-14 px-5 py-5 md:py-20">

<h1 className="hidden md:block text-white text-[50px] font-bold leading-tight">
  EVERYDAY COMFORT <span className="block">STARTS HERE</span>
</h1>

<h1 className="md:hidden text-white text-[35px] font-bold leading-tight">
  MADE FOR <span className="block">EVERYDAY COMFORT</span>
</h1>

<p className="text-white text-[16px] hidden md:block">
  Premium everyday essentials. Designed for comfort, made for your lifestyle.
</p>

<p className="text-white text-[16px] md:hidden">
  Discover everyday socks, underwear, and tank tops made for you.
</p>


          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            {/* <Link to="/collections/womens">
              <Button
                variant="secondary"
                className="font-bold rounded-2xl py-5.5 px-8 cursor-pointer w-full"
              >
                SHOP WOMEN
              </Button>
            </Link> */}
            <Link to="/collections/mens">
              <Button
                variant="secondary"
                className="font-bold rounded-2xl py-6 px-20 cursor-pointer w-full"
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
