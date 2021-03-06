type state = {countries: list(string)};

type action =
  | AddCountry(string)
  | RemoveCountry(string);

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | AddCountry(country) =>
          let result =
            switch (List.find(i => i === country, state.countries)) {
            | _ => state.countries
            | exception Not_found => [country, ...state.countries]
            };

          {countries: result};
        | RemoveCountry(country) => {
            countries: state.countries |> List.filter(item => item != country),
          }
        },
      {countries: []},
    );

  let handleAddCountry = country => dispatch(AddCountry(country));
  let handleRemoveCountry = country => dispatch(RemoveCountry(country));

  <div>
    <div
      style={ReactDOMRe.Style.make(
        ~float="left",
        ~width="20%",
        ~padding="0 2%",
        (),
      )}>
      <div>
        <CountryList
          onAddCountry=handleAddCountry
          selected={state.countries}
        />
      </div>
    </div>
    <div style={ReactDOMRe.Style.make(~float="left", ())}>
      <Map.Component
        selected={state.countries}
        onMarkerPress=handleRemoveCountry
      />
    </div>
  </div>;
};