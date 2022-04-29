import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
const SideBar = (props) => {
  const { links, user } = props;
  const imgStyle = {
    width: "40px",
    height: "40px",
  };
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu((current) => !current);
  return (
    <div className="md:w-4/12 sm:full">
      {/* Desktop screens */}
      <div class="flex flex-col md:block hidden md:full sm:w-full md:min-h-screen p-1 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <div class="flex md:flex-col sm:flex-row justify-center items-center sm:mt-1 md:mt-6 md:mx-2">
          <img
            class="object-cover xs:hidden sm:w-14 sm:h-14 mx-2 rounded-full"
            src={user.image}
            alt="avatar"
            style={imgStyle}
          />
          <Link to={`/personnel/${user.id}/profile`}>
            <h4 class="mx-2 mt-1 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              {user.nom + " " + user.prenom}
            </h4>
          </Link>

          <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
        </div>

        <div class="flex flex-col justify-between flex-1 mt-1">
          <nav>
            {links.map((link) => {
              return (
                <Link to={link.destination}>
                  <p className="flex items-center w-full px-4 py-1 border-l-8 border-indigo-500 my-1 hover:bg-gray-700 text-gray-700   dark:text-gray-200">
                    <span className="mx-4 font-medium">{link.title}</span>
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      {/* Mobile screens */}
      <div class="flex flex-col md:hidden md:full sm:w-full md:min-h-screen p-1 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <div class="flex md:flex-col sm:flex-row justify-center items-center sm:mt-1 md:mt-6 md:mx-2">
          <img
            class="object-cover xs:hidden sm:w-14 sm:h-14 mx-2 rounded-full"
            src={user.image}
            alt="avatar"
            style={imgStyle}
          />
          <Link to={`/personnel/${user.id}/profile`}>
            <h4 class="mx-2 mt-1 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              {user.nom + " " + user.prenom}
            </h4>
          </Link>

          <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
          <button
            className="text-xl font-bold mx-3 hover:underline border hover:bg-gray-600 rounded-full float-end text-white"
            onClick={handleClick}
          >
            {showMenu && <AiOutlineArrowUp />}{" "}
            {!showMenu && <AiOutlineArrowDown />}
          </button>
        </div>
        {showMenu && (
          <div class="flex flex-col justify-between flex-1 mt-1">
            <nav>
              {links.map((link) => {
                return (
                  <Link to={link.destination}>
                    <p className="flex items-center w-full px-4 py-1 border-l-8 border-indigo-500 my-1 hover:bg-gray-700 text-gray-700   dark:text-gray-200">
                      <span className="mx-4 font-medium">{link.title}</span>
                    </p>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
