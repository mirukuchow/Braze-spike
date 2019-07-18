import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appboy from 'appboy-web-sdk';

ReactDOM.render(<App />, document.getElementById('root'));
console.log(appboy);

appboy.initialize('YOUR-API-KEY-HERE');
appboy.display.automaticallyShowNewInAppMessages();
appboy.openSession();
appboy.changeUser("milly.test");
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
