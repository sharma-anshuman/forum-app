import React from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import PostPage from "./pages/PostPage";

const ForumRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default ForumRoutes;
