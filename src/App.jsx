import React from 'react';
    import { Link } from 'react-router-dom';
    import './App.css';

    const App = () => {
      return (
        <div className="container">
          <h1>Unicorn Commander Product Suite</h1>
          <div className="card-container">
            <Link to="/cognitive-companion" className="card">
              <h2>Cognitive Companion</h2>
              <p>Collaborate with Your Squad: AI + Human</p>
            </Link>
            <Link to="/centerdeep" className="card">
              <h2>CenterDeep</h2>
              <p>Dig Deeper. Think Smarter. Act Faster.</p>
            </Link>
            <Link to="/command-canvas" className="card">
              <h2>Command Canvas</h2>
              <p>Create. Edit. Inspire—All On Command.</p>
            </Link>
            <Link to="/magicode" className="card">
              <h2>MagiCode</h2>
              <p>Build Smarter. Code Faster. Automate Everything.</p>
            </Link>
            <Link to="/crc" className="card">
              <h2>CRC</h2>
              <p>Take Command of Your Server—Meet The Colonel and His Elite Command Staff!</p>
            </Link>
          </div>
        </div>
      );
    };

    export default App;
