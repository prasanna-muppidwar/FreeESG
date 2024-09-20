import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-[10%] text-2xl">
      <div className="relative w-4 h-4 m-2 rounded-full bg-[#606c38] animate-dot1"></div>
      <div className="relative w-4 h-4 m-2 rounded-full bg-[#283618] animate-dot2"></div>
      <div className="relative w-4 h-4 m-2 rounded-full bg-[#fefae0] animate-dot3"></div>
      <div className="relative w-4 h-4 m-2 rounded-full bg-[#dda15e] animate-dot4"></div>
      <div className="relative w-4 h-4 m-2 rounded-full bg-[#bc6c25] animate-dot5"></div>
    </div>
  );
};

export default Loader;