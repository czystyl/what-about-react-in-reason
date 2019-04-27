type state = {
  ip: option(string),
  countries: list(string),
};

type action =
  | SetIpAddress(string)
  | AddCountry(string)
  | RemoveCountry(string);

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | SetIpAddress(ip) => {...state, ip: Some(ip)}
        | AddCountry(country) =>
          let result =
            switch (List.find(i => i === country, state.countries)) {
            | _ => state.countries
            | exception Not_found => [country, ...state.countries]
            };

          {...state, countries: result};
        | RemoveCountry(country) => {
            ...state,
            countries: state.countries |> List.filter(item => item != country),
          }
        },
      {ip: None, countries: []},
    );

  /* TODO: Creat useEffect hook  */
  /* TODO: get data from  "api.ipify.org/?format=json"

     use Axios and resolve the promose using Js.Promise.t('a)
     response shape: response.data.ip
     */

  React.useEffect(() => {
    let _ =
      Js.Promise.(
        Axios.get("https://api.ipify.org/?format=json")
        |> then_(response =>
             resolve(dispatch(SetIpAddress(response##data##ip)))
           )
        |> catch(error => resolve(Js.log(error)))
      );

    Some(() => ());
  });

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
      <div> {Utils.infoAboutIpAddress(state.ip)} </div>
      <div>
        <CountryList__f
          onAddCountry=handleAddCountry
          selected={state.countries}
        />
      </div>
    </div>
    <div style={ReactDOMRe.Style.make(~float="left", ())}>
      <Query
        ipAddress={state.ip}
        selected={state.countries}
        onMarkerPress=handleRemoveCountry
      />
    </div>
  </div>;
};