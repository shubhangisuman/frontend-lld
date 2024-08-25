import React from "react";

function Shimmer() {
  return Array(20)
    .fill(0)
    .map((ele, i) => (
      <div key={i} className="p-5 m-5 border border-black">
        <div className="w-64 h-64 bg-gray-200" />
      </div>
    ));
}

export default Shimmer;
