import React from "react";

const header2 = ({h2, children, h1}) => {
    const header1 = h1.split(" ");
    const [word1, ...word] = header1
    const header2 = h2.toUpperCase()

  return (
    <div className="w-[509.41px] h-[131px] mx-auto text-white font-space text-center">
      <div className="text-[#E6E6E6] text-[14px] font-satoshi">{header2}</div>
      <h2 className="text-[32px]">
        {word1} <span className="text-[#194BFD]">{...word.join(" ")}</span>
      </h2>
      <div className="font-thin">
        {children}
      </div>
    </div>
  );
};

export default header2;
