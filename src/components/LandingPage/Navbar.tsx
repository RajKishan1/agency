import React from "react";
import NavbarLinks from "./navbarLinks";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between text-black my-8">
      <span className="text-5xl font-black">Positivus</span>
      <span className="hidden md:flex items-center gap-[2vw]">
        <NavbarLinks href="" text="About US" />
        <NavbarLinks href="" text="Services" />
        <NavbarLinks href="" text="Use Cases" />
        <NavbarLinks href="" text="Pricing" />
        <NavbarLinks href="" text="Blog" />
        <span className="border-[1px] p-3 rounded-xl">
          <h2 className="text-xl">Request a quote</h2>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
