import React from "react";
import Btn from "../Shared/Btn";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between">
      <div className="w-2/5 flex flex-col justify-between">
        <h1 className="w-3/4 text-6xl font-bold">Navigating the digital landscape for success</h1>
        <p className="w-3/5 my-4 text-lg">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Btn text="Book a consultation" />
      </div>
      <div className="w-1/2 bg-green-300" ></div>
    </div>
  );
};

export default HeroSection;
