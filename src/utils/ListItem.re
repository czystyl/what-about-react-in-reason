[@react.component]
let make = (~name, ~onAddCountry, ~color="#becce2") =>
  <li
    key=name
    onClick={_e => onAddCountry(name)}
    style={ReactDOMRe.Style.make(
      ~height="30px",
      ~backgroundColor=color,
      ~border="1px solid black",
      ~borderRadius="5px",
      ~margin="10px 0",
      ~lineHeight="30px",
      ~textAlign="center",
      ~cursor="pointer",
      ~userSelect="none",
      (),
    )}>
    <div> {ReasonReact.string(name)} </div>
  </li>;