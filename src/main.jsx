import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import App from './App';
    import CognitiveCompanion from './pages/CognitiveCompanion';
    import CenterDeep from './pages/CenterDeep';
    import CommandCanvas from './pages/CommandCanvas';
    import MagiCode from './pages/MagiCode';
    import CRC from './pages/CRC';
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cognitive-companion" element={<CognitiveCompanion />} />
            <Route path="/centerdeep" element={<CenterDeep />} />
            <Route path="/command-canvas" element={<CommandCanvas />} />
            <Route path="/magicode" element={<MagiCode />} />
            <Route path="/crc" element={<CRC />} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
