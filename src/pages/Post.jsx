import React from "react";
import { useParams } from "react-router-dom";
import { useForum } from "../contexts/DataProvider";
import PostCard from "../components/PostCard";
import CommentComp from "../components/Comment";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const {
    forum: { posts },
  } = useForum();

  const post = posts?.find((post) => post.postId === postId);

  return (
    <section className="h-full w-[500px] bg-white">
      <div className="flex items-center gap-2 border-b p-2 px-4">
        <button className="text-xl" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="text-xl font-semibold">Post</h1>
      </div>
      <PostCard postData={post} />
      <hr />
      {post?.comments?.map((co) => (
        <CommentComp
          key={co.commentId}
          commentData={co}
          replyingTo={post.username}
        />
      ))}
    </section>
  );
}
