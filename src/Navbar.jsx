import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(270deg, #3a9ee1, #7c77f6ff)',
        backgroundSize: '600% 600%',
        animation: 'gradientMove 8s ease infinite',
        padding: '20px ',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid whitesmoke',
        boxShadow: 'inset 0 2px 8px rgba(38, 38, 38, 0.4), inset 0 -2px 8px rgba(31, 31, 31, 0.4)', // inner shadow top & bottom
        width: '100vw',
      }}
    >
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div
        style={{
          color: 'whitesmoke',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        MyWebsite
      </div>

      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? 'black' : 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: isActive ? '1.1rem' : '1rem',
          })}>Home</NavLink>
        </li>
        <li style={{ marginRight: '20px' }}>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
               color: isActive ? 'black' : 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: isActive ? '1.1rem' : '1rem',
            })}
          >
            About
          </NavLink>

        </li>
        <li>
          <NavLink to="/userinfo" style={({ isActive }) => ({
             color: isActive ? 'black' : 'white',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: isActive ? '1.1rem' : '1rem',
          })}>User Info</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
