import React from "react";

const cardprocess = ({children, flex}) => {
  return (
    <>
      <div className={`relative h-[200px] w-[200px] ${flex ? flex : ""}`} >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-45"
        >
          {/* Rounded rectangle (diamond shape after rotation) */}
          <rect
            x="27.925"
            y="27.925"
            width="144.15"
            height="144.15"
            rx="12"
            ry="12"
            fill="#0E0E10"
            stroke="url(#cardgradient)"
            strokeWidth="1"
          />
          <rect
            x="7"
            y="7"
            width="184.16"
            height="184.16"
            rx="12"
            ry="12"
            fill="none"
            stroke="url(#cardgradient)"
            strokeWidth="1"
            strokeDasharray="8 4"
          />
        </svg>
        <div className="text-[#E6E6E6] font-space text-[18px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2>{children}</h2>
        </div>
      </div>
    </>
  );
};

export default cardprocess;
