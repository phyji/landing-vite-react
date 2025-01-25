import React, { useEffect, useState } from "react";
import Section from "./section";
import DownloadIcon from "../assets/downloading.svg";
import Call from "../assets/call.png";
import Send from "../assets/send.png";
import Loc from "../assets/location.png";
import Sosmed from "../assets/sosmed.png"
const footer = () => {
  const [DateNow, setDate] = useState(0);
  useEffect(() => {
    const date = new Date();
    setDate(date.getFullYear())
  });

  return (
    <>
      <Section id="8">
        <div className="h-[261px] w-[1139.74px] mx-auto mt-[100px] text-[#E6E6E6] flex justify-between">
          <div className="h-[176px] w-[288.2px]">
            <div>
              <div className="flex gap-[10px]">
                <img src={DownloadIcon} alt="" />
                designer
                <span></span>
              </div>
            </div>
            <div className="font-thin mt-[24px]">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <img className="mt-[24px]" src={Sosmed} alt="" />
          </div>
          <div className="h-[176px] w-[82px]">
            Quick Link
            <div className="mt-[24px] font-satoshi font-thin">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Project</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Client</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[138.68px] h-[155px]">
            Important
            <div className="mt-[24px] font-satoshi font-thin">
              <ul>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Cookies Policy</a>
                </li>
                <li>
                  <a href="">Social Work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[162.86px] h-[138px]">
            Contact
            <div className="mt-[24px] font-thin">
              <ul>
                <li className="flex gap-[10px]">
                  <img src={Call} alt="" />
                  +223 456 789
                </li>
                <li className="flex gap-[10px]">
                  <img src={Send} alt="" />
                  example@gmail.com
                </li>
                <li className="relative flex gap-[10px]">
                  <img src={Loc} alt="" />
                  <p className="absolute left-[30px] ">
                    6391 Elgin St. Celina, Delaware
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div  className="text-[#E6E6E6] pb-[24px] ">
          <div className="flex  justify-center mt-[24px] items-center">
            Copyright {DateNow} | Irawan Aji
          </div>
        </div>
      </Section>
    </>
  );
};

export default footer;
