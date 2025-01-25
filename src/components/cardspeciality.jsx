import React from "react";
import Circle from "../assets/svg/circle";
import Subtract from "../assets/Subtract.png";
import Gradient from "../assets/Gradient";

const cardspeciality = ({ children, circle }) => {
  const classes = `relative bg-gradient-225 from-[#0E0E10] from-100% to-[#17171A] to-23% w-[369.33px] h-[250px]  pl-[24px] pr-[24px] pb-[24px] text-center overflow-hidden`;
  return (
    <>
      <div className={classes}>
        {circle ? (
          <div className="absolute bottom-0 left-[-30px]">
            <Circle id="3" r="50" />
            <Gradient />
          </div>
        ) : (
          ""
        )}
        <div>
            {children}
        </div>
      </div>
    </>
  );
};

export default cardspeciality;
