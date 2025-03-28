import React from "react";
import Btn from "../Shared/Btn";

const GetProposal = () => {
  return (
    <div className="bg-neutral-300 p-12 rounded-4xl">
      <div className="flex flex-col w-2/5 bg-red-00">
        <h1 className="font-semibold text-2xl">Let's make things happen</h1>
        <p className="py-5 w-3/5">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Btn text="Get your free proposal" />
      </div>
      <div></div>{" "}
    </div>
  );
};

export default GetProposal;
