import React from "react";
import vector3 from "../footer/Images/Vector 3.png";
import vector4 from "../footer/Images/Vector 4.png";
import symponylogo from "../footer/Images/Frame 90.png";

function Footer2() {
  return (
    <footer className="relative w-full overflow-hidden">

     {/* Background wrapper (auto-tall on mobile) */}
<div className="absolute inset-0 min-h-full sm:min-h-[1100px] md:min-h-full">
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${vector3})` }}
  />
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${vector4})` }}
  />
</div>


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[600px] flex flex-col justify-end px-6">

        {/* MAIN ROW */}
        <div className="flex flex-col md:flex-row gap-12 items-end">

          {/* LOGO / ABOUT — FULL CENTER ON MOBILE */}
          <div className="flex flex-col items-center text-center mt-16 mx-auto md:mx-0 ">
            <img
              src={symponylogo}
              alt="Harmony Music School"
              className="w-51 mb-4"
            />
           
            <p className="text-gray-300 text-sm max-w-xs mt-2">
              Inspiring musical excellence and creativity since 2010.
              Join us and unleash your musical talent.
            </p>
          </div>

          {/* CONTACT + LINKS */}
          <div
            className="
              flex
              gap-8                 /* tighter mobile gap */
              sm:gap-14
              md:gap-52             /* desktop gap */
              items-start
              md:items-center
              md:ml-auto
              w-full md:w-auto
              
            "
          >
            {/* CONTACT — mobile: slightly right + left-aligned text */}
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

            {/* QUICK LINKS — mobile: slightly left */}
            <div className="w-60 text-left md:text-center mx-auto md:mx-0 ml-13 sm:ml-6 md:ml-0">
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

        {/* FOOTER BAR */}
        <div className="border-t border-gray-700 pt-4 mt-8 text-center text-gray-400 text-sm">
          © 2025 Symphony Music Institute
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
