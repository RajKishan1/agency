import React from "react";
import NavbarLinks from "./navbarLinks";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between text-black px-24">
      <span>Positivius</span>
      <span className="hidden md:flex">
        <NavbarLinks href="" text="About US" />
        <NavbarLinks href="" text="Services" />
        <NavbarLinks href="" text="Use Cases" />
        <NavbarLinks href="" text="Pricing" />
        <NavbarLinks href="" text="Blog" />
        <span className="border-2">
          <h2>Request a quote</h2>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
