import React, { useState, useEffect } from 'react';
import quotes from './quotes';
import './App.css';

const getRandomIndex = (exclude, length) => {
  let index;
  do {
    index = Math.floor(Math.random() * length);
  } while (index === exclude);
  return index;
};

const getRandomColor = () => {
  const colors = ['#6a0dad', '#ff6347', '#007acc', '#2e8b57', '#b22222', '#8a2be2'];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [color, setColor] = useState(getRandomColor());

  const newQuote = () => {
    const newIndex = getRandomIndex(currentIndex, quotes.length);
    const newColor = getRandomColor();
    setCurrentIndex(newIndex);
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  useEffect(() => {
    newQuote(); 
  }, []);

  const { quote, author } = quotes[currentIndex];

  return (
    <div className="container">
      <div className="quote-box">
        <h1 className="quote" style={{ color }}>"{quote}"</h1>
        <p className="author" style={{ color }}>-{author || 'Unknown'}-</p>
        <button className="btn" onClick={newQuote} style={{ backgroundColor: color }}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
