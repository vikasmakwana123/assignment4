import React from 'react';

const UserInfo = () => {
  return (
    <div
      style={{
        padding: '40px 20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
      }}
    >
      <div
        style={{
          width: '400px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px) scale(1.025) translateX(-10px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          e.currentTarget.style.backgroundColor = 'whitesmoke';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '4px solid #4CAF50',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            marginBottom: '20px',
          }}
          src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
          alt="Profile"
        />
        <h2 style={{ margin: '10px 0', fontSize: '1.5rem', color: '#333' }}>
          Vikas Makwana
        </h2>
        <p style={{ fontSize: '1rem', color: '#555', margin: '5px 0' }}>
          <strong>Age:</strong> 20
        </p>
        <p style={{ fontSize: '1rem', color: '#555', margin: '5px 0' }}>
          <strong>Birth Date:</strong> 27 May 2000
        </p>
        <p style={{ fontSize: '1rem', color: '#555', margin: '5px 0' }}>
          <strong>Address:</strong> Surat, Gujarat, India
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
