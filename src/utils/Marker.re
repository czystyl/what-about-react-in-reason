[@react.component]
let make = (~lat, ~lng, ~isoCode, ~onMarkerPress) => {
  let countryEmoji = Country2emoji.make(isoCode);

  let emoji =
    switch (countryEmoji) {
    | Some(e) => e
    | None => "Emoji not found"
    };

  <div
    onClick=onMarkerPress
    style={ReactDOMRe.Style.make(
      ~position="absolute",
      ~top="50%",
      ~left="50%",
      ~width="24px",
      ~height="24px",
      ~border="3px solid #f44336",
      ~borderRadius="100%",
      ~backgroundColor="white",
      ~textAlign="center",
      ~color="#3f51b5",
      ~fontSize="14px",
      ~fontWeight="bold",
      ~padding="0",
      ~cursor="pointer",
      ~boxShadow="0 0 0 2px white",
      ~userSelect="none",
      (),
    )}>
    <div
      style={ReactDOMRe.Style.make(
        ~marginTop="0",
        ~paddingLeft="3px",
        ~userSelect="none",
        (),
      )}>
      {ReasonReact.string(emoji)}
    </div>
  </div>;
};