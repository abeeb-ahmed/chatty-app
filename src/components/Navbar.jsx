import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { MobileNavContext } from "../context/NavContext";

const Navbar = () => {
  const { dispatch } = useContext(MobileNavContext);
  return (
    <div className="navbar">
      <div className="left">
        <span>Jane</span>
      </div>
      <div className="right">
        <VideocamIcon className="icon" />
        <PersonAddAlt1Icon className="icon" />
        <MenuIcon
          className="icon mobile"
          onClick={() => dispatch({ type: "TOGGLE" })}
        />
      </div>
    </div>
  );
};

export default Navbar;
