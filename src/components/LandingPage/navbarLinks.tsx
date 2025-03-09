import Link from "next/link";
import React from "react";

const NavbarLinks = ({ href, text }: { href: string; text: string }) => {
  return (
    <span>
      <Link href={`${href}`}>
        <h5 className="">{text}</h5>
      </Link>
    </span>
  );
};

export default NavbarLinks;
