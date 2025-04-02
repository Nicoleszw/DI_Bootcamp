// Exercise 1 

// import React from 'react';
// import BuggyCounter from './BuggyCounter';
// import ErrorBoundary from './ErrorBoundary';

// function App() {
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>

//       {/* Simulation 1: Two components, one Error Boundary */}
//       <h2>Simulation 1:</h2>
//       <p>These two counters are inside the same error boundary. If one crashes, both are replaced.</p>
//       <ErrorBoundary>
//         <BuggyCounter />
//         <BuggyCounter />
//       </ErrorBoundary>

//       <hr />

//       {/* Simulation 2: Two components, separate Error Boundaries */}
//       <h2>Simulation 2:</h2>
//       <p>These two counters each have their own error boundary. If one crashes, the other is unaffected.</p>
//       <div style={{ display: 'flex', gap: '20px' }}>
//         <ErrorBoundary>
//           <BuggyCounter />
//         </ErrorBoundary>
//         <ErrorBoundary>
//           <BuggyCounter />
//         </ErrorBoundary> 
//       </div>

//       <hr />

//       {/* Simulation 3: Component without an Error Boundary */}
//       <h2>Simulation 3:</h2>
//       <p>This counter does not have an error boundary. If it crashes, the entire application crashes.</p>
//       <BuggyCounter />

//     </div>
//   );
// }

// export default App;

// Exercise 2 

// import React from 'react';
// import FavoriteColor from './FavoriteColor';

// function App() {
//   return (
//     <div style={{padding: '20px'}}>
//       <FavoriteColor />
//     </div>
//   );
// }

// export default App;


// Exercise 3 

import React from 'react';

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        {this.state.show && <Child />}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default App;

