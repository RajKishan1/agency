import React from "react";
import FooterLinks from "./FooterLinks";

const FooterNavBar = () => {
  return (
    <div className="w-full flex justify-between">
      <span></span>
      <span className="flex">
        <FooterLinks text="About Us" href="" />
        <FooterLinks text=" " href="" />
        <FooterLinks text=" " href="" />
        <FooterLinks text=" " href="" />
        <FooterLinks text=" " href="" />
      </span>
      <span className="flex"></span>
    </div>
  );
};

export default FooterNavBar;
