import {
  faBookmark,
  faCompass,
  faIdBadge,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SideNavbar = () => {
  return (
    <div className="flex items-center text-left bg-slate-100 flex-col p-2">
      <div>
        <div className="flex gap-1 font-semibold p-2 items-center hover:cursor-pointer">
          <FontAwesomeIcon icon={faHouseChimney} />
          <p>Home</p>
        </div>
        <div className="flex gap-1 font-semibold p-2 items-center hover:cursor-pointer">
          <FontAwesomeIcon icon={faCompass} />
          <p>Explore</p>
        </div>
        <div className="flex gap-1 font-semibold p-2 items-center hover:cursor-pointer">
          <FontAwesomeIcon icon={faBookmark} />
          <p>Bookmarks</p>
        </div>
        <div className="flex gap-1 font-semibold p-2 items-center hover:cursor-pointer">
          <FontAwesomeIcon icon={faUser} />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
