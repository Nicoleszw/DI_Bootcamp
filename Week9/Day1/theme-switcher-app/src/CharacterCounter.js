import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef(null);        
  const [charCount, setCharCount] = useState(0); 

  // 3. Event handler for input changes
  const handleInput = () => {
    const length = inputRef.current.value.length;
    setCharCount(length);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>✍️ Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
        style={{ padding: '10px', width: '60%' }}
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;
