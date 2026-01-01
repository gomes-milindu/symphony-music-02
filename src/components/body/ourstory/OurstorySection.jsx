import React from 'react';
import Button1 from '../../../buttons/homepage/Button1';
import StoryImg from '../../../assets/StorySectionImg.png';

function OurstorySection() {
  return (
    <>
      

      {/* ================= DESKTOP VIEW ================= */}
      <div className="
        flex flex-row
        w-full
        h-[1714.431640625px]

        justify-between items-center
      
      ">
        {/* Text Section */}
        <div className="w-[768px] h-[508px] flex flex-col gap-12 text-left bg-red-300 ml-10">
          <span className="
            text-[72px]
            leading-[60px]
            tracking-[-0.02em]
            text-[#E26200]
            font-primary
            bg-green-600
          ">
            Our Story
          </span>
          <div className='w-[768px] h-[400px] gap-[32px]'>
      

          <div className="
            text-[24pt]
            leading-9
            text-[#454545]
            font-secondary
            bg-amber-700
          ">
            Founded in 2010, Harmony Music School began with a simple mission: to
            make quality music education accessible to everyone. What started as
            a small studio with just three teachers has grown into one of the
            region's premier music institutions.
            <br /><br />
            We believe that music is a universal language that transcends
            boundaries and enriches lives. Our dedicated team of professional
            musicians and educators work tirelessly to nurture talent, build
            confidence, and inspire a lifelong love of music.
          </div>

          <Button1 buttonname="View About Us" />
          </div>
  
        </div>

        {/* Image Section */}
        <div className="w-[1146.431640625px] h-[1146.431640625px] aspect-square ">
          <img
              src={StoryImg}
              alt="Our Story"
              className="w-full h-full object-cover rounded-2xl"
          />
          </div>
    
      
      </div>
    </>
  );
}

export default OurstorySection;
