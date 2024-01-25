import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import system_icon from "../img/hospital_icon.webp";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {
  const [showLoginDetails, setShowLoginDetails] = useState(false);
  const [showSigninDetails, setShowSigninDetails] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const toggleLoginDetails = () => {
    setShowLoginDetails(!showLoginDetails);
    setShowSigninDetails(false);
  };

  const toggleSigninDetails = () => {
    setShowSigninDetails(!showSigninDetails);
    setShowLoginDetails(false);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("This field is required"),
    password: yup.string().min(6).max(15).required("This field is required"),
    fullName: showSigninDetails
      ? yup.string().required("This field is required")
      : yup.string().notRequired(),
    cadre: showSigninDetails
      ? yup.string().required("This field is required")
      : yup.string().notRequired(),
    confirmPassword: showSigninDetails
      ? yup
          .string()
          .oneOf([yup.ref("password"), null], "Passwords must match")
          .required("This field is required")
      : yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Log the form data (you can add your logic here)
    // Navigate to the desired route after successful form submission
    if (showLoginDetails) {
      navigate("/home");
    } //else {
    //     // Handle signin logic if needed
    //   }
  };

  return (
    <div className="LoginAndSignin">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Enter email"
              {...register("email")}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.email?.message}
            </p>

            <input
              type="password"
              placeholder="Enter password"
              {...register("password")}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.password?.message}
            </p>

            <button type="submit">LOGIN</button>
          </form>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder=" Enter full name"
              {...register("fullName")}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.fullName?.message}
            </p>

            <input
              type="text"
              placeholder="Enter email"
              {...register("email")}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.email?.message}
            </p>

            <input
              type="text"
              placeholder="Cadre"
              {...register("cadre")}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.cadre?.message}
            </p>

            <input
              type="password"
              placeholder="Enter password"
              {...register("password")}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.password?.message}
            </p>

            <input
              type="password"
              placeholder="Re-enter password"
              {...register("confirmPassword")}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.confirmPassword?.message}
            </p>

            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember Me
            </label>

            <button type="submit">SIGNIN</button>
          </form>
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
