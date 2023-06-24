import Avatar from "./Avatar";
import PostedTime from "./PostedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export default function CommentComp({ commentData, replyingTo }) {
  const { commentId, username, picUrl, likes, comment, createdAt } =
    commentData;
  console.log(commentData);

  return (
    <section className="flex gap-2 bg-white p-4">
      <Avatar imgUrl={picUrl} />
      <div className="gap flex w-full flex-col">
        <div className="flex items-center gap-2">
          <p>@{username}</p>
          •
          <PostedTime createAt={createdAt} />
        </div>
        <p className="text-gray-500">
          Replying to <span className="text-violet-600">@{replyingTo}</span>
        </p>
        <p className="py-2">{comment}</p>
        <div className="flex justify-between gap-16 border-t p-2">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faComment} />
          </button>
          <div></div>
        </div>
      </div>
    </section>
  );
}
