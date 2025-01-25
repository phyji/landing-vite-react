import React from "react";
import Circle from "../../assets/svg/circle";
import Line from "./line";

const Icon = ({ children }) => {
  return (
    <>
      <div className="relative mx-auto w-[100px] h-[100px] flex flex-col items-center justify-center">
          <Circle id="4" r="25" />
        <div className="absolute top-[5px] right-[5px] mt-[16px]">{children}</div>
      </div>
    </>
  );
};

export default Icon;
