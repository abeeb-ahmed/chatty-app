import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!displayName || !email || !password || !file)
      return alert("Fill in all inputs");
    setLoading(true);
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
          }
        });
      });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2>Chatty</h2>
        <p>Register</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Display name"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4577/4577383.png"
              alt=""
            />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Register</button>
          {error && <span className="errorMessage">Something went wrong!</span>}
        </form>
        <div>
          <span className="formBottom">
            Have an account?
            <Link to="/login" style={{ marginLeft: "5px" }}>
              <span>Login</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
