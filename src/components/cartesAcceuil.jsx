import React, { PureComponent } from "react";

const Card = (props) => {
  let { description, imageUrl, titre } = props;
  return (
    <div className="max-w-lg min-w-md py-4 px-8 bg-white shadow-lg hover:shadow-md rounded-lg my-10">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={require("../images/imgMain.jpg")}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-4xl font-black">{titre}</h2>
        <p className="mt-2 text-gray-600 text-xl">{description}</p>
      </div>
    </div>
  );
};
export default Card;
