import React, { createContext, useContext, useReducer } from "react";
import { forumData } from "../db/ForumDB";

const MainForumContext = createContext();

const ForumContext = ({ children }) => {
  const forumHandler = (acc, { type, payload }) => {
    const getTime = (a) => {
      const date = new Date(a);
      const hour = date.getUTCHours(),
        minutes = date.getUTCMinutes(),
        seconds = date.getUTCSeconds();
      const x = Math.floor(hour / 10) == 0 ? "0" + String(hour) : String(hour);
      const y =
        Math.floor(minutes / 10) == 0 ? "0" + String(minutes) : String(minutes);
      const z =
        Math.floor(seconds / 10) == 0 ? "0" + String(seconds) : String(seconds);
      return x + y + z;
    };

    switch (type) {
      case "like": {
        return {
          ...acc,
          postData: {
            ...acc.postData,
            posts: [
              ...acc.postData.posts.map((item) =>
                item.postId === payload
                  ? { ...item, upvotes: item.upvotes + 1 }
                  : item
              ),
            ],
          },
        };
      }
      case "dislike": {
        return {
          ...acc,
          postData: {
            ...acc.postData,
            posts: [
              ...acc.postData.posts.map((item) =>
                item.postId === payload
                  ? { ...item, downvotes: item.downvotes + 1 }
                  : item
              ),
            ],
          },
        };
      }

      case "bookmark": {
        return {
          ...acc,
          postData: {
            ...acc.postData,
            posts: [
              ...acc.postData.posts.map((item) =>
                item.postId === payload
                  ? { ...item, isBookmarked: !item.isBookmarked }
                  : item
              ),
            ],
          },
        };
      }

      case "sortLatest": {
        return {
          ...acc,
          postData: {
            ...acc.postData,
            posts: [...acc.postData.posts].sort((a, b) =>
              getTime(b.createdAt).localeCompare(getTime(a.createdAt))
            ),
          },
        };
      }

      case "sortUpvote": {
        return {
          ...acc,
          postData: {
            ...acc.postData,
            posts: [...acc.postData.posts].sort(
              (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
            ),
          },
        };
      }
    }
  };

  const [ForumObj, dispatch] = useReducer(forumHandler, {
    postData: { ...forumData },
  });

  const elements = { ForumObj, dispatch };

  return (
    <MainForumContext.Provider value={elements}>
      {children}
    </MainForumContext.Provider>
  );
};

export const UseForum = () => {
  return useContext(MainForumContext);
};

export default ForumContext;
