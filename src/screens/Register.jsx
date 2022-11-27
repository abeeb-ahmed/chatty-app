import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase";

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
    setLoading(true);
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          //   Add images to firestore
          /** @type {any} */
          const metadata = {
            contentType: "image/jpeg",
          };

          const date = Date.now();

          const storageRef = ref(storage, `${displayName + date}`);
          const uploadTask = uploadBytesResumable(storageRef, file, metadata);

          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on("state_changed", () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              // update current user profile
              updateProfile(auth.currentUser, {
                photoURL: downloadURL,
              });
              //   add to users collection in firestore
              setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
            });
          });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(true);
          console.log(errorMessage);
        });
    } catch (error) {
      setError(true);
      console.log(error);
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
