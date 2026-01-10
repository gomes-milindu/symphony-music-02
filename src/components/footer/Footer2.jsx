import React from "react";

import symponylogo from "../footer/Images/newlogo.png";

// Desktop
import vector3 from "../footer/Images/Vector 3.png";
import vector4 from "../footer/Images/vector 4.png";

// Tablet
import vector3tablet from "../footer/images/vector 5tab.png";
import vector4tablet from "../footer/images/vector 6tab.png";

// Mobile
import vector3phone from "../footer/images/vector 3phone.png";
import vector4phone from "../footer/images/vector 4phone.png";

function Footer2() {
  return (
    <footer className="relative w-full overflow-hidden ">

      {/* ================= BACKGROUNDS ================= */}

      {/* DESKTOP — UNCHANGED */}
      <div className="hidden md:block absolute inset-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${vector3})` }}
        />
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${vector4})` }}
        />
      </div>

      {/* TABLET — UNCHANGED */}
      <div className="hidden sm:block md:hidden absolute inset-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${vector3tablet})` }}
        />
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${vector4tablet})` }}
        />
      </div>

      {/* ================= MOBILE (FIXED) ================= */}
      <div className="block sm:hidden absolute inset-0">

        {/* TOP WAVE */}
        <div
          className="absolute top-0 left-0 w-full h-[55%] bg-no-repeat bg-cover bg-top"
          style={{ backgroundImage: `url(${vector3phone})` }}
        />
        {/* <div
          className="absolute top-0 left-0 w-full h-[65%] bg-no-repeat bg-cover bg-top"
          style={{ backgroundImage: `url(${vector4phone})` }}
        /> */}

        {/* BOTTOM SOLID FILL */}
        <div className="flex flex-col justify-end items-end">
          <div className="absolute z-8 top-95 w-full h-[500px] bg-[#181D27] " />
          </div>
        
      </div>

     
      <div className="relative z-10 max-w-7xl mx-auto min-h-[600px] flex flex-col justify-end px-6 pb-12 bg">

        <div className="flex flex-col md:flex-row gap-12 items-end">

         
          <div className="flex flex-col items-center text-center mt-16 mx-auto md:mx-0">
            <img
              src={symponylogo}
              alt="Harmony Music School"
              className="w-30 mb-4"
            />
            
  <h2 className="text-yellow-400 font-semibold leading-tight text-lg">
    Symphony
  </h2>
  <h2 className="text-yellow-400 font-semibold leading-tight text-lg mb-2">
    Music Institute
  </h2>
            <p className="text-gray-300 text-sm max-w-xs mt-2">
              Inspiring musical excellence and creativity since 2010.
              Join us and unleash your musical talent.
            </p>
          </div>

         
          <div className="flex gap-8 sm:gap-14 md:gap-52 items-start md:items-center md:ml-auto w-full md:w-auto">

            <div className="w-60 text-left md:text-center mx-auto md:mx-0">
              <h3 className="text-yellow-400 font-semibold mb-4">
                Contact Us
              </h3>
              <ul className="text-gray-300 text-sm space-y-3">
                <li>info@harmonymusic.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Music Avenue, Harmony City</li>
              </ul>
            </div>

            <div className="w-60 text-left md:text-center mx-auto md:mx-0">
              <h3 className="text-yellow-400 font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="text-gray-300 text-sm space-y-3">
                <li>Home</li>
                <li>Classes</li>
                <li>Events</li>
                <li>Gallery</li>
                <li>About Us</li>
              </ul>
            </div>

          </div>
        </div>

       
        <div className="border-t border-gray-700 pt-4 mt-8 text-center text-gray-400 text-sm">
          © 2025 Symphony Music Institute
        </div>

      </div>
    </footer>
  );
}

export default Footer2;
