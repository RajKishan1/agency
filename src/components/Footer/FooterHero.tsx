import React from "react";

const FooterHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-center border-b-2 py-8 border-neutral-300">
      <div className="w-full md:w-[45%] flex flex-col gap-3 md:gap-5 text-[16px] md:text-xl text-white">
        <h6 className="bg-[#b9ff66] text-black rounded-lg w-28 px-1 font-semibold">
          Contact Us:
        </h6>
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p>
          Address: 1234 Main St Moonstone City,
           Stardust State 12345
        </p>
      </div>
      <div className="bg-[#292a32] w-full md:w-[55%] flex flex-col md:flex-col gap-4 items-center justify-center py-14 rounded-3xl">
        <div className="w-full md:w-2/5 border-2 border-neutral-300 rounded-xl">
          <input
            type="text"
            className="h-full w-full py-6 text-white text-2xl ml-4 "
            placeholder="Email"
          />
        </div>
        <div className="w-full md:w-2/5 bg-[#B9FF66] py-6 rounded-xl">
          <p className="text-2xl text-center">Subscribe to news</p>
        </div>
      </div>
    </div>
  );
};

export default FooterHero;
