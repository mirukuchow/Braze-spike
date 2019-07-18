import React from 'react';
import logo from './logo.svg';
import './App.css';
import appboy from 'appboy-web-sdk';

function App() {
  return (
    <div className="App">
      <button onClick={appboy.logCustomEvent("test-web-event")}>
        Click me!
      </button>
    </div>
  );
}

export default App;
