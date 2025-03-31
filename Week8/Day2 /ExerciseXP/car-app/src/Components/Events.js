import React, { useState } from 'react';

const Events = () => {
  // Part I: Click Alert
  const clickMe = () => {
    alert('I was clicked');
  };

  // Part II: Enter Key Detection
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${inputValue}`);
    }
  };

  // Part III: Toggle ON/OFF
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      {}
      <button onClick={clickMe}>Click Me</button>

      {}
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Press the ENTER key!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {}
      <div style={{ marginTop: '20px' }}>
        <p>Exercise 9:</p>
        <button onClick={toggleButton}>{isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    </div>
  );
};

export default Events;
