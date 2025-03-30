import React from "react";
import CaseComponent from "./CaseComponent";

const CaseStudiesComponent = () => {
  return (
    <div className="rounded-3xl p-14 flex items-center bg-[#191a23] text-white">
      <CaseComponent text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
      <hr className="h-2 rotate-90 w-2/10" />
      <CaseComponent text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
      <hr className="h-2 rotate-90 w-2/10" />
      <CaseComponent text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
    </div>
  );
};

export default CaseStudiesComponent;
