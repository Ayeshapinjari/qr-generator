import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app">
      <h1>QR Code Generator</h1>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="qr-section">
        {text ? (
          <QRCode value={text} size={200} />
        ) : (
          <p>Enter text to generate QR code</p>
        )}
      </div>
    </div>
  );
}

export default App;
