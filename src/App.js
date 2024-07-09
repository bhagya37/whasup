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
        'Authorization': 'Bearer EAAQnB8HfvEcBO6W7y1GtBAj8N9EVK6fvBx2x73o9RMO7MzGIOBVIMnhfMmfVEvsKo04mclVmCmuH6ryZB8pYLzTEKNpMDjh2KdBAi8uKIinO9bZAIOLuIPNQKfsL8bj0VYtomFnnsxNv7c12hrqHBd1zejVNuHe1dCGh2gIIqwQ4fZCRvTcS5hiaosYdS5vGwoRhPLZA4fOGJU8nbNvOkXDh8fKr02q72dbZC73eqhtsZD' // Replace with the actual access token
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



