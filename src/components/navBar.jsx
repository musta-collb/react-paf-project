import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { links } = props;
  const style = {
    zIndex: 10000,
  };
  return (
    <nav className="bg-gray-800 sticky top-0" style={style}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16 container">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold font-lora">ALINA BUISNESS</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex  space-x-4 float-left">
                {/** Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {links.map((item) => {
                  return (
                    <Link to={item.destination}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {item.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Mobile menu, show/hide based on menu state. */}
      <div className="md:hidden " id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/** Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          {links.map((item) => {
            return (
              <Link to={item.destination}>
                <p className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
