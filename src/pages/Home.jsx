import React from "react";
import PostCard from "../components/PostCard";
import { useForum } from "../contexts/DataProvider";
import SortFilter from "../components/SortFilter";

export default function Home() {
  const { forum, sortedPosts } = useForum();
  return (
    <div className="">
      <section className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">
          {forum.sortBy === "latest" ? "Latest Posts" : "Top Posts"}
        </h1>
        {sortedPosts?.map((post) => (
          <PostCard key={post.id} postData={post} />
        ))}
      </section>
    </div>
  );
}
