import React from "react";
import { Check, Clock, User, Star } from "lucide-react";

/* Static data (we’ll convert to props later) */
const classDetails = {
  title: "Guitar Master Class",
  level: "Beginner",
  image:
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  duration: "45 min / 60 min",
  levels: "3 Levels",
  type: "Electric Guitar",
  description:
    "Master both acoustic and electric guitar with our comprehensive curriculum covering everything from basic chords to advanced techniques.",
  features: [
    "Individual and group lessons",
    "Music theory fundamentals",
    "Popular songs and classical pieces",
  ],
};

function ClassCard() {
  return (
<div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 max-w-sm">
      
      {/* Image */}
      <img
        src={classDetails.image}
        alt={classDetails.title}
        className="rounded-xl w-full h-55 object-cover"
      />

      {/* Title + Level */}
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {classDetails.title}
        </h2>
        <span className="px-4 py-1 text-sm border border-yellow-400 text-yellow-600 rounded-full">
          {classDetails.level}
        </span>
      </div>

      {/* Info Row */}
<div className="flex justify-between mt-5 px-1">

  {/* Duration */}
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center gap-1 text-xs text-gray-500 self-start">
      <Clock className="w-3 h-4 text-yellow-500" />
      <span>Duration</span>
    </div>
    <span className="text-sm font-medium text-gray-800 ">
      {classDetails.duration}
    </span>
  </div>

  {/* Levels */}
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center gap-1 text-xs text-gray-500 self-start">
      <User className="w-3 h-4 text-yellow-500" />
      <span>Levels</span>
    </div>
    <span className="text-sm font-medium text-gray-800">
      {classDetails.levels}
    </span>
  </div>

  {/* Type */}
  <div className="flex flex-col items-center text-center ">
    <div className="flex items-center gap-1 text-xs text-gray-500 self-start">
      <Star className="w-3 h-4 text-yellow-500" />
      <span>Type</span>
    </div>
    <span className="text-sm font-medium text-gray-800">
      {classDetails.type}
    </span>
  </div>

</div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-4 leading-relaxed">
        {classDetails.description}
      </p>

     {/* Features */}
    <ul className="mt-4 space-y-2">
      {classDetails.features.map((item, index) => (
     <li
      key={index}
      className="flex items-start gap-3 text-sm text-gray-700">
      <span className="mt-[2px] flex h-4 w-4 items-center justify-center rounded border border-yellow-400 text-yellow-500 text-xs font-bold">
        ✓
      </span>

         {/* Text */}
            <span>{item}</span>
        </li>
      ))}
    </ul>

    </div>
  );
}

export default ClassCard;
