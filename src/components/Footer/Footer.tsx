import React from "react";
import FooterNavBar from "./FooterNavBar";
import FooterHero from "./FooterHero";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="bg-[#191A23] text-gray-30 p-12 rounded-tl-[50px] rounded-tr-[50px]">
      <FooterNavBar />
      <FooterHero />
      <FooterBottom />
    </div>
  );
};

export default Footer;
