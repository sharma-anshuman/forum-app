import React from "react";
import { useNavigate, useParams } from "react-router";
import SinglePost from "../components/SinglePost";
import { UseForum } from "../context/ForumContext";
import SideNavbar from "../components/SideNavbar";
import Navbar from "../components/Navbar";
import SingleComment from "../components/SingleComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBackspace,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PostPage = () => {
  const { id } = useParams();
  const { ForumObj } = UseForum();
  const navigate = useNavigate();
  const item = ForumObj.postData.posts.find(({ postId }) => postId === id);

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-between">
        <div className="basis-3/12">
          <SideNavbar />
        </div>
        <div className="flex flex-col gap-4 basis-6/12">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              onClick={() => navigate("/")}
              className="hover:text-blue-500 cursor-pointer font-[700]"
              icon={faArrowLeft}
            />
            <h1 className="text-2xl font-semibold">Post</h1>
          </div>
          <SinglePost item={item} />
          <div>
            {item.comments.map((comment) => (
              <SingleComment item={comment} username={item.username} />
            ))}
          </div>
        </div>
        <div className="basis-2/12">
          <h1 className="text-xl">Sort By</h1>
          <select className="outline-none w-[80%] border border-2 border-blue-500 mt-2">
            <option value="none">Select option</option>
            <option value="latest">Latest Posts</option>
            <option value="upvotes">Most upvotes</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostPage;
