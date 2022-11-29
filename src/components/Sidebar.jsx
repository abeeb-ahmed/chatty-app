import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext } from "react";
import { MobileNavContext } from "../context/NavContext";
import { signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { ChatContext } from "../context/ChatContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(MobileNavContext);
  const { chatDispatch } = useContext(ChatContext);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  // const { currentUser } = useContext(AuthContext);
  const currentUser = auth.currentUser;

  useEffect(() => {}, [user]);

  // sign out user
  const handleSignOut = async () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // handle user search
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  // handle enter key press to search
  const handleKey = (e) => {
    e.key === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    dispatch({ type: "CHANGE_USER", payload: user });

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // create user chats
        await setDoc(doc(db, "chats", combinedId), {
          messages: [],
        });
      } else {
        await updateDoc(doc(db, "userChat", user.uid), {
          [combinedId + ".userInfo"]: {
            displayName: currentUser.displayName,
            uid: currentUser.uid,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChat", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            displayName: user.displayName,
            uid: user.uid,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      setErr(true);
      console.log(error);
    }
    setUser(null);
    setUsername("");
  };

  return (
    <div className="sidebar">
      <div className="header">
        <div className="left">
          <span>Chatty</span>
        </div>
        <div className="right">
          <img
            className="avatar"
            src={
              currentUser?.photoURL ||
              "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg"
            }
            alt=""
          />
          <span>{currentUser?.displayName}</span>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
        <CancelIcon
          className="closeNav"
          onClick={() => dispatch({ type: "CLOSE" })}
        />
      </div>
      <div className="sidebarContainer">
        <div className="search">
          <input
            type="text"
            placeholder="Find a user"
            onKeyDown={handleKey}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {err && <span style={{ color: "white" }}>User not found!</span>}
        <div className="users">
          {user && user.displayName !== currentUser.displayName && (
            <div className="user" onClick={handleSelect}>
              <img src={user.photoURL} alt="" />
              <div className="text">
                <p>{user.displayName}</p>
                <span>Hello</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
