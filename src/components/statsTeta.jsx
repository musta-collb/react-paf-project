import React, { PureComponent } from "react";
import { VscExtensions } from "react-icons/vsc";

const StatsTeta = (props) => {
  const { titre, nomber } = props;
  return (
    <div class="shadow rounded-lg py-3 m-2 px-5 bg-white md:w-1/3 sm:w-fit">
      <div class="flex flex-row justify-between items-center w-full">
        <div>
          <h6
            class="text-2xl font-lora
          "
          >
            {titre}
          </h6>
          <h4 class="text-black text-4xl font-bold text-left font-lora">33</h4>
        </div>
        <div className="">
          <span className="text-4xl bolder text-green-600">
            <VscExtensions />
          </span>
        </div>
      </div>
      <div class="text-left flex flex-row justify-start items-center">
        <p>
          <span class="text-teal-500 font-bold">{nomber}</span> in 7 days
        </p>
      </div>
    </div>
  );
};
export default StatsTeta;
