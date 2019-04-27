module Component = {
  [@react.component]
  let make =
      (
        ~lat="50.06",
        ~long="19.94",
        ~isoCode="PL",
        ~withUserLocation=false,
        ~selected: list(string),
        ~onMarkerPress,
      ) =>
    <div
      style={ReactDOMRe.Style.make(
        ~position="fixed",
        ~width="75%",
        ~height="98vh",
        ~border="1px solid gray",
        (),
      )}>
      <GoogleMapReact
        defaultZoom=12
        defaultCenter={
          lat: float_of_string(lat),
          lng: float_of_string(long),
        }
        bootstrapURLKeys={"key": Utils.apiKey}>
        {withUserLocation
           ? <Marker lat lng=long isoCode onMarkerPress={_ => ()} />
           : ReasonReact.null}
        {selected
         |> List.map(i =>
              switch (Data.getByCode(i)) {
              | Some(country) =>
                let (lat, lng) = country.latlng;

                <Marker
                  key=i
                  lat
                  lng
                  isoCode={country.country_code}
                  onMarkerPress={_ => onMarkerPress(country.name)}
                />;
              | None => ReasonReact.null
              }
            )
         |> Array.of_list
         |> ReasonReact.array}
      </GoogleMapReact>
    </div>;
};

let component = ReasonReact.statelessComponent("FixForReasonApolloJsxV3");

/* Default coordination is Wroclaw */
let make =
    (
      ~lat="50.06",
      ~long="19.94",
      ~isoCode="PL",
      ~withUserLocation=false,
      ~selected,
      ~onMarkerPress,
      _children,
    ) => {
  ...component,
  render: _self =>
    <Component lat long isoCode selected onMarkerPress withUserLocation />,
};