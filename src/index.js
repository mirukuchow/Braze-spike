import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import appboy from "appboy-web-sdk";

console.log(appboy);

appboy.initialize("api-key", {
  baseUrl: "https://sdk.iad-03.braze.com/api/v3",
  minimumIntervalBetweenTriggerActionsInSeconds: 5
});
appboy.display.automaticallyShowNewInAppMessages();
ReactDOM.render(<App appboy={appboy} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
