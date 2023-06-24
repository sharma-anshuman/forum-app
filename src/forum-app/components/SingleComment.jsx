import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCircle,
  faEllipsisV,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleComment = ({ item, username }) => {
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
  return (
    <React.Fragment>
      <div className="z-10 flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex p-3 flex-col gap-1">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="flex w-8 mr-3 items-center">
                <img className="rounded-full" src={item.picUrl} />
              </div>
              <div className="flex justify-left items-center flex-col">
                <div className="flex">
                  <h3 className="mt-1 mr-1">{item.name}</h3>
                  <p className="mt-1 mr-1">@{item.username}</p>
                  <span>
                    <FontAwesomeIcon
                      className="ml-2 mt-[3px] text-gray-500 text-[8px] mr-1"
                      icon={faCircle}
                    />
                  </span>
                  <p className="text-[14px] text-gray-500 ml-[5px] mt-[7px]">
                    {getTime(item.createdAt)}
                  </p>
                </div>
                <div className="tags">
                  <h1 className="text-xs mb-1 -ml-[8rem] text-gray-500 font-semibold">
                    Replying to @{username}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <FontAwesomeIcon className="cursor-pointer" icon={faEllipsisV} />
            </div>
          </div>
          <div className="pl-[3.3rem]">
            <p>{item.comment}</p>
          </div>
        </div>

        <hr />
        <div className="flex justify-between items-center p-2 px-[4rem]">
          <div className="flex">
            <FontAwesomeIcon
              className="cursor-pointer text-blue-500"
              icon={faHeart}
            />
          </div>
          <FontAwesomeIcon
            className="cursor-pointer text-blue-500"
            icon={faComment}
          />
          <FontAwesomeIcon
            className="cursor-pointer text-blue-500"
            icon={faShareAlt}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleComment;
