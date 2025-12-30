import React from "react";
import Vector7 from "../../../assets/homePage/Vector7.png"; // Under vector
import MaskgroupLg from "../../../assets/homePage/MaskgroupLg.png";
import MaskgroupMd from "../../../assets/homePage/MaskgroupMd.png"; // Desktop background
import Vector8 from "../../../assets/homePage/Vector8.svg"; // Mask overlay
import Navbar from "../navigate/nav";
import Layer1 from "../../../assets/homePage/Layer1.Png";
import MaskgroupSm from "../../../assets/homePage/MaskgroupSm.png";
import Vector9 from "../../../assets/homePage/Vector9.png";

import image from "../../../assets/homePage/image.jpg";

export default function Header() {
  return (
    <div className="w-full bg-red-500 relative overflow-hidden ">
      <div className="hidden lg:block relative w-full aspect-[2/1] overflow-hidden">
        <svg
          viewBox="0 0 1920 960"
          className="hidden lg:block absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <image href={Vector7} width="1920" height="960" />
          <image
            href={MaskgroupLg}
            width="1920"
            height="960"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
      <div className="hidden md:block lg:hidden relative w-full">
        <svg
          viewBox="0 0 834 562"
          className="w-full h-auto block"
          preserveAspectRatio="xMidYMid slice"
        >
          <image href={Vector8} width="834" height="625" />
          <image
            href={MaskgroupMd}
            width="834"
            height="562"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
      <div className="md:hidden relative w-full">
        <svg
          viewBox="0 0 430 661"
          className="w-full h-auto block"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Vector9 */}
          <image href={Vector9} width="430" height="700" />

          {/* Mask stays in place */}
          <image
            href={MaskgroupSm}
            width="430"
            height="661"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>

      {/* TABLET *

      <svg
        viewBox="0 0 1920 960"
        className="absolute inset-0 hidden  md:block lg:hidden relative w-full aspect-[1920/960] overflow-hidden w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={Vector7} width="1920" height="960" />
        <image
          href={MaskgroupLg} // or create a tablet-specific mask if needed
          width="1920"
          height="960"
          mask="url(#maskVector7)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      {/* Mobile SVG
        viewBox="0 0 430 661"
        className="lg:hidden absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          href={Vector9}
          width="430"
          height="661"
          preserveAspectRatio="xMidYMid slice"
        />
        <image
          href={MaskgroupSm}
          width="430"
          height="661"
          mask="url(#maskVector9)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      {/* Content Wrapper 
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center gap-10 px-6 lg:px-20">
        {/* Navbar 
        <div className="hidden lg:block absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Hero Icon 
        <div className="w-3/8 lg:w-9/72 bg-green-500 h- self-center z-20 ">
          <img src={Layer1} alt="Icon" className="w-full h-auto" />
        </div>

        {/* Hero Text 
        <div className="gap-2  bg-red-500 z-20 flex flex-col items-center">
          <div className="flex justify-center w-full z-20">
            <h1
              className="font-primary font-normal text-white text-center
                text-[40px] leading-[50px] drop-shadow-[0_0.74px_5.57px_#00000040]
                 lg:text-clamp(10rem, 15vw, 20rem)
 lg:leading-[90px] lg:drop-shadow-[0_1.78px_13.38px_#00000040]"
            >
              Start Your Musical <br />
              Journey Today
            </h1>
          </div>

          <div className="w-[398px] lg:w-full z-20 flex justify-center">
            <div className="lg:hidden text-center">
              <p className="text-white font-secondary text-[18px] leading-3 mb-4">
                Learn from professional instructors in a
              </p>
              <p className="text-white font-secondary text-[18px] leading-3">
                supportive environment
              </p>
            </div>

            <p className="hidden font-secondary lg:block text-white tracking-wide text-center text-[18px] leading-7.5">
              Learn from professional instructors in a supportive environment
            </p>
          </div>
        </div>

        {/* Button 
        <button
          className="inline-flex flex-col items-center justify-center bg-amber-600 z-20
            w-5/36 rounded-[4.62px] px-3 py-2 gap-[6.93px] border-[0.58px] border-white
            font-secondary font-[16px] lg:w-9/72 lg:rounded-lg lg:border lg:px-3 lg:py-3 
            self-center lg:self-center mb-6 lg:mb-8"
        >
          <span className="text-white font-medium text-[14px] lg:text-[18px]">
            Explore Classes
          </span>
        </button>
      </div>
      */}
    </div>
  );
}
