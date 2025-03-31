// Exercise 1 
// import React from 'react';

// function App() {
//  const myelement = <h1>I Love JSX!</h1>;
//  const sum = 5 + 5;

//  return (
//    <div className="App">
//      <p>Hello World!</p>
//      {myelement}
//      <p>React is {sum} times better with JSX</p>
//    </div>
//  );
//}

//export default App;


// Exercise 2
//import React from 'react';
//import UserFavoriteAnimals from './UserFavoriteAnimals';

//const user = {
//  firstName: 'Bob',
//  lastName: 'Dylan',
//  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//};

//function App() {
//  return (
//    <div className="App">
//      <h3>{user.firstName}</h3>
//      <h3>{user.lastName}</h3>
//      <UserFavoriteAnimals favAnimals={user.favAnimals} />
//    </div>
//  );
//}

//export default App;

import React from 'react';
import Exercise from './Exercise3';

function App() {
  return (
    <div className="App">
      <Exercise />
    </div>
  );
}

export default App;

