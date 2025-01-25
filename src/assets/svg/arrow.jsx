import React from "react";

const arrow = () => {
  return (
    <div>
      <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="25" x2="80" y2="25" stroke="white" stroke-width="4" />
        <polyline
          points="60,12 80,25 60,37"
          fill="none"
          stroke="white"
          stroke-width="4"
        />
      </svg>
    </div>
  );
};

export default arrow;
