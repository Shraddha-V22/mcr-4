import { POST } from "../../utils/reducerTypes";

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case POST.UPVOTE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.postId === payload
            ? { ...post, upvotes: post.upvotes + 1 }
            : post
        ),
      };
    case POST.DOWNVOTE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.postId === payload
            ? { ...post, downvotes: post.downvotes + 1 }
            : post
        ),
      };
    case POST.BOOKMARK:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.postId === payload
            ? { ...post, isBookmarked: !post.isBookmarked }
            : post
        ),
      };
    case POST.SORT_POSTS:
      return {
        ...state,
        sortBy: payload,
      };
    default:
      return state;
  }
};
