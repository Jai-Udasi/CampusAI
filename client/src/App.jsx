function App() {
  return (
    <main>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#F8FAFC",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#0F172A",
            marginBottom: "10px",
          }}
        >
          CampusAI
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            color: "#475569",
            marginBottom: "30px",
          }}
        >
          Your Intelligent Campus Companion 🚀
        </p>

        <button
          style={{
            padding: "14px 30px",
            borderRadius: "12px",
            border: "none",
            background: "#2563EB",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>
    </main>
  );
}

export default App;