import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-col  justify-around gap-12">
      <span className="flex justify-between">
        <FeatureCard
          text="Search Engine Optimization"
          src="/images/magnifier.png"
          bgcolor="bg-[#f3f3f3]"
        />
        <FeatureCard
          text=" Pay-per-click Advertising"
          src="/images/arrow.png"
          bgcolor="bg-[#b9ff66]"
        />
      </span>
      <span className="flex justify-between">
        <FeatureCard
          text="Social Media Marketing"
          src="/images/smile.png"
          bgcolor="bg-[#191a23]"
        />
        <FeatureCard
          text="Email Marketing"
          src="/images/sending.png"
          bgcolor="bg-[#f3f3f3]"
        />
      </span>
      <span className="flex justify-between">
        <FeatureCard
          text="Content Creation"
          src="/images/tasks.png"
          bgcolor="bg-[#b9ff66]"
        />
        <FeatureCard
          text="Analytics and Tracking"
          src="/images/charts.png"
          bgcolor="bg-[#191a23]"
        />
      </span>
    </div>
  );
};

export default Features;
