// Exercise 1 

// import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ErrorBoundary from './ErrorBoundary';

// function HomeScreen() {
//   return <h1>Home</h1>;
// }

// function ProfileScreen() {
//   return <h1>Profile Screen</h1>;
// }

// function ShopScreen() {
//   throw new Error("Shop component crashed!");
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/" end activeclassname="active">
//               Home
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/profile" activeclassname="active">
//               Profile
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/shop" activeclassname="active">
//               Shop
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <Container className="mt-4">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ErrorBoundary>
//                 <HomeScreen />
//               </ErrorBoundary>
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               <ErrorBoundary>
//                 <ProfileScreen />
//               </ErrorBoundary>
//             }
//           />
//           <Route
//             path="/shop"
//             element={
//               <ErrorBoundary>
//                 <ShopScreen />
//               </ErrorBoundary>
//             }
//           />
//         </Routes>
//       </Container>
//     </BrowserRouter>
//   );
// }

// export default App;

// Exercise 2 

// import React from 'react';
// import PostList from './PostList';

// function App() {
//   return (
//     <div>
//       <PostList />
//     </div>
//   );
// }

// export default App;

// Exercise 3 

// import React from 'react';
// import Example1 from './Example1';
// import Example2 from './Example2';
// import Example3 from './Example3';

// function App() {
//   return (
//     <div>
//       <h2>Example1 Component</h2>
//       <Example1 />

//       <h2>Example2 Component</h2>
//       <Example2 />

//       <h2>Example3 Component</h2>
//       <Example3 />
//     </div>
//   );
// }

// export default App;


// Exercise 4

import React from 'react';

function App() {
  const postData = async () => {
    try {
      const response = await fetch('https://webhook.site/ce8f1c95-9b10-490a-aafc-041407b061fc', {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key1: 'myusername',
          email: 'mymail@gmail.com',
          name: 'Isaac',
          lastname: 'Doe',
          age: 27,
        }),
      });

      console.log('Response:', response);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={postData}>Press me to post some data</button>
    </div>
  );
}

export default App;

