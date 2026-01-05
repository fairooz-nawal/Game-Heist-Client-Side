// LoadingPage.jsx
import React from "react";

const LoadingPage = ({ message = "Loading, please wait..." }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#0b0c2a] via-[#1a1a3d] to-[#0d0d1f] z-50">
      
      {/* Neon spinning ring */}
      <div className="w-24 h-24 rounded-full border-4 border-t-transparent border-b-transparent border-l-purple-500 border-r-cyan-400 animate-spin mb-6 shadow-[0_0_25px_rgb(128,90,255)] shadow-cyan-500/50"></div>
      
      {/* Loading text */}
      <p className="text-purple-300 text-xl lg:text-3xl font-bold animate-pulse mb-4">
        {message}
      </p>
      
      {/* Glowing bouncing dots */}
      <div className="flex gap-4">
        <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/70 animation-delay-100"></span>
        <span className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/70 animation-delay-200"></span>
        <span className="w-4 h-4 bg-violet-400 rounded-full animate-bounce shadow-lg shadow-violet-400/70 animation-delay-300"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
