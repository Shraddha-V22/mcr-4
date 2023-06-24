import React from "react";
import { postedTime } from "../../utils/postedTime";

export default function PostedTime({ createAt = "time" }) {
  return <p className="text-gray-500">{postedTime(createAt)}</p>;
}
