import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2>Chatty</h2>
        <p>Login</p>
        <form>
          <input type="text" placeholder="Display name" required />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <span>
          Don't have an account?
          <Link to="/register" style={{ marginLeft: "5px" }}>
            <span>Register</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
