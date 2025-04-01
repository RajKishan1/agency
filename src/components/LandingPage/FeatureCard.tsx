import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
interface prop {
  src: string;
  text: string;
}
const FeatureCard = ({ src, text }: prop) => {
  return (
    <div className="bg-red-300 rounded-4xl border-2 border-black">
      <div className="w-1/2 flex flex-col justify-between">
        <h2 className="bg-green-200">{text}</h2>
        <div className="flex">
          <span className="rounded-full">
            <ArrowRight />
          </span>
          Learn more
        </div>
      </div>
      <div className="w-1/2">
        <Image src={src} height={200} width={200} alt="" />
      </div>
    </div>
  );
};

export default FeatureCard;
