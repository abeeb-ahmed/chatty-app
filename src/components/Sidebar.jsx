import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext } from "react";
import { MobileNavContext } from "../context/NavContext";
const Sidebar = () => {
  const { dispatch } = useContext(MobileNavContext);
  return (
    <div className="sidebar">
      <div className="header">
        <div className="left">
          <span>Chatty</span>
        </div>
        <div className="right">
          <img
            className="avatar"
            src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
            alt=""
          />
          <span>John</span>
          <button>Sign out</button>
        </div>
        <CancelIcon
          className="closeNav"
          onClick={() => dispatch({ type: "CLOSE" })}
        />
      </div>
      <div className="sidebarContainer">
        <div className="search">
          <input type="text" placeholder="Find a user" />
        </div>
        <div className="users">
          <div className="user">
            <img
              src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
              alt=""
            />
            <div className="text">
              <p>Jane</p>
              <span>Hello</span>
            </div>
          </div>
          <div className="user">
            <img
              src="https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4="
              alt=""
            />
            <div className="text">
              <p>Jane</p>
              <span>Hello</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
