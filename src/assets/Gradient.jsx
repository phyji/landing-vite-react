import React from "react";

const Gradient = () => {
  return (
    <svg className="block w-0 h-0" >
      <defs>
        <linearGradient id={`gradient`} gradientTransform="rotate(45)">
          <stop offset="80%" stopColor="white" /> 
          <stop offset="100%" stopColor="transparent" /> 
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Gradient;
