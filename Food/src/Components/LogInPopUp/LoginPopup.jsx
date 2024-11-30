import React from "react";
import "./LoginPopUp.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentstate] = useState("sign up");
  return (
    <div className="login-pop-up">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="kariuki@gmail.com" required />
          <input type="password" placeholder="***" required />
        </div>
        <button>
          {currentState === "sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing,I agree to the terms of use & privacy policies.</p>
        </div>
        {currentState === "login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentstate("sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentstate("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
