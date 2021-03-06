// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var Map$ReactHooksTemplate = require("./Map.bs.js");

var ppx_printed_query = "query getLocation($ipAddress: String!)  {\ngetLocation(ip: $ipAddress)  {\nlocation  {\nlatitude  \nlongitude  \n}\n\ncountry  {\niso_code  \n}\n\n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "getLocation");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeObject(value$1);
        var tmp$1;
        if (match$3 !== undefined) {
          var value$2 = Caml_option.valFromOption(match$3);
          var match$4 = Js_dict.get(value$2, "location");
          var tmp$2;
          if (match$4 !== undefined) {
            var value$3 = Caml_option.valFromOption(match$4);
            var match$5 = Js_json.decodeNull(value$3);
            if (match$5 !== undefined) {
              tmp$2 = undefined;
            } else {
              var match$6 = Js_json.decodeObject(value$3);
              var tmp$3;
              if (match$6 !== undefined) {
                var value$4 = Caml_option.valFromOption(match$6);
                var match$7 = Js_dict.get(value$4, "latitude");
                var tmp$4;
                if (match$7 !== undefined) {
                  var value$5 = Caml_option.valFromOption(match$7);
                  var match$8 = Js_json.decodeNull(value$5);
                  if (match$8 !== undefined) {
                    tmp$4 = undefined;
                  } else {
                    var match$9 = Js_json.decodeString(value$5);
                    tmp$4 = match$9 !== undefined ? match$9 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$5));
                  }
                } else {
                  tmp$4 = undefined;
                }
                var match$10 = Js_dict.get(value$4, "longitude");
                var tmp$5;
                if (match$10 !== undefined) {
                  var value$6 = Caml_option.valFromOption(match$10);
                  var match$11 = Js_json.decodeNull(value$6);
                  if (match$11 !== undefined) {
                    tmp$5 = undefined;
                  } else {
                    var match$12 = Js_json.decodeString(value$6);
                    tmp$5 = match$12 !== undefined ? match$12 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
                  }
                } else {
                  tmp$5 = undefined;
                }
                tmp$3 = {
                  latitude: tmp$4,
                  longitude: tmp$5
                };
              } else {
                tmp$3 = Js_exn.raiseError("graphql_ppx: Object is not a value");
              }
              tmp$2 = Caml_option.some(tmp$3);
            }
          } else {
            tmp$2 = undefined;
          }
          var match$13 = Js_dict.get(value$2, "country");
          var tmp$6;
          if (match$13 !== undefined) {
            var value$7 = Caml_option.valFromOption(match$13);
            var match$14 = Js_json.decodeNull(value$7);
            if (match$14 !== undefined) {
              tmp$6 = undefined;
            } else {
              var match$15 = Js_json.decodeObject(value$7);
              var tmp$7;
              if (match$15 !== undefined) {
                var match$16 = Js_dict.get(Caml_option.valFromOption(match$15), "iso_code");
                var tmp$8;
                if (match$16 !== undefined) {
                  var value$8 = Caml_option.valFromOption(match$16);
                  var match$17 = Js_json.decodeNull(value$8);
                  if (match$17 !== undefined) {
                    tmp$8 = undefined;
                  } else {
                    var match$18 = Js_json.decodeString(value$8);
                    tmp$8 = match$18 !== undefined ? match$18 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$8));
                  }
                } else {
                  tmp$8 = undefined;
                }
                tmp$7 = {
                  iso_code: tmp$8
                };
              } else {
                tmp$7 = Js_exn.raiseError("graphql_ppx: Object is not a value");
              }
              tmp$6 = Caml_option.some(tmp$7);
            }
          } else {
            tmp$6 = undefined;
          }
          tmp$1 = {
            location: tmp$2,
            country: tmp$6
          };
        } else {
          tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
        }
        tmp = Caml_option.some(tmp$1);
      }
    } else {
      tmp = undefined;
    }
    return {
            getLocation: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(ipAddress, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[/* tuple */[
                  "ipAddress",
                  ipAddress
                ]]),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var ipAddress = variables.ipAddress;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[/* tuple */[
                  "ipAddress",
                  ipAddress
                ]]),
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetLocation = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var GetLocationQuery = ReasonApollo.CreateQuery([
      ppx_printed_query,
      parse
    ]);

function Query__f(Props) {
  var ipAddress = Props.ipAddress;
  var selected = Props.selected;
  var onMarkerPress = Props.onMarkerPress;
  if (ipAddress !== undefined) {
    var getLocationQuery = make(ipAddress, /* () */0);
    return ReasonReact.element(undefined, undefined, Curry.app(GetLocationQuery[/* make */3], [
                    Caml_option.some(getLocationQuery.variables),
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    (function (param) {
                        var result = param[/* result */0];
                        var tmp;
                        if (typeof result === "number") {
                          tmp = "Loading map";
                        } else if (result.tag) {
                          var match = result[0].getLocation;
                          if (match !== undefined) {
                            var query = Caml_option.valFromOption(match);
                            var match$1 = query.location;
                            var match$2 = query.country;
                            if (match$1 !== undefined && match$2 !== undefined) {
                              var $$location = Caml_option.valFromOption(match$1);
                              var match$3 = $$location.latitude;
                              var match$4 = $$location.longitude;
                              var match$5 = Caml_option.valFromOption(match$2).iso_code;
                              tmp = match$3 !== undefined && match$4 !== undefined && match$5 !== undefined ? ReasonReact.element(undefined, undefined, Map$ReactHooksTemplate.make(match$3, match$4, match$5, true, selected, onMarkerPress, /* array */[])) : "No location found";
                            } else {
                              tmp = "No location found";
                            }
                          } else {
                            tmp = ReasonReact.element(undefined, undefined, Map$ReactHooksTemplate.make(undefined, undefined, undefined, undefined, selected, onMarkerPress, /* array */[]));
                          }
                        } else {
                          tmp = "Error";
                        }
                        return React.createElement("div", undefined, tmp);
                      })
                  ]));
  } else {
    return React.createElement("div", undefined, null);
  }
}

var make$1 = Query__f;

exports.GetLocation = GetLocation;
exports.GetLocationQuery = GetLocationQuery;
exports.make = make$1;
/* GetLocationQuery Not a pure module */
