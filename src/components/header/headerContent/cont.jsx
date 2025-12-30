import React from "react";
import Vector7 from "../../../assets/homePage/Vector7.png"; // Under vector
import MaskgroupLg from "../../../assets/homePage/MaskgroupLg.png";
import MaskgroupMd from "../../../assets/homePage/MaskgroupMd.png"; // Desktop background
import Vector8 from "../../../assets/homePage/Vector8.svg"; // Mask overlay

import MaskgroupSm from "../../../assets/homePage/MaskgroupSm.png";
import Vector9 from "../../../assets/homePage/Vector9.png";

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
    </div>
  );
}
