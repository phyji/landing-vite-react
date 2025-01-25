import React from "react";
import Section from "./section";
import Speciality from "./cardspeciality";
import Icon from "./design/Icon";
import Email from "../assets/Email.svg";
import Store from "../assets/storefront.svg";
import Querystats from "../assets/query_stats.svg";
import Line from "./design/line";
import Header from "./header2";

const speciality = () => {
  return (
    <>
      <Section id="2">
        <div className="w-full bg-[#0A0A0C] mb-[10rem]">
          <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="50" data-aos-easing="ease-in-out">
            <Header h1="My Speciality" h2="speciality">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </Header>
          </div>
          <div
            className="flex justify-center gap-[20px] font-space text-center mt-[64px]"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            <Speciality>
              <Icon>
                <img src={Email} alt="" />
              </Icon>
              <div>
                <div className="mx-auto text-lg text-[#E6E6E6] font-bold">
                  <h1>Email marketing</h1>
                </div>
                <Line />
                <div className="text-center font-satoshi font-thin text-[#E6E6E6] text-[14px]">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </Speciality>
            <Speciality>
              <Icon>
                <img src={Store} alt="" />
              </Icon>
              <div>
                <div className="mx-auto text-lg text-[#E6E6E6] font-bold">
                  <h1>Email marketing</h1>
                </div>
                <Line />
                <div className="text-center font-satoshi font-thin text-[#E6E6E6] text-[14px]">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </Speciality>
            <Speciality>
              <Icon>
                <img src={Querystats} alt="" />
              </Icon>
              <div>
                <div className="mx-auto text-lg text-[#E6E6E6] font-bold">
                  <h1>Email marketing</h1>
                </div>
                <Line />
                <div className="text-center font-satoshi font-thin text-[#E6E6E6] text-[14px]">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </Speciality>
          </div>
        </div>
      </Section>
    </>
  );
};

export default speciality;
