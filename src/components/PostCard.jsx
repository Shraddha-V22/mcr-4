import { POST } from "../../utils/reducerTypes";
import { useForum } from "../contexts/DataProvider";
import Avatar from "./Avatar";
import PostedBy from "./PostedBy";
import PostedTime from "./PostedTime";
import Tag from "./Tag";
import { useNavigate } from "react-router-dom";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkFilled } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostCard({ postData }) {
  const navigate = useNavigate();
  const { dispatch } = useForum();
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    isBookmarked,
  } = postData;
  return (
    <section
      onClick={() => navigate(`/post/${postId}`)}
      className="flex w-[500px] cursor-pointer gap-4 bg-white p-4"
    >
      <div className="flex flex-col justify-start">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: POST.UPVOTE, payload: postId });
          }}
          className="text-5xl text-gray-400 active:text-violet-600"
        >
          <FontAwesomeIcon icon={faCaretUp} />
        </button>
        <p className="text-violet-600">{upvotes - downvotes}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: POST.DOWNVOTE, payload: postId });
          }}
          className="text-5xl text-gray-400 active:text-violet-600"
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
      <div className="flex flex-grow flex-col gap-1">
        <div className="flex items-center gap-2">
          <Avatar imgUrl={picUrl} />
          <PostedBy username={username} />
          <span className="text-gray-500">•</span>
          <PostedTime createAt={createdAt} />
        </div>
        <h2 className="text-xl font-extrabold capitalize">{post}</h2>
        <div className="flex gap-2">
          {tags?.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <p className="leading-5">{postDescription}</p>
        <div className="flex w-full justify-between border-t border-black p-2">
          <button>
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button>
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: POST.BOOKMARK, payload: postId });
            }}
          >
            {isBookmarked ? (
              <FontAwesomeIcon icon={faBookmarkFilled} />
            ) : (
              <FontAwesomeIcon icon={faBookmark} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
