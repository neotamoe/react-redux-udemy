import React from 'react';
import ReactDOM from 'react-dom';
import key from './api_key.js';
import SearchBar from './components/search_bar';

const API_KEY = key;

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
