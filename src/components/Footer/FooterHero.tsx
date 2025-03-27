import React from "react";

const FooterHero = () => {
  return (
    <div className="flex border-b-2 py-12 border-neutral-300">
      <div className="w-[45%] flex flex-col gap-8 text-xl text-white">
        <div className="bg-[#B9FF66]">Contact Us:</div>
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p>
          Address: 1234 Main St Moonstone City,
          <br /> Stardust State 12345
        </p>
      </div>
      <div className="bg-[#292a32] w-[55%] flex gap-4 items-center justify-center">
        <div className="w-2/5 border-2 border-neutral-300">
          <input type="text" className="h-full w-full" placeholder="Email" />
        </div>
        <div className="w-2/5 bg-[#B9FF66] ">Subscribe to news</div>
      </div>
    </div>
  );
};

export default FooterHero;
