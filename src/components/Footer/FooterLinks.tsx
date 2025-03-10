import Link from "next/link";
import React from "react";

const FooterLinks = ({ href, text }: { href: string; text: string }) => {
  return <Link href={href}>{text}</Link>;
};

export default FooterLinks;
