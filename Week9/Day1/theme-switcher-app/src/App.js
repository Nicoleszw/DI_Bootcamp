// Exercise 1 

// import React, { useContext } from 'react';
// import './App.css';
// import { ThemeContext } from './ThemeContext';
// import ThemeSwitcher from './ThemeSwitcher';

// function App() {
//   const { theme } = useContext(ThemeContext);

//   const appStyles = {
//     height: '100vh',
//     backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
//     color: theme === 'light' ? '#000' : '#fff',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   return (
//     <div style={appStyles}>
//       <h1>🌗 Theme Switcher Example</h1>
//       <ThemeSwitcher />
//       <p>This is a {theme} themed page.</p>
//     </div>
//   );
// }

// export default App;

// Exercise 2 

import React from 'react';
import CharacterCounter from './CharacterCounter';

function App() {
  return (
    <div>
      <CharacterCounter />
    </div>
  );
}

export default App;

