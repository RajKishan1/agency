import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
interface prop {
  src: string;
  text: string;
  bgcolor: string;
}
const FeatureCard = ({ bgcolor, src, text }: prop) => {
  return (
    <div
      className={`w-1/2 max-w-[600px] h-[310px] ${bgcolor} flex gap-5 p-12 rounded-4xl border-[1px] border-black shadow-[10px] shadow-black`}
    >
      <div className="w-1/2 flex flex-col justify-between">
        <h2 className="bg-[#b9ff66] w-auto text-3xl font-semibold">{text}</h2>
        <div className="flex items-center text-xl gap-2">
          <span className="rounded-full bg-white p-2 -rotate-45">
            <ArrowRight size={30} />
          </span>
          Learn more
        </div>
      </div>
      <div className="w-1/2">
        <Image src={src} height={250} width={250} alt="" />
      </div>
    </div>
  );
};

export default FeatureCard;
