import React from "react";
import DownloadIcon from "../assets/downloading.svg";
import Button from "./button";
import Sosmed from "../assets/sosmed.png";

const header = () => {
  return (
    <>
      <div className="sticky top-0 z-40">
        <div className=" w-full font-space flex items-center bg-[#171719] h-16 ">
          <div className=" items-center container mx-auto flex justify-between text-white">
            <div className="flex gap-[10px]">
              <img src={DownloadIcon} alt="" />
              designer
              <span></span>
            </div>
            <div className="flex">
              <ul className="flex gap-[30px] cursor-pointer">
                <li>
                  <a href="#1">Home</a>
                </li>
                <li>
                  <a href="#2">Service</a>
                </li>
                <li>
                  <a href="#4">Project</a>
                </li>
                <li><a href="#3">About</a></li>
                <li><a href="#5">Client</a></li>
                <li><a href="#8">Contact</a></li>
              </ul>
            </div>
            <div>
              <Button>Discuss for Projects</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
