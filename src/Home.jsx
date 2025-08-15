import React from "react";

function Home() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif", minHeight: "100vh", width: "100vw" }}>
      
      {/* Hero Section */}
      <div style={{ backgroundColor: "#4f46e5", color: "white", padding: "50px 20px", textAlign: "center", width: "100%" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Welcome to My Website</h1>
        <p style={{ fontSize: "1.1rem", margin: "auto", maxWidth: "600px" }}>
          Discover amazing content, explore features, and enjoy a smooth experience.
        </p>
        <button
          style={{
            backgroundColor: "#22c55e",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "6px",
            marginTop: "20px",
            fontSize: "1rem",
            cursor: "pointer"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#16a34a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#22c55e")}
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div style={{ padding: "40px 20px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", width: "100%" }}>
        
        {[
          { title: " React", desc: "This Website is made using Vite+React " },
          { title: "Modern Design", desc: "Enjoy a clean and simple user interface." },
          { title: "Responsive Layout", desc: "Looks great on any device" }
        ].map((feature, index) => (
          <div key={index} style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            flex: "1 1 300px", // responsive flexible width
            maxWidth: "400px",
            heught: "200px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <h2 style={{ color: "#4f46e5",paddingBottom:'20px' }}>{feature.title}</h2>
            <p style={{ color: "#555",paddingBottom:'20px' }}>{feature.desc}</p>
          </div>
        ))}

      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#111827", color: "white", padding: "15px", textAlign: "center", width: "100%" }}>
        <p>© {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      </div>

    </div>
  );
}

export default Home;
