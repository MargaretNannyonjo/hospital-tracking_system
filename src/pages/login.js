import React, { useState } from "react";
import { Link } from "react-router-dom";
import system_icon from "../img/hospital_icon.webp";

export const Login = () => {
  const [showLoginDetails, setShowLoginDetails] = useState(false);
  const [showSigninDetails, setShowSigninDetails] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleLoginDetails = () => {
    setShowLoginDetails(!showLoginDetails);
    setShowSigninDetails(false); // Ensure the other section is hidden
  };

  const toggleSigninDetails = () => {
    setShowSigninDetails(!showSigninDetails);
    setShowLoginDetails(false); // Ensure the other section is hidden
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <div>
      <img
        src={system_icon}
        alt=""
        style={{ width: "12rem", height: "12rem", marginTop: "2rem" }}
      />

      {!showLoginDetails && !showSigninDetails && (
        <div className="Signin">
          <button onClick={toggleLoginDetails}>LOGIN</button>
          <button onClick={toggleSigninDetails}>SIGNIN</button>
        </div>
      )}

      {showLoginDetails && (
        <div className="ShowLoginDetails">
          <p>Email: </p>
          <input placeholder="Enter email" />
          <p>Password: </p>
          <input type="password" placeholder="Enter password" />
          <Link to="/home">
            <button onClick={toggleLoginDetails}>LOGIN</button>
          </Link>
          <p>
            You don't have an account?{" "}
            <a href="#" onClick={toggleSigninDetails}>
              Signin
            </a>
          </p>
        </div>
      )}

      {showSigninDetails && (
        <div className="ShowLoginDetails">
          <input placeholder=" Enter full name" />
          <input placeholder="Enter email" />
          <input placeholder="Cadre" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Re-enter password" />
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember Me
          </label>
          <Link to="/home">
            <button onClick={toggleSigninDetails}>SIGNIN</button>
          </Link>
          <p>
            You have an account?{" "}
            <a href="#" onClick={toggleLoginDetails}>
              Login
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
