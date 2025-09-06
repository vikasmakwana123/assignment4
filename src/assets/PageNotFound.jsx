import React from "react";
import galaxyImage from "../galaxy.webp"; // ✅ make sure this file is inside src folder
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h1
        style={{
          fontSize: "120px",
          fontWeight: "bold",
          textTransform: "uppercase",
          backgroundImage: `url(${galaxyImage})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
        }}
      >
        Oops!
      </h1>

      <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0" }}>
        404 - PAGE NOT FOUND
      </h2>

      <p style={{ color: "#555", fontSize: "16px", marginBottom: "30px" }}>
        The page you are looking for might have been removed <br />
        had its name changed or is temporarily unavailable.
      </p>

<NavLink
  to="/"
  style={{
    display: "inline-block",
    padding: "12px 30px",
    background: "#0056ff",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "30px",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(0, 86, 255, 0.3)",
    transition: "0.3s ease",
  }}
  onMouseOver={(e) => {
    e.target.style.background = "#003bb5";
    e.target.style.boxShadow = "0 6px 20px rgba(0, 59, 181, 0.4)";
  }}
  onMouseOut={(e) => {
    e.target.style.background = "#0056ff";
    e.target.style.boxShadow = "0 4px 15px rgba(0, 86, 255, 0.3)";
  }}
>
  GO TO HOMEPAGE
</NavLink>
    </div>
  );
};

export default PageNotFound;
