import React, { PureComponent } from "react";

const Display = () => {
  return (
    <div className="bg-[url('./images/img5.jpg')] bg-cover rounded-md px-2 m-2 h-600 flex flex-col">
      <div className="md:w-2/3 sm:w-full">
        <h1 className="font-bold md:text-5xl font-lora sm:text-5xl text-black tracking-wide sm:p-4 md:p-6">
          Pour une gestion plus efficace
          <br /> et plus perfermante!
        </h1>
      </div>

      <div className="sm:w-full flex justify-end">
        <div className="md:w-2/4">
          <h1 className="text-lg nice text-black sm:p-4 md:p-6">
            Vous etes un soumissionaire, vous avez des offrets?
            <br />
            Répondez à nos appels de offres maintement!
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="button"
          className=" mb-3 hover:text-gray-700 text-black font-lora font-semibold py-2 px-4 rounded sm:px-2 sm:py-1 border-2 border-gray-800"
        >
          Voir tous
        </button>
      </div>
    </div>
  );
};
export default Display;
