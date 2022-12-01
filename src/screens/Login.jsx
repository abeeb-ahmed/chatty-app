import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(true);
        setErrorMessage(error.message);
      });
    setLoading(false);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2>Chatty</h2>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={loading}>Sign in</button>
          {error && (
            <span className="errorMessage">
              {errorMessage || "Something went wrong!"}
            </span>
          )}
        </form>
        <div className="formBottom">
          <span>
            Don't have an account?
            <Link to="/register" style={{ marginLeft: "5px" }}>
              <span>Register</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
