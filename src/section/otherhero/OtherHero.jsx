import { HiBars3 } from "react-icons/hi2";
import OtherNavbar from "../../components/header/navBar/OtherNavbar";
import { useState } from "react";


import { IoClose } from "react-icons/io5";

function OtherHero(props) {
  const [open, setOpen] = useState(false);

  const menu = [
    "Home",
    "Classes",
    "Events",
    "Gallery",
    "About Us",
    "Contact Us",
  ];
  return (
    <>
      {/* Mobile hero */}
      {/* <div
        className="block sm:hidden w-full h-[55vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${props.mobileImg})`,
        }}
        
      >
        <div className="flex justify-end items-center h-10 text-3xl p-5">
          <button className="text-white"><HiBars3 /></button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[54px] font-primary text-white mt-5">{props.title}</p>
          <p className="text-[16px] text-white text-center p-5">{props.subtitle}</p>
        </div>
      </div> */}
       {/* Mobile hero */}
      <div
        className="block sm:hidden w-full h-[55vh] bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${props.mobileImg})` }}
      >
        {/* top bar */}
        <div className="flex justify-end items-center h-12 text-3xl p-5">
          <button
            className="text-white"
            onClick={() => setOpen(true)}
          >
            <HiBars3 />
          </button>
        </div>

        {/* text */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-[54px] font-primary text-white mt-5">
            {props.title}
          </p>
          <p className="text-[16px] text-white text-center p-5">
            {props.subtitle}
          </p>
        </div>
      </div>

      {/* ===== Overlay Menu ===== */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* dark overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* menu card */}
          <div className="
            relative w-[88%] max-w-sm
            bg-[#f3efe6]
            rounded-2xl
            shadow-xl
            p-6
            animate-in fade-in zoom-in duration-200
          ">

            {/* header */}
            <div className="text-center mb-4">
              <p className="text-xl font-semibold text-orange-600">
                Symphony
              </p>
              <p className="text-sm text-gray-600">
                Music Institute
              </p>
            </div>

            {/* close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-2xl text-gray-700"
            >
              <IoClose />
            </button>

            {/* menu list */}
            <div className="divide-y">
              {menu.map((item, i) => (
                <button
                  key={i}
                  className={`
                    w-full py-4 text-lg
                    ${item === "Classes"
                      ? "text-orange-600 font-medium"
                      : "text-gray-900"}
                  `}
                  onClick={() => {
                    console.log("go:", item);
                    setOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Tablet hero */}
      <div
        className="hidden sm:inline-flex xl:hidden w-full aspect-[1.706] bg-contain bg-no-repeat justify-center items-start"
        style={{
          backgroundImage: `url(${props.tabletImg})`, backgroundSize: "100% auto"
        }}
      >

        <div className="flex flex-col gap-5 justify-center items-center">
          <p className=" text-[7vw] font-primary text-white pt-20">{props.title}</p>
          <p className="text-[2vw] text-white">{props.subtitle}</p>
        </div>
      </div>

      {/* /Desktop hero */}
      <div
        className="hidden xl:inline-flex w-full h-[625px] bg-contain bg-no-repeat justify-center items-start"
        style={{
          backgroundImage: `url(${props.desktopImg})`, backgroundSize: "100% 110vh"
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-[80px] font-primary text-white mt-20">{props.title}</p>
          <p className="text-[16px] text-white">{props.subtitle}</p>
        </div>
      </div>

      
    </>
  );
}

export default OtherHero;
