import React from "react";

const circle = ({color,  id, r}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 100 100"
    >
      
      <defs>
        <pattern
          id={`diagonal-stripes${id}`}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="5" height="10" fill={color ? color : "#353535"} />
        </pattern>
     
      </defs>
      <circle cx="50" cy="50" r={r} fill={`url(#diagonal-stripes${id})`} className={color? "" : "opacity-35"} />
    </svg>
  );
};

export default circle;
