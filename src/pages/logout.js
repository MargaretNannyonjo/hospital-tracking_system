import React from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      navigate("/");
    }
    // If user clicks "Cancel," do nothing
  };

  return (
    <button>
      <a href="#" onClick={handleLogout}>
        Logout
      </a>
    </button>
  );
};
