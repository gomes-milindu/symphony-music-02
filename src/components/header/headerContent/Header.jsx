
import React from "react";
import Vector7 from "../../../assets/homePage/Vector7.png";
import Vector9 from "../../../assets/homePage/Vector9.png";
import MaskgroupLg from "../../../assets/homePage/MaskgroupLg.png";
import MaskgroupSm from "../../../assets/homePage/MaskgroupSm.png";
import Navbar from "../navigate/nav";
import Layer1 from "../../../assets/homePage/Layer1.png";

export default function Header() {
<<<<<<< HEAD:src/components/header/headerContent/cont.jsx
    return (
        <div className="relative w-full h-[661px] overflow-hidden flex items-center justify-center lg:gap-16  lg:h-[960px] lg:py-[120px] lg:px-[120px]">
=======
  return (
    <div className="w-full relative overflow-hidden ">
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
>>>>>>> e76bd2e6849874bd9d4dca8316b1ab0b9cef0f2c:src/components/header/headerContent/Header.jsx


            {/* Yellow colour vector  */}
            <img
                src={Vector9}
                alt="Header Background"
                className="block lg:hidden absolute inset-0 w-full h-full object-cover"
            />
            <img
                src={Vector7}
                alt="Header Background"
                className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            />

            {/* Background Image  */}
            <img
                src={MaskgroupLg}
                alt="Overlay"
                className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            />
            <img
                src={MaskgroupSm}
                alt="Overlay"
                className="block lg:hidden absolute inset-0 w-full h-full object-cover"
            />

            {/* Navigation bar */}
            <div className="hidden lg:block absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>




            {/* Icon Image  */}
            <div className="absolute top-[135px] w-[138.71px] h-[131px] lg:top-[120px] lg:w-[228.71px] lg:h-[216px]">
                <img src={Layer1}
                    alt="Icon"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Heading part  */}
            <div className="absolute top-[311px]  w-[390px] h-[100px] flex justify-center lg:top-[400px] lg:w-[857px] lg:h-[232px]">
                <h1 className="font-primary font-normal text-white text-center
                               text-[50px] leading-[50px] drop-shadow-[0_0.74px_5.57px_#00000040]
                               lg:text-[110px] lg:leading-[116px] lg:drop-shadow-[0_1.78px_13.38px_#00000040]"
                >
                    start your musical journey today
                </h1>
            </div>

            {/* Sentence Part  */}
            <div className="absolute top-[435px] w-[398px] flex justify-center 
                lg:top-[656px] lg:w-[1920px]">
                {/* Mobile Screen size  */}
                <div className="lg:hidden">
                    <p className="text-white text-center font-secondary text-[18px] leading-3 mb-4">
                        Learn from professional instructors
                    </p>
                    <p className="text-white text-center font-secondary text-[18px] leading-3">
                        in a supportive environment
                    </p>
                </div>

                {/* large screen size  */}
                <p className="hidden lg:block text-white text-center font-secondary 
                text-[24px] leading-[30px]">
                    Learn from professional instructors in a supportive environment
                </p>
            </div>





            {/* Button */}
            <button className=" absolute top-[542px] lg:top-[750px] inline-flex flex-col items-center justify-center
            w-[146px] h-[37px] rounded-[4.62px] px-3 py-2 gap-[6.93px]  border-[0.58px]  border-white
            font-secondary font-[16px] leading-[20.78px] lg:w-[223px] lg:h-[60px] lg:rounded-lg lg:border lg:px-5 lg:py-3 lg:gap-3
  "
            >
                <span className="text-white font-medium text-[14px] lg:text-[20px]">
                    Explore Classes
                </span>
            </button>

        </div>

    );
}
