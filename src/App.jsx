import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);

  const analyzeWebsite = () => {
    if (!url) {
      alert("Please enter a website URL");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setScanned(true);
    }, 1500);
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h1>StackSnap</h1>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <p className="tag">WEBSITE TECHNOLOGY DETECTOR</p>

        <h2>
          Discover what's
          <span> powering </span>
          any website.
        </h2>

        <p className="description">
          Enter a website URL and StackSnap will analyze its technology stack.
        </p>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button onClick={analyzeWebsite}>
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>
      </section>

      {/* Results */}
      {scanned && (
        <section className="results">

          <h2>Technology Stack</h2>

          <p className="scanned-url">
            Results for: <strong>{url}</strong>
          </p>

          <div className="cards">

            <div className="card">
              <div className="icon">⚛️</div>
              <h3>Frontend</h3>
              <p>React.js</p>
              <span>Detected ✓</span>
            </div>

            <div className="card">
              <div className="icon">🟢</div>
              <h3>Backend</h3>
              <p>Node.js</p>
              <span>Detected ✓</span>
            </div>

            <div className="card">
              <div className="icon">🗄️</div>
              <h3>Database</h3>
              <p>MongoDB</p>
              <span>Detected ✓</span>
            </div>

            <div className="card">
              <div className="icon">☁️</div>
              <h3>Hosting</h3>
              <p>Vercel</p>
              <span>Detected ✓</span>
            </div>

          </div>

        </section>
      )}

      {/* Footer */}
      <footer>
        <p>© 2026 StackSnap</p>
      </footer>

    </div>
  );
}

export default App;