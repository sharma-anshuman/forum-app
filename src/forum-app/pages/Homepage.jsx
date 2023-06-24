import React from "react";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar";
import { UseForum } from "../context/ForumContext";
import SinglePost from "../components/SinglePost";
import ProfileSnippet from "../components/ProfileSnippet";

const Homepage = () => {
  const { ForumObj, dispatch } = UseForum();
  const sortHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "latest") {
      dispatch({ type: "sortLatest", payload: "" });
    }
    if (e.target.value === "upvotes") {
      dispatch({ type: "sortUpvote", payload: "" });
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-between relative">
        <div className="basis-3/12">
          <SideNavbar />
        </div>
        <div className="flex flex-col gap-4 basis-6/12">
          <h1 className="text-2xl font-semibold">Latest Posts</h1>
          {ForumObj.postData.posts.map((item) => (
            <SinglePost item={item} />
          ))}
        </div>
        <div className="basis-2/12">
          <h1 className="text-xl">Sort By</h1>
          <select
            onChange={sortHandler}
            className="outline-none w-[80%] border border-2 border-blue-500 mt-2"
          >
            <option value="none">Select option</option>
            <option value="latest">Latest Posts</option>
            <option value="upvotes">Most upvotes</option>
          </select>
        </div>
        <div className="top-0 right-0">
          <ProfileSnippet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
