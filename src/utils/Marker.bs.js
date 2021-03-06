// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Country2emoji$ReactHooksTemplate = require("./Country2emoji.bs.js");

function Marker(Props) {
  Props.lat;
  Props.lng;
  var isoCode = Props.isoCode;
  var onMarkerPress = Props.onMarkerPress;
  var countryEmoji = Country2emoji$ReactHooksTemplate.make(isoCode);
  var emoji = countryEmoji !== undefined ? countryEmoji : "Emoji not found";
  return React.createElement("div", {
              style: {
                backgroundColor: "white",
                border: "3px solid #f44336",
                color: "#3f51b5",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                height: "24px",
                left: "50%",
                padding: "0",
                position: "absolute",
                textAlign: "center",
                top: "50%",
                width: "24px",
                borderRadius: "100%",
                boxShadow: "0 0 0 2px white",
                userSelect: "none"
              },
              onClick: onMarkerPress
            }, React.createElement("div", {
                  style: {
                    marginTop: "0",
                    paddingLeft: "3px",
                    userSelect: "none"
                  }
                }, emoji));
}

var make = Marker;

exports.make = make;
/* react Not a pure module */
