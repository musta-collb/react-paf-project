import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
const SideBar = (props) => {
  const [showBar, setShowBar] = useState(true);
  const handleToggleInfo = () => setShowBar((current) => !current);
  const { links } = props;
  return (
    <div className="flex flex-col  md:w-1/6 sm:w-full flex-none bg-blue-600  border-white shadow-2xl  md:min-h-screen">
      <button
        type="button"
        onClick={handleToggleInfo}
        className="md:hidden font-bolder text-white text-xl pl-2 m-1 m-2 font-xl"
      >
        <AiOutlineBars />
      </button>
      {showBar && (
        <div className="mt-4">
          {links.map((link) => {
            return (
              /*{/*<div className=" text-white flex sm:w-full  sm:justify-start rounded p-3 hover:bg-gray-700 space-x-2">
                <div className="w-9 h-9 p-2 flex justify-center  items-center rounded-full shadow-lg text-2xl font-medium bg-blue-900">
                  {link.title[0] + link.title[1]}
                </div>
                <div className="md:w-40 sm:w-full">
                  <Link to={link.destination}>{link.title}</Link>
                </div>
            /*</div>*//*}*/
            <div className="text-white flex w-full items-center  py-2 px-[1em] hover:bg-blue-700 pl-2 space-x-2">
                <div className="w-8 h-8 flex justify-center rounded-full shadow-lg text-2xl font-medium bg-blue-500">{link.title[0]}</div>
                <Link key={link} to={link.destination}>{link.title}</Link>
            </div>
              
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBar;
