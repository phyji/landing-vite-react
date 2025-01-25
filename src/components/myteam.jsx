import React from "react";
import Header2 from "./header2";
import Section from "./section";
import Cardteam from "./cardteam";
import ImgOne from "../assets/ImgOne.png"
import ImgTwo from "../assets/ImgTwo.png"
import ImgTri from "../assets/ImgTri.png"
import ImgFour from "../assets/ImgFour.png"
const myteam = () => {
  return (
    <>
      <Section id="6">
        <div className="w-[1139.58px] h-[524.7px] mx-auto mt-[100px]">
          <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="50" data-aos-easing="ease-in-out">
          <Header2 h1="My Team Members" h2="TEAMS">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </Header2>

          </div>
          <div className="w-full h-[329.7px] flex justify-center gap-[50px] mt-[64px]">
            <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="50" data-aos-easing="ease-in-out">
                <Cardteam>
                <img src={ImgOne} alt="" />
                </Cardteam>

            </div>
            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="50" data-aos-easing="ease-in-out">

                <Cardteam>
                <img src={ImgTwo} alt="" />
                </Cardteam>
            </div>
            <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="50" data-aos-easing="ease-in-out">
                <Cardteam>
                <img src={ImgTri} alt="" />
                </Cardteam>

            </div>
            <div data-aos="fade-up" data-aos-duration="1300" data-aos-delay="50" data-aos-easing="ease-in-out">
                <Cardteam>
                <img src={ImgFour} alt="" />
                </Cardteam>

            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default myteam;
