import React, { useState } from "react";
// import logo from './logo.svg';
import New from "./NewTab";
import "./App.css";

const App = ({ appboy }) => {
  const [show, setShow] = useState(false);
  // const showSlideUpMessage = () => {
  //   let message = new appboy.ab.SlideUpMessage(
  //     "This is a Slide-Up In-App Message!"
  //   );
  //   message.slideFrom = appboy.ab.InAppMessage.SlideFrom.TOP;
  //   appboy.display.showInAppMessage(message);
  // };

  // const showModal = () => {
  //   let modal = new appboy.ab.ModalMessage();
  //   modal.header = "Woah, there...";
  //   modal.message =
  //     "Doing this might be a terrible idea but ,idk, here's a modal to make you think twice.";
  //   appboy.display.showInAppMessage(modal);
  // };
  // appboy.subscribeToInAppMessage(function(inAppMessage) {
  //   appboy.display.showInAppMessage(inAppMessage);
  // });
  return (
    <div className="App">
      <button
        onClick={() => {
          appboy.logCustomEvent("test-web-event-2", { appName: "Test" });
        }}
      >
        showModal
      </button>
      <button onClick={() => setShow(!show)}> show me!!</button>
      {show && <New appboy={appboy} />}
    </div>
  );
};

export default App;
