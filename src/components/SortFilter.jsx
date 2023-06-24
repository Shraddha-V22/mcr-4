import React from "react";
import { useState } from "react";
import { useForum } from "../contexts/DataProvider";
import { POST } from "../../utils/reducerTypes";
import { useEffect } from "react";

export default function SortFilter() {
  const [openSort, setOpenSort] = useState(false);
  const { dispatch, forum } = useForum();

  useEffect(() => {
    openSort &&
      document.body.addEventListener("click", () => setOpenSort(false));
    return () =>
      openSort &&
      document.body.removeEventListener("click", () => setOpenSort(false));
  }, [openSort]);

  return (
    <section className="w-[150px]">
      <button
        className="w-full border-b border-violet-400 bg-violet-100 p-2 px-4"
        onClick={(e) => {
          e.stopPropagation();
          setOpenSort((prev) => !prev);
        }}
      >
        {forum.sortBy === "latest" ? "Latest Posts" : "Top Posts"}
        <span className="text-xs"> ▼</span>
      </button>
      {openSort && (
        <div className="bg-violet-100">
          <p
            onClick={() =>
              dispatch({ type: POST.SORT_POSTS, payload: "latest" })
            }
            className="cursor-pointer p-2 px-4 capitalize hover:bg-violet-200"
          >
            latest post
          </p>
          <p
            onClick={() => dispatch({ type: POST.SORT_POSTS, payload: "top" })}
            className="cursor-pointer p-2 px-4 capitalize hover:bg-violet-200"
          >
            top post
          </p>
        </div>
      )}
    </section>
  );
}
