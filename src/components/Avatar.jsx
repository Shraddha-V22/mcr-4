import React from "react";

export default function Avatar({ imgUrl }) {
  return (
    <div className="h-[35px] w-[35px] rounded-full bg-gray-100">
      <img className="h-full w-full object-cover" src={imgUrl} alt="" />
    </div>
  );
}
