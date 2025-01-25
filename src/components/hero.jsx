import React, { useRef, useEffect } from "react";
import Section from "./section";
import Button from "./button";
import Arrow from "../assets/svg/arrow";
import Person from "../assets/Person.png";
import Circle from "../assets/svg/circle";
import Star from "../assets/Star.svg";
import Teks from "../assets/Teks.svg";
import Typed from "typed.js";

const hero = () => {
  const typedElement = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Front End Developer.", "Designer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });
    return () => typed.destroy();
  }, []);
  return (
    <>
      <Section id="1">
        <div className=" relative mt-[15rem] h-[535.03px] bg-[#0A0A0C]">
          <div className=" relative w-[1103px] h-[343px] mx-auto bg-gradient-225 from-[#17171A] text-[#E6E6E6] font-space">
            <div className="h-[342px] w-[1100px] border-2 absolute top-[40px] left-[30px] border-[#171719]" />
            <div className="w-[600.41px] absolute top-[-110px] left-[120px]">
              <div className="text-[58.58px] leading-[114%]">
                <h1 className="">This is your<br /><span ref={typedElement} className="text-color"></span></h1>
                <span className="text-[#194BFD] font-bold">Irawan Aji</span>
              </div>
              <div className="mt-[28px] w-[541.41px]">
                <p className="font-thin">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="mt-[46px] flex items-center gap-[24px]">
                <Button>Discuss for Projects</Button>
                <a href="" className="flex gap-[5px] items-center">
                  View Portofolios
                  <div>
                    <Arrow />
                  </div>
                </a>
              </div>
            </div>
            <div className="h-[493.91px] w-[453.42px] overflow-hidden absolute right-[30px] top-[-150px]">
              <img src={Person} alt="" />
            </div>
          </div>
          <div className="absolute right-[480px] top-[200px]">
            <Circle color="#AD13FB" id="purple" r="40" />
          </div>
          <div className="absolute right-[430px] top-[-200px]">
            <Circle color="#212122" id="silver" r="40" />
          </div>
          <div className="absolute right-[180px] top-[-120px]">
            <img src={Star} alt="" />
          </div>
          <div className="absolute right-[100px] top-[90px]">
            <img src={Teks} alt="" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default hero;
