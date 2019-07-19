import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appboy from 'appboy-web-sdk';

console.log(appboy);

appboy.initialize('api-key', { baseUrl: 'http://sdk.iad-03.braze.com/api/v3'});
appboy.display.automaticallyShowNewInAppMessages();
appboy.openSession();
appboy.changeUser("103");
appboy.toggleAppboyLogging();
appboy.getUser().getUserId(function(userId) {
   console.log('The user is ' + userId);
});
ReactDOM.render(<App appboy={appboy}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
