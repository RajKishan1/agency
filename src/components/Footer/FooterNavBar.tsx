import React from "react";
import FooterLinks from "./FooterLinks";

const FooterNavBar = () => {
  return (
    <div className="w-full flex items-center justify-between pb-12 text-white">
      <h2 className="font-bold text-2xl">Positivus</h2>
      <span className="w-5/10 flex justify-between text-xl ">
        <FooterLinks text="About Us" href="" />
        <FooterLinks text="Services" href="" />
        <FooterLinks text="Use cases" href="" />
        <FooterLinks text="Pricing" href="" />
        <FooterLinks text="Blog" href="" />
      </span>
      <span className="flex">
        <div></div>
        <div>icon2</div>
        <div>icon3</div>
      </span>
    </div>
  );
};

export default FooterNavBar;
