import React from "react";

const Sidebar = () => {
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
      </div>
      <div className="sidebarContainer">
        <div className="search">
          <input type="text" placeholder="Find a user" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
