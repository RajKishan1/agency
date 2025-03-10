import React from "react";

const Btn = ({ text }: { text: string }) => {
  return (
    <button className="w-auto bg-[#191a23] text-white p-2 rounded-xl">
      {text}
    </button>
  );
};

export default Btn;
