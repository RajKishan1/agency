import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
interface prop {
  text: string;
}
const CaseComponent = ({ text }: prop) => {
  return (
    <div>
      <p className="w-3/4">{text}</p>
      <Link href="" className="text-[#b9ff66] mt-1 flex">
        Learn more <ArrowUpRight />
      </Link>
    </div>
  );
};

export default CaseComponent;
