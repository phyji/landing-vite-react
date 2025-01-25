import React from "react";
import Section from "./section";
import Header from "./header2";
import Card from "./cardprocess";
import Cardgradient from "../assets/cardgradient";
import Arrow1 from "../assets/svg/Arrow1.jsx";
const workprocess = () => {
  return (
    <>
      <Section id="3">
        <div className="w-full bg-[#0A0A0C]">
          <div className="w-[1151.99px] h-[700.99px] mx-auto">
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
            >
              <Header h2="about me" h1="My Work Process">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </Header>
            </div>
            <div className="relative w-[1151.99px] h-[450.99px] mt-[64px] flex items-center justify-center p-[30px]">
              <div className="absolute flex w-full top-[36%] justify-center gap-[150px] h-[100px] items-center" data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out">
                <Arrow1 />
                <Arrow1 rotate />
                <Arrow1 />
                <Arrow1 rotate />
                <Arrow1 />
              </div>
              <div className="flex self-start gap-[150px] absolute left-[40px]">
                <div
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out"
                >
                  <Card>Empathize</Card>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="400"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out"
                >
                  <Card>Ideate</Card>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="200"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out"
                >
                  <Card>Qualitative Test</Card>
                </div>
              </div>
              <div className="flex absolute gap-[150px] right-[35px] bottom-[50px]">
                <div data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out">

                <Card flex="self-end">Define</Card>
                </div>
                <div data-aos="fade-left"
                  data-aos-duration="400"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out">
                <Card flex="self-end">Prototype</Card>

                </div>
                <div data-aos="fade-left"
                  data-aos-duration="200"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out">

                <Card flex="self-end">Quantitative Test</Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cardgradient />
      </Section>
    </>
  );
};

export default workprocess;
