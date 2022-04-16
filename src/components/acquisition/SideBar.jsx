import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
const SideBar = (props) => {
  const [showBar, setShowBar] = useState(true);
  const handleToggleInfo = () => setShowBar((current) => !current);
  const { links } = props;
  return (
    <div className="flex flex-col  md:w-1/6 sm:w-full bg-gray-800 border border-white shadow-2xl  md:min-h-screen">
      <button
        type="button"
        onClick={handleToggleInfo}
        className="md:hidden font-bolder text-white text-xl pl-2 m-1 m-2 font-xl"
      >
        <AiOutlineBars />
      </button>
      {showBar && (
        <div>
          {links.map((link) => {
            return (
              <div className=" text-white flex sm:w-full  sm:justify-start rounded p-3 hover:bg-gray-700 space-x-2">
                <div className="w-9 h-9 p-2 flex justify-center  items-center rounded-full shadow-lg text-2xl font-medium bg-blue-900">
                  {link.title[0] + link.title[1]}
                </div>
                <div className="md:w-40 sm:w-full">
                  <Link to={link.destination}>{link.title}</Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBar;
