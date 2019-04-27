[@bs.config {jsx: 2}];

module GetLocation = [%graphql
  {|
  query getLocation ($ipAddress: String!) {
    getLocation(ip: $ipAddress) {
      location {
        latitude
        longitude
      }
      country {
        iso_code
      }
    }
  }
|}
];

module GetLocationQuery = ReasonApollo.CreateQuery(GetLocation);

[@react.component]
let make =
    (~ipAddress: option(string), ~selected: list(string), ~onMarkerPress) =>
  switch (ipAddress) {
  | Some(ip) =>
    let getLocationQuery = GetLocation.make(~ipAddress=ip, ());

    <GetLocationQuery variables=getLocationQuery##variables>
      ...{({result}) =>
        <div>
          {switch (result) {
           | Loading => ReasonReact.string("Loading map")
           | Error(_) => ReasonReact.string("Error")
           | Data(data) =>
             switch (data##getLocation) {
             | Some(query) =>
               switch (query##location, query##country) {
               | (Some(location), Some(country)) =>
                 switch (
                   location##latitude,
                   location##longitude,
                   country##iso_code,
                 ) {
                 | (Some(lat), Some(long), Some(isoCode)) =>
                   <Map
                     lat
                     long
                     isoCode
                     selected
                     onMarkerPress
                     withUserLocation=true
                   />
                 | _ => ReasonReact.string("No location found")
                 }
               | _ => ReasonReact.string("No location found")
               }
             | None => <Map selected onMarkerPress />
             }
           }}
        </div>
      }
    </GetLocationQuery>;
  | None => <div> ReasonReact.null </div>
  };