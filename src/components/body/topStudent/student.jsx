import Topic from "../topicComponent/Topic";
import LeftTopStudent from "./leftTopStudent";
import RightTopStudent from "./rightTopStudent";

export default function Student() {
  return (
    <>
      {/* desktop */}
<<<<<<< HEAD
      <section className="hidden lg:block relative">
        <div className="w-[1330px] mx-auto pt-[40px] ">
         <div className="flex justify-center">
=======
      <section className="hidden lg:block relative bg-red-600">
        <div className="w-[1330px] mx-auto pt-[40px] ">
         <div className="flex justify-center bg-amber-950">
>>>>>>> e76bd2e6849874bd9d4dca8316b1ab0b9cef0f2c
             <Topic
            title="Our Top Students"
            subtitle="Meet our star performers who have achieved excellence through dedication and passion."
            
          />
         </div>
<<<<<<< HEAD

          <div className="relative mt-[80px]">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-[200px] absolute left-0 top-0">
=======
              
          <div className="w-fit h-full relative mt-[80px]">
            
            {/* Left Column */}
            <div className="flex flex-col gap-[200px] absolute top-0 left-0">
>>>>>>> e76bd2e6849874bd9d4dca8316b1ab0b9cef0f2c
              <LeftTopStudent />
              <LeftTopStudent />
            </div>

<<<<<<< HEAD
            {/* RIGHT COLUMN */}
=======
            {/* Right Column */}
>>>>>>> e76bd2e6849874bd9d4dca8316b1ab0b9cef0f2c
            <div className="flex flex-col gap-[200px] absolute left-[541px] top-[379px]">
              <RightTopStudent />
              <RightTopStudent />
            </div>
          </div>
        </div>
      </section>
{/* mobile */}
      <section className="lg:hidden w-full">
        <div className="flex justify-center">
             <Topic
            title="Our Top Students"
            subtitle="Meet our star performers who have achieved excellence through dedication and passion."
            
          />
         </div>

        <div className="flex flex-col items-center gap-[32px] py-[32px]">
          <LeftTopStudent mobile />
          <RightTopStudent mobile />
          <LeftTopStudent mobile />
          <RightTopStudent mobile />
        </div>
      </section>
    </>
  );
}
