// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Map$ReactHooksTemplate = require("./Map.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var CountryList$ReactHooksTemplate = require("./CountryList.bs.js");

function SimpleApp__f(Props) {
  var match = React.useReducer((function (state, action) {
          if (action.tag) {
            var country = action[0];
            return /* record */[/* countries */List.filter((function (item) {
                              return item !== country;
                            }))(state[/* countries */0])];
          } else {
            var country$1 = action[0];
            var result;
            var exit = 0;
            var val;
            try {
              val = List.find((function (i) {
                      return i === country$1;
                    }), state[/* countries */0]);
              exit = 1;
            }
            catch (exn){
              if (exn === Caml_builtin_exceptions.not_found) {
                result = /* :: */[
                  country$1,
                  state[/* countries */0]
                ];
              } else {
                throw exn;
              }
            }
            if (exit === 1) {
              result = state[/* countries */0];
            }
            return /* record */[/* countries */result];
          }
        }), /* record */[/* countries : [] */0]);
  var dispatch = match[1];
  var state = match[0];
  var handleAddCountry = function (country) {
    return Curry._1(dispatch, /* AddCountry */Block.__(0, [country]));
  };
  var handleRemoveCountry = function (country) {
    return Curry._1(dispatch, /* RemoveCountry */Block.__(1, [country]));
  };
  return React.createElement("div", undefined, React.createElement("div", {
                  style: {
                    float: "left",
                    padding: "0 2%",
                    width: "20%"
                  }
                }, React.createElement("div", undefined, React.createElement(CountryList$ReactHooksTemplate.make, {
                          onAddCountry: handleAddCountry,
                          selected: state[/* countries */0]
                        }))), React.createElement("div", {
                  style: {
                    float: "left"
                  }
                }, React.createElement(Map$ReactHooksTemplate.Component[/* make */0], {
                      selected: state[/* countries */0],
                      onMarkerPress: handleRemoveCountry
                    })));
}

var make = SimpleApp__f;

exports.make = make;
/* react Not a pure module */
