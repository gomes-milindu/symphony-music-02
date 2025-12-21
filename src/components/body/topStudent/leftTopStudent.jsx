// import man from "../../../assets/topStudent/man.png";

// export default function LeftTopStudent({ mobile }) {
 
//   if (mobile) {
//     return (
//       <div className="w-[398px] h-[278px] relative ">
//         <div className="w-[367.46px] h-[141.33px] bg-[#FFE999]
//             rounded-[12.48px] border border-[#E08A00]
//             absolute bottom-0 right-0 pr-[8px] flex justify-end items-center">
          
//           <div className="w-[166px]  text-start text-[#454545]">
//             <p className="font-semibold text-[20px]">Emily Johnson</p>
//             <div className="text-[12px] font-semibold mt-[6px] space-y-[4px]">
//               <p>Instrument : Piano</p>
//               <p>Class / Level : Grade 12</p>
//               <p>Results : AAA+</p>
//             </div>
//           </div>
//         </div>

//         <img
//           src={man}
//           className="w-[224.16px] h-[277.68px] absolute bottom-0 left-0 object-cover"
//         />
//       </div>
//     );
//   }

//   //desktop
//   return (
//     <div className="w-[788.5px] h-[551px] relative">
//       <div className="w-[728px] h-[280px] bg-[#FFE999]
//           rounded-[24.73px] border border-[#E08A00]
//           absolute bottom-0 right-0 px-[64px] py-[43px] flex justify-end">
        
//         <div className="w-[266px] text-start text-[#454545]">
//           <p className="font-semibold text-[32px]">Emily Johnson</p>
//           <div className="text-[20px] font-semibold mt-[16px] space-y-[6px]">
//             <p>Student ID : ST002/2020</p>
//             <p>Instrument : Piano</p>
//             <p>Class / Level : Grade 12</p>
//             <p>Results : AAA+</p>
//           </div>
//         </div>
//       </div>

//       <img
//         src={man}
//         className="w-[444.11px] h-[550.14px] absolute bottom-0 left-0 object-cover"
//       />
//     </div>
//   );
// }


import man from "../../../assets/topStudent/man.png";

export default function LeftTopStudent() {
  return(
    <>
      <div className="lg:w-[41vw] w-[92vw] sm:w-[50vw] aspect-[1.43] relative bg-amber-10">
        <div className="lg:w-[38vw] w-[85vw] sm:w-[46vw] aspect-[2.6] bg-[#FFE999CC] absolute bottom-0 right-0 rounded-[24px] flex flex-col justify-center items-end border-primary border-2">
             
              <div className="md:pr-[3.33vw] pr-[5.11vw] text-[#454545] xl:gap-[24px]">
                  <p className="font-semibold xl:text-[26px] lg:text-[20px] text-[18px] ">Emily Johnson</p>
                  <div className="lg:w-[13.9vw] xl:text-[16px] lg:text-[12px] text-[12px] flex flex-col xl:gap-2">
                    <p>Student ID : ST002/2020</p>
                   <p >Instrument : Piano</p>
                  <p>Class / Level : Grade 12</p>
                  <p>Results : AAA+</p>
                  </div>
              </div>
        </div>
        <div className="">
              <img  src={man} className="lg:w-[23vw] w-[52vw] sm:w-[28vw]  absolute bottom-0 left-0 object-cover"/>
        </div>
      </div>
      
    </>
  )

}