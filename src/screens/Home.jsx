import React from "react";
import { useContext } from "react";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar";
import { MobileNavContext } from "../context/NavContext";

const Home = () => {
  const { state } = useContext(MobileNavContext);
  return (
    <div className="home">
      <div className="container">
        <div className={`sidebar ${state?.isOpen && "open"}`}>
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
