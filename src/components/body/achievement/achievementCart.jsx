import iconStudents from "../../../assets/homePage/iconStudents.png";

export default function AchievementCart() {
  return (
    <div className="w-10/12 bg-amber-200  flex justify-center items-center">
      <div className="w-5/24 bg-green-600  p-3 gap-5 flex flex-col justify-center items-center">
        <div className="w-[64px] h-[64px] bg-[#FFC107] rounded-full flex justify-center items-center ">
          <div className="w-[34px] h-[34px]  relative">
            <img
              src={iconStudents}
              alt="Instrument"
              className="absolute inset-0 w-full h-full bg-cover"
            />
          </div>
        </div>
        <div className="w-full bg-pink-400  flex flex-col  gap-2">
          <div className="w-full h-[36px] bg-blue-700 flex justify-center">
            <span className="font-inter font-semibold text-[32px] text-[#FFC107] leading-[30px] tracking-[0%] text-center mb-[20px]">
              2,500+
            </span>
          </div>
          <div className="w-full h-[36px] bg-yellow-400">
            <span className="font-inter font-normal text-[24px] leading-[36px] tracking-[0%] text-center mb-[16px]">
              Students Enrolled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
