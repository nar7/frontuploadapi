import React from "react";
import "../App.css";

function Skeleton() {
  return (
    <div className="w-full justify-center md:justify-start mt-10 flex flex-wrap content ">
      {/* skeleton */}
      {[1, 2, 3, 4, 5].map((item) => (
        <div className="px-6 py-2 lg:w-1/3 md:w-1/2 xl:w-1/4 ">
          <div className=" photo bg-slate-200 animate-pulse  w-full"></div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
