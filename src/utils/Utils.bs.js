// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");

function infoAboutIpAddress(ip) {
  if (ip !== undefined) {
    return React.createElement("div", undefined, "Your IP address is: ", React.createElement("b", undefined, ip));
  } else {
    return "Checking you IP address...";
  }
}

var demoVersion = 2;

var apiKey = "put-your-api-key-here";

exports.demoVersion = demoVersion;
exports.infoAboutIpAddress = infoAboutIpAddress;
exports.apiKey = apiKey;
/* react Not a pure module */
