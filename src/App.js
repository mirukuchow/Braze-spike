import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <button onClick={() => props.appboy.logCustomEvent("test-web-event")}>
        Click me!
      </button>
    </div>
  );
}

export default App;
