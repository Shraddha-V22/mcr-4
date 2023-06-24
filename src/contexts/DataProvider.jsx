import { useReducer } from "react";
import { createContext } from "react";
import { forumData } from "../data/forumData";
import { dataReducer } from "../reducer/dataReducer";
import { useContext } from "react";
import { useMemo } from "react";

const ForumContext = createContext();

const initialData = {
  posts: [...forumData.posts],
  sortBy: "",
};

export default function DataProvider({ children }) {
  const [forum, dispatch] = useReducer(dataReducer, initialData);

  const sortedPosts = useMemo(() => {
    let sortedData = [...forum.posts];
    if (forum.sortBy === "top") {
      sortedData = [...forum.posts].sort(
        (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
      );
    }
    if (forum.sortBy === "latest") {
      sortedData = [...forum.posts].sort((a, b) =>
        new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1
      );
    }
    return sortedData;
  }, [forum]);

  console.log(sortedPosts);

  return (
    <ForumContext.Provider value={{ forum, sortedPosts, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
}

export const useForum = () => useContext(ForumContext);
