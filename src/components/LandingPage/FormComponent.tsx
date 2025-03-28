import React from "react";

const FormComponent = () => {
  return (
    <div className="bg-neutral-300 rounded-4xl">
      <div className="w-[45%] flex flex-col bg-red-00 py-8 ml-[7.5%]">
        <div className="flex mb-5 gap-1 bg-gray-00 text-lg">
          <input type="radio" name="" className="text-3xl" />
          <p className="mr-3">Say Hi</p>
          <input type="radio" name="" />
          <p>Get a Quote</p>
        </div>
        <form className="flex flex-col gap-1" action="">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Name"
            className=" h-12 w-full bg-white border-[1px] border-black rounded-xl mb-5 pl-2"
          />
          <label htmlFor="Email">E Mail*</label>
          <input
            type="text"
            placeholder="E-mail"
            className=" h-12 w-full bg-white border-[1px] border-black rounded-xl mb-5 pl-2"
          />
          <label htmlFor="Message">Message*</label>
          <input
            type="text"
            placeholder="Message"
            className=" h-52 w-full bg-white border-[1px] text-start border-black rounded-xl mb-5 pl-2"
          />
          <button className="bg-black text-white rounded-xl h-12">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
