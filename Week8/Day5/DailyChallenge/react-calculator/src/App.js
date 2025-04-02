import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Invalid input');
      return;
    }

    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : 'Cannot divide by 0';
        break;
      default:
        res = 'Invalid operation';
    }

    setResult(res);
  };

  return (
    <div className="app">
      <h1>Adding Two Numbers</h1>

      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="select"
      >
        <option value="+">+ Add</option>
        <option value="-">− Subtract</option>
        <option value="*">× Multiply</option>
        <option value="/">÷ Divide</option>
      </select>

      <br />

      <button onClick={calculate}>Add Them!</button>

      {result !== null && <h2>{result}</h2>}
    </div>
  );
}

export default App;
