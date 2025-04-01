import React from "react";

const SmallHeading = ({ heading, text }: { heading: string; text: string }) => {
  return (
    <div className="flex flex-col md:flex-row gap-[5vw] my-4 items-center">
      <h1 className="bg-[#B9FF66] text-3xl p-2 font-semibold">{heading}</h1>
      <p className="w-9/10 md:w-1/3 text-[16px] text-neutral-700">{text}</p>
    </div>
  );
};

export default SmallHeading;
