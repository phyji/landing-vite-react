import React from "react";
import Section from "./section";
import Bgoffer from "../assets/bgoffer.png";
import Paperplane from "../assets/paperplane.png";
import Button from "./button";

const offer = () => {
  return (
    <>
      <Section id="7">
        <div className="relative w-[1138.78px] h-[170.67px] mx-auto overflow-hidden flex justify-center mt-[100px]" data-aos="fade-up" data-aos-duration="700" data-aos-delay="50" data-aos-easing="ease-in-out">
          <div className="absolute z-20 flex justify-between w-[1000px] self-center">
            <div className="flex gap-[16px]">
              <img src={Paperplane} alt="" />
              <div className="text-[#E6E6E6] self-center font-space w-[352px] ">
                <h2 className="text-[30px]">
                  <b>Have any project idea?</b>
                </h2>
                <div className="font-satoshi font-thin">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>
            </div>

            <div className="self-center">
              <Button>Contact Now</Button>
            </div>
          </div>

          <img src={Bgoffer} alt="" className="z-0" />
          <div className="w-[1138.78px] h-[170.67px] absolute inset-0 bg-black/10 z-10"></div>
        </div>
      </Section>
    </>
  );
};

export default offer;
