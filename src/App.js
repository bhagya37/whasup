import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    const payload = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "916302937467",
      type: "text",
      text: {
        body: "Hello"
      }
    };

    axios.post("https://graph.facebook.com/v19.0/302797252927415/messages", payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer EAAQI7isKUIcBO7oSjzr40ArbNYEvCZA5qcZCdIqmd7urZBJRZBv8fC6vd9UEtGDZCEleZC8etWDa3svP4s73o52VviMbf4dN6t2PrWvLDJZBlYTpZCaUBEISHeoc4kZASmrizQIZBkZBZCgOtxfuUraUSW5gU0GHJZBiXraUkzVGojUJI0tFE4A4FT1mP2IUhArZCR1bXKxFtpHP4DhRS48eZCMbNCbvrkGwxSkPrbqWAuFkb2dbZC0ZD' // Replace with the actual access token
      }
    })
    .then((res) => {
      setIsPopupOpen(true);
      setError(null);
    })
    .catch((err) => {
      console.error(err);
      setError(err.response ? err.response.data.error.message : err.message);
    });
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div id="dialog-box">
        <h1 id='text'>welcome to Rajlee</h1>
        <button id="btn" onClick={handleButtonClick}>Send</button>
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close-btn" onClick={closePopup}>&times;</span>
              <p>Hello, user</p>
            </div>
          </div>
        )}
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;



