import React from "react";
import Btn from "../Shared/Btn";

const HeroSection = () => {
  return (
    <div className="w-1/2 flex flex-col md:flex-row ">
      <div className="flex flex-col justify-between">
        <h1 className="text-6xl">Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Btn text="Book a consultation" />
      </div>
      <div></div>
    </div>
  );
};

export default HeroSection;
