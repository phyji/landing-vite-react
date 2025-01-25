import React from "react";
import Header2 from "./header2";
import Section from "./section";
import Frame1 from "../assets/Frame 1.png";
import Frame2 from "../assets/Frame 2.png";
import Button from "./button";

const completedproject = () => {
  return (
    <>
      <Section id="4">
        <div className="w-full bg-[#0A0A0C]">
          <div className="w-full mx-auto">
            <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="50" data-aos-easing="ease-in-out">
            <Header2 h2="portofolios" h1="My Completed Projects">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </Header2>

            </div>
            <div className="relative w-full overflow-hidden mt-[64px] z-10" data-aos="fade-up" data-aos-duration="700" data-aos-delay="50" data-aos-easing="ease-in-out">
              <div className="absolute w-full z-20 inset-0 bg-black/50"></div>
              <div className="filter blur-sm">
                <img src={Frame1} alt="" />
                <img src={Frame2} alt="" className="mt-[10px]" />
              </div>
              <div className="absolute z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <Button>View All Projects</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default completedproject;
