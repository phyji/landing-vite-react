import React from "react";
import Section from "./section";
import User from "../assets/user.png";
import Sign from "../assets/signature.png"
import Circle from "../assets/svg/circle.jsx"
import Star from "../assets/Star.svg"
import Teks from "../assets/Teks.svg"

const feedback = () => {
  return (
    <>
      <Section id="5">
        <div className="relative w-full h-[584.43px] flex justify-center mt-[140px] items-center">
          <div className="flex h-[443.38px] gap-[100px] relative">
            <div className="h-[443.38px] w-[369px] overflow-hidden" data-aos="fade-right" data-aos-duration="700" data-aos-delay="50" data-aos-easing="ease-in-out">
              <img src={User} alt="" />
            </div>
            <div className="absolute top-[-45px] left-[-40px] " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" data-aos-easing="ease-in-out">
                <img className ="h-[108px] w-[108px]" src={Star} alt="" />
            </div>
            <div className="absolute bottom-[10px] right-[30px] " data-aos="fade-left" data-aos-duration="800" data-aos-delay="50" data-aos-easing="ease-in-out">
                <img className ="h-[47.41px] w-[47.41px]" src={Star} alt="" />
            </div>
            <div className="absolute bottom-[-65px] left-[300px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" data-aos-easing="ease-in-out">
                <img src={Teks} alt="" />
            </div>
            <div className="w-[684px] h-[335.4px] text-[#E6E6E6] font-space text-[18px] flex flex-col self-center" data-aos="fade-left" data-aos-duration="700" data-aos-delay="50" data-aos-easing="ease-in-out">
              <h3>
                <b>“Service is good and I recommend”</b>
              </h3>

              <div className="mt-[50px] font-satoshi text-justify text-[14px]" >
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
                <br />
                <p>
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.Amet minim mollit non
                  deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
                <br />
                <p>
                  Exercitation veniam consequat sunt nostrud amet.Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
              <div className="mt-[20px]">
                <img src={Sign} alt="" />
              </div>

            </div>
          </div>
          <div className="absolute top-[0px]">
            <Circle id="silver" r="25"/>
          </div>
        </div>
      </Section>
    </>
  );
};

export default feedback;
