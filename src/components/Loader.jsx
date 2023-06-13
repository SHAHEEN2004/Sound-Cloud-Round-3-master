import React from "react";
import "../loader.css"

const Loader = () => {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-16 h-16 rounded-full bg-purple-900 flex justify-center items-center bigC">
        <div className="w-12 h-12 rounded-full bg-purple-500"></div>
      </div>
    </div>
  );
};

export default Loader;
