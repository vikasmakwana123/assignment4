import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        background: "linear-gradient(270deg, #3a9ee1, #7c77f6ff)",
        backgroundSize: "600% 600%",
        animation: "gradientMove 8s ease infinite",
        padding: "20px",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid whitesmoke",
        position: "relative",
      }}
    >
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 80px;
              right: 0;
              background: linear-gradient(270deg, #3a9ee1, #7c77f6ff);
              width: 100%;
              text-align: center;
              padding: 20px 0;
              border-top: 1px solid whitesmoke;
            }
            .nav-links.open {
              display: flex;
            }
            .hamburger {
              display: block;
              cursor: pointer;
            }
          }

          @media (min-width: 769px) {
            .nav-links {
              display: flex;
              gap: 20px;
            }
            .hamburger {
              display: none;
            }
          }
        `}
      </style>

      <div
        style={{
          color: "whitesmoke",
          fontWeight: "bold",
          fontSize: "1.7rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        MyWebsite
      </div>

      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          fontSize: "1.8rem",
          color: "white",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`} style={{listStyle:'none', margin: 0, padding: 0 }}>
        <li style={{ margin: isOpen? "10px 0px 10px  0px" : "8px",}}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              fontSize: isActive ? "1.4rem" : "1.3rem",
              
            })}
          >
            Home
          </NavLink>
        </li>
        <li style={{ margin: isOpen? "10px 0px 10px  0px" : "8px",}}>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              fontSize: isActive ? "1.4rem" : "1.3rem",
              
            })}
          >
            About
          </NavLink>
        </li>
        <li style={{ margin: isOpen? "10px 0px 10px  0px" : "8px",}}>
          <NavLink
            to="/userinfo"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              fontSize: isActive ? "1.4rem" : "1.3rem",
              
            })}
          >
            User Info
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
