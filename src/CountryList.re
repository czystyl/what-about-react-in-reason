open Data;

[@react.component]
let make = (~onAddCountry, ~selected: list(string)) =>
  <ul
    style={ReactDOMRe.Style.make(
      ~listStyle="none",
      ~padding="0",
      ~margin="0",
      (),
    )}>
    {countries
     |> Array.to_list
     |> List.filter(country =>
          switch (List.find(selected => selected == country.name, selected)) {
          | _ => false
          | exception Not_found => true
          }
        )
     |> Array.of_list
     |> Array.map(c => <ListItem key={c.name} name={c.name} onAddCountry />)
     |> ReasonReact.array}
  </ul>;