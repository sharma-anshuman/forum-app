import React from "react";
import { UseForum } from "../context/ForumContext";

const ProfileSnippet = () => {
  const {
    ForumObj: { postData },
  } = UseForum();
  return (
    <div className="flex absolute w-[100%] bottom-2 left-7 border border-gray-300 border-[2px] rounded-lg max-w-[15rem] justify-between items-center">
      <div className="flex items-center gap-2">
        <img className="h-10 w-10 rounded-full" src={postData.picUrl} alt="" />
        <div className="flex flex-col">
          <h3>{postData.name}</h3>
          <p className="-mt-[4px]">@{postData.username}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSnippet;
