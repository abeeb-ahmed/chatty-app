import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>Jane</span>
      </div>
      <div className="right">
        <VideocamIcon className="icon" />
        <PersonAddAlt1Icon className="icon" />
        <MoreHorizIcon className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
