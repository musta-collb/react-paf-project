import React, { PureComponent } from "react";
import { IoMdClipboard } from "react-icons/io";

const Stats = (props) => {
  const { number, title, color } = props;
  console.log(number);
  console.log(title);
  return (
    <div
      className={
        "my-4 p-2 text-gray-700 mx-3 md:w-1/3 sm:w-full flex rounded flex-wrap justify-center bg-" +
        color
      }
    >
      <div className="w-full px-6">
        <div className="text-5xl font-light text-white">
          <IoMdClipboard />
        </div>
      </div>
      <div className="w-full flex items-end justify-around">
        <h1 className="font-lora text-xl text-white">{title}</h1>
        <h1 className="font-lora text-4xl text-white">{number}</h1>
      </div>
    </div>
  );
};

export default Stats;
