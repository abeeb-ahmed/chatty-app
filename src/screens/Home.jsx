import React from "react";
import { useContext } from "react";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="homeSidebar">
          <Sidebar />
        </div>
        <div className="homeMessages">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Home;
