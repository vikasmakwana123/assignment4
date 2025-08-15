import React from 'react';

const About = () => {
  return (
    <div
      style={{
        padding: '40px 20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #f9f9f9, #ececec)',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: 'inset 0 0 15px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '45px', color: '#3a3a3a',textDecoration:'underline' }}>Welcome to our website this is just a prototype.</h1>
        <p style={{ lineHeight: '1.6', color: '#555', fontSize: '1rem', marginTop: '10px' }}>
          This website is created using React and React Router for navigation. It features a simple layout with a Navbar, Home, About, and User Info pages.
        </p>
      </div>
    </div>
  );
};

export default About;
