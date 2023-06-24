import React from "react";
import ForumRoutes from "./ForumRoutes";
import { BrowserRouter } from "react-router-dom";
import ForumContext from "./context/ForumContext";

const ForumMain = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ForumContext>
          <ForumRoutes />
        </ForumContext>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default ForumMain;
