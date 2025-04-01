import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-col  justify-between gap-12">
      <span className="flex justify-between">
        <FeatureCard text=" lorem ipsum" src="" bgcolor="bg-[#f3f3f3]" />
        <FeatureCard text=" lorem ipsum" src="" bgcolor="bg-[#b9ff66]" />
      </span>
      <span className="flex justify-between">
        <FeatureCard text=" lorem ipsum" src="" bgcolor="bg-[#191a23]" />
        <FeatureCard text=" lorem ipsum" src="" bgcolor="bg-[#f3f3f3]" />
      </span>
      <span className="flex justify-between">
        <FeatureCard text=" lorem ipsum" src="" bgcolor="bg-[#b9ff66]" />
        <FeatureCard text=" lorem ipsum" src="" bgcolor="bg-[#191a23]" />
      </span>
    </div>
  );
};

export default Features;
