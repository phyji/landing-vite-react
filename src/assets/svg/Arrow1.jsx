import React from "react";

const Arrow1 = ({rotate, end, start}) => {
  return (
    <div className={`${rotate ? "-rotate-90" : ""} ${end ? "self-end" : ""} ${start ? "self-start" : ""}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.3943 25.248C24.9466 25.248 25.3943 24.8003 25.3943 24.248L25.3943 15.248C25.3943 14.6958 24.9466 14.248 24.3943 14.248C23.842 14.248 23.3943 14.6958 23.3943 15.248V23.248H15.3943C14.842 23.248 14.3943 23.6958 14.3943 24.248C14.3943 24.8003 14.842 25.248 15.3943 25.248L24.3943 25.248ZM0.144456 1.41243L23.6872 24.9552L25.1014 23.5409L1.55867 -0.0017845L0.144456 1.41243Z"
          fill="url(#paint0_linear_6_250)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6_250"
            x1="-2.52223"
            y1="-2.96581"
            x2="-10.4204"
            y2="18.9314"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#194BFD" />
            <stop offset="1" stop-color="#AD13FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Arrow1;
