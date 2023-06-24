import React, { useState } from "react";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faBookmark,
  faComment,
  faDotCircle,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowDown,
  faArrowUp,
  faArrowUpFromBracket,
  faCircle,
  faBookmark as Bookmarked,
  faEllipsis,
  faEllipsisH,
  faEllipsisV,
  faListDots,
  faShare,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseForum } from "../context/ForumContext";
import { useNavigate } from "react-router";

const SinglePost = ({ item }) => {
  const { dispatch } = UseForum();
  const navigate = useNavigate();

  const downvoteHandler = () => {
    dispatch({ type: "dislike", payload: item.postId });
  };
  const upvoteHandler = () => {
    dispatch({ type: "like", payload: item.postId });
  };
  const bookmarkHandler = () => {
    dispatch({ type: "bookmark", payload: item.postId });
  };
  const getTime = (str) => {
    const date = new Date(str);
    return (
      String(date.getHours()) +
      ":" +
      String(date.getMinutes()) +
      ":" +
      String(date.getSeconds())
    );
  };
  const flagup = item.upvotes - item.downvotes > 0;
  const flagdown = item.upvotes - item.downvotes < 0;

  return (
    <div className="flex shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="p-1 pt-4 flex flex-col items-center basis-3/12">
        <div
          className={`text-xl cursor-pointer ${flagup ? "text-blue-500" : ""}`}
          onClick={upvoteHandler}
        >
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </div>
        <div>{item.upvotes - item.downvotes}</div>
        <div
          className={`text-xl cursor-pointer ${
            flagdown ? "text-blue-500" : ""
          }`}
          onClick={downvoteHandler}
        >
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </div>
      </div>
      <div className="z-10 flex flex-col">
        <div className="flex p-3 flex-col gap-1">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="flex w-8 mr-3 items-center">
                <img className="rounded-full" src={item.picUrl} />
              </div>
              <div className="flex justify-left items-center flex-col">
                <div className="flex">
                  <p className="mt-1">
                    Posted by <span>@{item.username}</span>
                  </p>
                  <span>
                    <FontAwesomeIcon
                      className="ml-2 mt-[3px] text-[8px]"
                      icon={faCircle}
                    />
                  </span>
                  <p className="text-[14px] text-gray-500 ml-[5px] mt-[7px]">
                    {getTime(item.createdAt)}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <FontAwesomeIcon className="cursor-pointer" icon={faEllipsisV} />
            </div>
          </div>
          <div className="tags">
            <h1 className="text-xl mb-1 font-bold">{item.post}</h1>
            <div className="flex gap-3">
              {item.tags.map((tag) => (
                <div className="py-[1px] px-2 text-sm rounded bg-blue-500 text-white font-semibold">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p>{item.postDescription}</p>
          </div>
        </div>

        <hr />
        <div className="flex justify-between items-center p-2">
          <div className="flex">
            <FontAwesomeIcon
              onClick={() => navigate(`/post/${item.postId}`)}
              className="cursor-pointer text-blue-500"
              icon={faComment}
            />
          </div>
          <FontAwesomeIcon
            className="cursor-pointer text-blue-500"
            icon={faShareAlt}
          />
          <FontAwesomeIcon
            onClick={bookmarkHandler}
            className="cursor-pointer text-blue-500"
            icon={item.isBookmarked ? Bookmarked : faBookmark}
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
