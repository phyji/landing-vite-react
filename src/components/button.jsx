import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="px-4 py-2 bg-gradient-150 from-[#194BFD] to-[#AD13FB] text-white rounded-full hover:from-[#AD13FB] hover:to-[#194BFD]">
        {children}
      </button>
    </div>
  );
};

export default Button;
