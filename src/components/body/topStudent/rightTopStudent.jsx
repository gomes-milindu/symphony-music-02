// import girl from "../../../assets/topStudent/girl.png";

// export default function RightTopStudent({ mobile }) {
 
//   if (mobile) {
//     return (
//       <div className="w-[398px] h-[278px] relative">
//         <div className="w-[371.94px] h-[141.06px] bg-[#FFC373]
//             rounded-[24.73px] border border-[#FF9100]
//             absolute bottom-0 left-0 px-[22px] py-[21.66px] text-start text-[#454545]">
          
//           <p className="font-semibold text-[20px]">Sarah Johnson</p>
//           <div className="text-[14px] font-semibold mt-[8px] space-y-[4px]">
//             <p>Instrument : Guitar</p>
//             <p>Class / Level : Grade 9</p>
//             <p>Results : AAA</p>
//           </div>
//         </div>

//         <div className="overflow-hidden">
//             <img
//           src={girl}
//           className="w-[204.56px] h-[275.85px] absolute bottom-0 right-0 object-cover object-top"
//         />
//         </div>
//       </div>
//     );
//   }


//   return (
//     <div className="w-[779px] h-[540px] relative">
//       <div className="w-[728px] h-[280px] bg-[#FFC373]
//           rounded-[24.73px] border border-[#FF9100]
//           absolute bottom-0 left-0 px-[64px] py-[43px] text-start text-[#454545] items-center">
        
//         <p className="font-semibold text-[32px]">Sarah Johnson</p>
//         <div className="text-[20px] font-semibold mt-[16px] space-y-[6px]">
//           <p>Student ID : ST001/2020</p>
//           <p>Instrument : Guitar</p>
//           <p>Class / Level : Grade 9</p>
//           <p>Results : AAA</p>
//         </div>
//       </div>

//       <div  className="overflow-hidden">
//         <img
//         src={girl}
//         className="w-[400.39px] h-[600px] absolute bottom-0 right-0 object-cover object-top"
//       />
//       </div>
//     </div>
//   );
// }


import girl from "../../../assets/topStudent/girl.png";

export default function RightTopStudent() {
        return(
          <>
               <div className="lg:w-[41vw] w-[92vw] sm:w-[50vw] aspect-[1.46] relative bg-amber-10">
                      <div className="lg:w-[38vw] w-[85vw] sm:w-[46vw] aspect-[2.64] bg-[#FFE999CC] absolute bottom-0 left-0 rounded-[24px] flex flex-col justify-center items-start border-primary border-2">
                           
                            <div className="lg:pl-[3.33vw] pl-[5.11vw] text-[#454545] xl:gap-[24px]">
                                <p className="font-semibold xl:text-[26px] lg:text-[18px] text-[18px] ">Emily Johnson</p>
                                <div className="lg:w-[13.9vw] xl:text-[16px] lg:text-[12px] text-[12px]  flex flex-col xl:gap-2">
                                  <p>Student ID : ST002/2020</p>
                                 <p >Instrument : Piano</p>
                                <p>Class / Level : Grade 12</p>
                                <p>Results : AAA+</p>
                                </div>
                            </div>
                      </div>
                      <div  className="overflow-hidden">
                        <img src={girl}  className="lg:w-[21vw] w-[48vw] sm:w-[26vw] aspect-[0.74] absolute bottom-0 right-0 object-cover object-top"/>
                      </div>
                </div> 
          
          </>
        )
}