import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
  const apiURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY';

  return (
    <Provider store={store}>
      <div className="App">
        <h1>🍽 Recipes</h1>
        <DataFetcher url={apiURL} />
      </div>
    </Provider>
  );
};

export default App;
