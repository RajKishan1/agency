import React from "react";
import FooterNavBar from "./FooterNavBar";
import FooterHero from "./FooterHero";

const Footer = () => {
  return (
    <div className="bg-[#191A23] text-gray-30 mx-12 p-12 rounded-tl-[50px] rounded-tr-[50px]">
      <FooterNavBar />
      <FooterHero />
      <p>this is footer</p>
    </div>
  );
};

export default Footer;
