// import Topic from "../topicComponent/Topic";
// import LeftTopStudent from "./leftTopStudent";
// import RightTopStudent from "./rightTopStudent";

// export default function Student() {
//   return (
//     <>
//       {/* desktop */}
//       <section className="hidden lg:block relative h-[2000px]  ">
//         <div className="w-10/12 mx-auto pt-[40px] bg-amber-400">
//          <div className="flex justify-center">
//              <Topic
//             title="Our Top Students"
//             subtitle="Meet our star performers who have achieved excellence through dedication and passion."
            
//           />
//          </div>

//           <div className="relative mt-[80px]">
//             {/* LEFT COLUMN */}
//             <div className="flex flex-col gap-[200px] absolute left-0 top-0">
//               <LeftTopStudent />
//               <LeftTopStudent />
//           </div>

//             {/* RIGHT COLUMN */}
//             <div className="flex flex-col gap-[200px] absolute left-[541px] top-[379px]">
//               <RightTopStudent />
//               <RightTopStudent />
//             </div>
//           </div>
//         </div>
//       </section>

// {/* mobile */}
//       <section className="lg:hidden w-full">
//         <div className="flex justify-center">
//              <Topic
//             title="Our Top Students"
//             subtitle="Meet our star performers who have achieved excellence through dedication and passion."
            
//           />
//          </div>

//         <div className="flex flex-col items-center gap-[32px] py-[32px]">
//           <LeftTopStudent mobile />
//           <RightTopStudent mobile />
//           <LeftTopStudent mobile />
//           <RightTopStudent mobile />
//         </div>
//       </section>
//     </>
//   );
// }


import Topic from "../topicComponent/Topic";
import LeftTopStudent from "./leftTopStudent";
import RightTopStudent from "./rightTopStudent";

export default function Student() {
  return (
    <>
     

      <section className=" lg:flex flex-col w-full justify-center">
      
         <div className="flex justify-center">
             <Topic
            title="Our Top Students"
            subtitle="Meet our star performers who have achieved excellence through dedication and passion."
            
          />
         </div>
          <div className="lg:w-[69.27%] lg:aspect-[1330/1659] bg-amber-700 relative mx-auto flex flex-col lg:gap-0 gap-[32px]">
              
                 <div className="lg:absolute lg:top-0 lg:left-0 flex justify-center">
                   <LeftTopStudent/>
                 </div>
                 <div className="lg:absolute lg:top-[22.85%] lg:right-0 flex justify-center">
                   <RightTopStudent/>
                 </div>
                  <div className="lg:absolute lg:top-[45.26%] lg:left-0 flex justify-center">
                   <LeftTopStudent/>
                 </div>
                 <div className="lg:absolute lg:bottom-0 lg:right-0 flex justify-center">
                   <RightTopStudent/>
                 </div>
                
          </div>
        
      </section>

    </>
  );
}