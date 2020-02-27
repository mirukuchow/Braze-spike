import React from "react";

const New = ({ appboy }) => {
  appboy.openSession();
  appboy.changeUser("136");
  appboy.toggleAppboyLogging();
  appboy.getUser().getUserId(function(userId) {
    console.log("The user is " + userId);
  });
  return <div>hello!</div>;
};

export default New;
