import React from "react";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-800 px-24 py-4 sm:h-80">
      <div className="w-full font-2xl font-bold flex text-white  justify-center flex-row">
        <div className="flex justify-around px-4 hover:text-blue-900">
          <a href="#" className="text-4xl">
            <BsFacebook />
          </a>
        </div>

        <div className="flex justify-around hover:text-blue-900 px-4 ">
          <a href="#" className="text-4xl">
            <MdEmail />
          </a>
        </div>

        <div className="flex justify-around px-4 hover:text-blue-900">
          <a href="#" className="text-4xl">
            <AiFillLinkedin />
          </a>
        </div>

        <div className="flex justify-around px-4 hover:text-blue-900">
          <a href="#" className="text-4xl">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="text-xl py-20  px-4">
        <h1 className="text-white text-center m-3">
          Suivez nous sur les résaux sociaux!
        </h1>
        <br />
        <h2 className="text-white font-bold text-center">
          Nous sommes toujours avec vous!
        </h2>
      </div>
    </div>
  );
};

export default Footer;
