import React from "react";

function Skeleton() {
  return (
    <div className="content w-full  mt-10 grid gap-2 lg:grid-cols-4  md:grid-cols-2">
      {/* skeleton */}
      {[1, 2, 3, 4, 5].map((item) => (
        <div className=" h-72 w-96 md:w-80 bg-slate-200 animate-pulse"></div>
      ))}
    </div>
  );
}

export default Skeleton;
